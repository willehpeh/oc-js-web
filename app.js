const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const createHashRouter = require('./routes/create-hash');
const checkHashRouter = require('./routes/check-hash');
const createPostRouter = require('./routes/create-post');
const createPostWithUidRouter = require('./routes/create-post-with-uid');
const generateLoremRouter = require('./routes/generate-lorem');
const generateUidRouter = require('./routes/generate-uid');
const generateTitleRouter = require('./routes/generate-title');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, PATCH, GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', true);
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
app.use('/create-post-with-uid', createPostWithUidRouter);
app.use('/generate-lorem', generateLoremRouter);
app.use('/generate-uid', generateUidRouter);
app.use('/generate-title', generateTitleRouter);

module.exports = app;
