const { cart } = require('../models');

const addToCart = async (req, res) => {
  try {
    const { productId, qty, progress } = req.body;
    const userId = req.user.id;
    console.log(userId);
    const newItem = await cart.create({
      productId: productId,
      qty: qty,
      progress: progress,
      userId: userId,
    });
    res.status(201).json({ message: 'Item added to cart', data: newItem });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error adding item to cart', error: error.message });
  }
};

const getUserCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cartItems = await cart.findAll({ where: { userId } });
    res
      .status(200)
      .json({ message: 'Cart items retrieved successfully', data: cartItems });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error retrieving cart items', error: error.message });
  }
};

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
    const { id } = req.params;
    const deletedItem = await cart.destroy({ where: { id } });
    res
      .status(200)
      .json({ message: 'Item deleted from cart', data: deletedItem });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error deleting item from cart', error: error.message });
  }
};

module.exports = { addToCart, getUserCart, deleteItemCart, updateItemCart };
