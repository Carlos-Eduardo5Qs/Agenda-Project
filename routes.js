const clientsPages = require('./src/controllers/clientsPages.js');
const loginController = require('./src/controllers/loginController.js');
const registerController = require('./src/controllers/registerController.js'); 

const express = require('express');
const router = express.Router();

router.get('/', clientsPages.mainPage);
router.get('/login/index', loginController.index);
router.get('/register/index', registerController.index);

router.post('/login/register', loginController.register);

module.exports = router;

