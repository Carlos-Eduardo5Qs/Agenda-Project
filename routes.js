const routePost = require('./src/controllers/routePost');
const routeGet = require('./src/controllers/routeGet');

const express = require('express');
const route = express.Router();

route.get('/', routeGet.routeGet);
route.post('/', routePost.contactPost);

module.exports = route;

