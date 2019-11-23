const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const newsRouts = require('./api/routes/news');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/news', newsRouts);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status = 500);
  res.json({
    error: {
      message: error.message,
    }
  });
});

module.exports = app;
