const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const createHashRouter = require('./routes/create-hash');
const checkHashRouter = require('./routes/check-hash');
const createPostRouter = require('./routes/create-post');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/create-hash', createHashRouter);
app.use('/check-hash', checkHashRouter);
app.use('/create-post', createPostRouter);

module.exports = app;
