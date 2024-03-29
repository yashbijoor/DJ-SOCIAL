const express = require('express');
const homeController = require('../Controller/homeController');
const userController = require('../Controller/userController');
const verifyController = require('../Controller/verifyController');
const router = express.Router();
router.get('/',homeController().home);
router.get('/signup',userController().signup);
router.post('/signup',userController().register);
router.get('/verify',verifyController().verify);
module.exports = router;