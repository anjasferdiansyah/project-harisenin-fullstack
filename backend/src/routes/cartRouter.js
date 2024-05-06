const express = require('express');
const { verify } = require('../middlewares/verifyToken');
const {
  addToCart,
  getUserCart,
  deleteItemCart,
  updateItemCart,
} = require('../controllers/cartController');

const router = express.Router();

router.post('/add', verify, addToCart);
router.get('/', verify, getUserCart);
router.delete('/:id', verify, deleteItemCart);
router.patch('/update/:id', verify, updateItemCart);

module.exports = router;
