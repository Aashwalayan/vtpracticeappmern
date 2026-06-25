const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const User = require('../models/user');
const productController = require('../controller/productController');
const product = require('../models/product')

//user route starts

router.post('/users', UserController.createUser)

router.get('/getUser', UserController.getUser)

router.get('/users/:id', UserController.getUserById)

router.put('/users/:id', UserController.updateUser)

router.delete('/users/:id', UserController.deleteUser)

router.post('/login', UserController.loginUser)

router.post('/addProducts', productController.addProducts)

router.get('/getProducts', productController.getProducts)

router.get('/getProducts/:id', productController.getProuctById)

//user route ends

module.exports = router;