const express = require('express');
const { verify } = require('../middlewares/verifyToken');
const { addToCart, getUserCart } = require('../controllers/cartController');

const router = express.Router();

router.post('/add', verify, addToCart);
router.get('/', verify, getUserCart);

module.exports = router;
