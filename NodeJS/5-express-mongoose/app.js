const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');

// Lê as variáveis de ambiente do arquivo .env
require('dotenv').config(); 

const { MONGO_URL } = process.env;

mongoose
    .connect(MONGO_URL, {
        minPoolSize: 10,
        socketTimeoutMS: 60000
    })
    .then(() => console.log('Conectado ao MongoDB: ' + MONGO_URL))
    .catch((err) => {
        console.log('Falha ao conectar com o MongoDB');
        console.error(err);
    });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', require('./routes/auth'));
app.use('/users', usersRouter);

module.exports = app;
