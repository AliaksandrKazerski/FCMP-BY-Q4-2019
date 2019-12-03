const express = require('express');
const session = require('express-session');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const newsRouts = require('./api/routes/news');
// const userRouts = require('./api/routes/user-local'); // for passport-local
const userRouts = require('./api/routes/user-facebook');

// require('./api/config/passport-local-config')(passport); // for passport-local
require('./api/config/passport-facebook-config')(passport);

mongoose.connect(
  'mongodb://localhost:27017/frontcamp', 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
  }
);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/news', newsRouts);
app.use(userRouts);

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
