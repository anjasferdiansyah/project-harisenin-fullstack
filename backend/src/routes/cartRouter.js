const express = require('express');
const { verify } = require('../middlewares/verifyToken');
const {
  addToCart,
  getUserCart,
  deleteItemCart,
  updateItemCart,
  incrementQty,
  decrementQty
} = require('../controllers/cartController');

const router = express.Router();

router.post('/add', verify, addToCart);
router.get('/', verify, getUserCart);
router.delete('/remove', verify, deleteItemCart);
router.patch('/update/:id', verify, updateItemCart);
router.put('/increment', verify, incrementQty);
router.put('/decrement', verify, decrementQty);


module.exports = router;
