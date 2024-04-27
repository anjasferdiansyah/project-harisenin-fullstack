const { cart } = require('../models');

const addToCart = async (req, res) => {
    try {
      const { productId, qty, progress } = req.body;
      const userId = req.user.id;
      const newItem = await cart.create({ userId, productId, qty, progress });
      res.status(201).json({ message: 'Item added to cart', data: newItem });
    } catch (error) {
      res.status(500).json({ message: 'Error adding item to cart', error: error.message });
    }
  }

const getUserCart = async (req, res) => {
    try {
      const userId = req.user.id;
      const cartItems = await cart.findAll({ where: { userId } });
      res.status(200).json({ message: 'Cart items retrieved successfully', data: cartItems });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving cart items', error: error.message });
    }
  }

module.exports = {addToCart, getUserCart}