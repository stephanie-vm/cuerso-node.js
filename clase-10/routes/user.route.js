const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')
router.post('/user');

router.post('/user', userController.create);
router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getUser);
router.put('/user/:id', userController.updateUser);
module.exports = router;


