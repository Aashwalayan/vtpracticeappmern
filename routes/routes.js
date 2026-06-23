const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

//user route starts

router.post('/user', UserController.createUser)

router.get('/getUser', UserController.getUser)

router.get('/users/:id', UserController.getUserById)

router.put('/users/:id', UserController.updateUser)

router.delete('/users/:id', UserController.deleteUser)

//user route ends

module.exports = router;