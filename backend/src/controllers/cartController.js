const { cart, user, products } = require('../models');
const jwt = require('jsonwebtoken');

const addToCart = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const username = decoded.username

    const { productId, qty} = req.body

    const userFound = await user.findOne({ where: { username: username}})
    const productFound = await products.findByPk(productId)

    if(!userFound || !productFound) {
      return res.status(404).json({ message: 'User or Product not found' });
    }

    const existingCartItem = await cart.findOne({
      where: {
        userId: userFound.id,
        productId
      }
    })

    if(existingCartItem) {
      existingCartItem.qty += qty;
      await existingCartItem.save();
      res.status(201).json(existingCartItem);
    } else {
      const newCartItem = await cart.create({
        userId: userFound.id,
        productId,
        qty
      });
      res.status(201).json(newCartItem);
    }

  }catch (error) { 
    res.status(500).json({ message: 'Error adding to cart', error: error.message });
  }
}

const getUserCart = async(req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const username = decoded.username

    const userFound = await user.findOne({ where: { username: username}})

    if(!userFound) {
      return res.status(404).json({ message: 'User not found' });
    }

    const cartItems = await cart.findAll({ 
      where: { userId: userFound.id },
      include: [
        { model: products, attributes: ['id', 'title', 'price', 'listImage'] }
      ]
    });

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cart items', error: error.message });
  }
}

const updateItemCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { qty, progress } = req.body;
    const updatedItem = await cart.update({ qty, progress }, { where: { id } });
    res
      .status(200)
      .json({ message: 'Item updated in cart', data: updatedItem });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error updating item in cart', error: error.message });
  }
};

const deleteItemCart = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const username = decoded.username

    const userFound = await user.findOne({ where: { username: username}})

    if(!userFound) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { productId } = req.body;

    const cartItems = await cart.findOne({
      where: { userId: userFound.id, productId}
    })

    if(!cartItems) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    await cartItems.destroy();

    res.status(200).json({ message: 'Item deleted from cart' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item from cart', error: error.message });
  }
};

module.exports = { addToCart, getUserCart, deleteItemCart, updateItemCart };
