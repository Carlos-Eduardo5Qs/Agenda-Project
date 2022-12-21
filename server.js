const route = require('./routes.js');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join('public')));
app.use(route);

app.set('views', path.join('src', 'views'));
app.set('views engine', 'ejs');

app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log('Server initializing...');
    console.log('Access: http://localhost:3000');
});

