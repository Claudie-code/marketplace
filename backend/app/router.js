const { Router } = require('express');
const router = Router();

const productController = require('./controller/productController');
const brandController = require('./controller/brandController');
const modelController = require('./controller/modelController');
const stripeController = require('./controller/stripeController');
const userController = require('./controller/userController');
const orderController = require('./controller/orderController');

router.get('/products', productController.findAll);
router.post('/products/adds', productController.create);

router.get('/models', modelController.findAll);

router.get('/brands', brandController.findAll);

router.post('/create-checkout-session', stripeController.payment);

router.post('/user', userController.findOne);
router.post('/user/add', userController.create);
router.post('/user/update', userController.update);

router.post('/orders/add', orderController.create);

module.exports = router;