const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const User = require('../models/user');

//user route starts

router.post('/users', UserController.createUser)

router.get('/getUser', UserController.getUser)

router.get('/users/:id', UserController.getUserById)

router.put('/users/:id', UserController.updateUser)

router.delete('/users/:id', UserController.deleteUser)

router.post('/login', UserController.loginUser)

//user route ends

module.exports = router;