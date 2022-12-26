
const clientsPages = require('./src/controllers/clientsPages.js');

const express = require('express');
const route = express.Router();

route.get('/', clientsPages.mainPage);

module.exports = route;

