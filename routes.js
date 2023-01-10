const homeController = require('./src/controllers/homeController');
const authentication = require('./src/controllers/authentication.js');
const contactController = require('./src/controllers/contactController.js')
const { loginRequired, whileLoggedIn } = require('./src/midlewares/midlewareGlobal.js');

const express = require('express');
const router = express.Router();

router.get('/', loginRequired, homeController.mainPage);
router.get('/login/index', whileLoggedIn, authentication.loginPage);
router.get('/register/index', whileLoggedIn, authentication.registerPage);

router.post('/login/register', authentication.register);
router.post('/login/login', authentication.login);

router.get('/add/index', loginRequired, contactController.editForm);
router.post('/add/contact',loginRequired, contactController.addContact);
router.get('/add/index/:id', loginRequired, contactController.editIndex);
router.post('/add/edit/:id', loginRequired, contactController.edit);
router.get('/contact/delete/:id', loginRequired, contactController.delete);

router.get('/login/logout', authentication.logout);

module.exports = router;

