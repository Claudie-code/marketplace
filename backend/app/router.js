const { Router } = require('express');
const router = Router();

// CONTROLLER

const productController = require('./controller/productController');

// PRODUITS
router.get('/products', productController.findAll);

module.exports = router;