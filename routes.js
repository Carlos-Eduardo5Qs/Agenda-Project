const authentication = require('./src/controllers/authentication.js');
const addRegistration = require('./src/controllers/add-registration.js')
const { loginRequired, whileLoggedIn } = require('./src/midlewares/midlewareGlobal.js');

const express = require('express');
const router = express.Router();

router.get('/', loginRequired, authentication.mainPage);
router.get('/login/index', whileLoggedIn, authentication.loginPage);
router.get('/register/index', whileLoggedIn, authentication.registerPage);

router.post('/login/register', authentication.register);
router.post('/login/login', authentication.login);

router.get('/add/index', loginRequired, addRegistration.editForm);
router.get('/login/logout', authentication.logout);

module.exports = router;

