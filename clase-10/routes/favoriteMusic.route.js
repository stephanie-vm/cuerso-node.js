const express = require('express');
const router = express.Router();
const favoriteMusicController = require('../controllers/favoriteMusic.controller');

//actualizar datos
router.put('/favorite-music', favoriteMusicController.upsert);


module.exports = router;