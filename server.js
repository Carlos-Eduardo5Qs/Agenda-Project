require('dotenv').config();

const route = require('./routes.js');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname,'src', 'views'));
app.set('views engine', 'ejs');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECTION)
    .then(() => {
        console.log('Database conected!');
        app.emit('okay');
    })
    .catch(err => console.log(err));

const sessionOptions = session({
    secret: 'I am first session',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    },
});

app.use(sessionOptions);
app.use(flash());
app.use(route);

app.on('okay', () => {
    app.listen(PORT, (err) => {
        if(err) console.log(err);
        console.log('Server initializing...');
        console.log('Access: http://localhost:3000');
    });
});

