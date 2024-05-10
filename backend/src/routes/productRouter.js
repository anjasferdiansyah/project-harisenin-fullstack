const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.delete('/:id', productController.deleteProductById);
router.patch('/:id', productController.updateProduct);
router.get('/category/:id', productController.getProductsByCatId);

module.exports = router;
