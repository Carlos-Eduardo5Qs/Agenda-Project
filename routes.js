const authentication = require('./src/controllers/authentication.js');

const express = require('express');
const router = express.Router();

router.get('/', authentication.mainPage);
router.get('/login/index', authentication.loginPage);
router.get('/register/index', authentication.registerPage);

router.post('/login/register', authentication.register);
router.post('/login/login', authentication.login);

router.get('/login/logout', authentication.logout);

module.exports = router;

