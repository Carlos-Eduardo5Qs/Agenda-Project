import Login from './modules/validateLogin.js';

import './../css/style.css';
import './../css/login.css';
import './../css/register.css';
import './../css/panel-messages.css';
import './../css/add-registration.css';

const login = new Login('#log-into');
login.init();
