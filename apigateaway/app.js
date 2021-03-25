require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const pekerjaanRouter = require('./routes/pekerjaan');
const olahkaryawanRouter = require('./routes/olahkaryawan');
const loginRouter = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pekerjaan', pekerjaanRouter);
app.use('/olahkaryawan', olahkaryawanRouter);
app.use('/login', loginRouter);

module.exports = app;
