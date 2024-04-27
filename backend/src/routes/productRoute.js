const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProcuts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.delete('/:id', productController.deleteProductById);

module.exports = router