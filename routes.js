const clientsPages = require('./src/controllers/clientsPages');
const loginController = require('./src/controllers/loginController');
const registerController = require('./src/controllers/registerController');

const express = require('express');
const router = express.Router();

router.get('/', clientsPages.mainPage);
router.get('/login/index', loginController.index);
router.get('/register/index', registerController.index);

module.exports = router;

