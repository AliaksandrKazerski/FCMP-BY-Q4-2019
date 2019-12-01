const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../model/user');



router.post('/register', (req, res, next) => {
  const {name, email, password} = req.body;
  User
    .findOne({email: email})
    .exec()
    .then(result => {
      if (result) {
        return res.status(404).json({message: 'Email is already registred'})
      } else {
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          name, 
          email,
          password
        });
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) throw err;
            user.password = hash;
            user
              .save()
              .then(user => {
                res.redirect('/login');
              })
              .catch(err => console.log(err));
          })
        )
      }
    })
    .catch(err => console.log(err));
});

router.get('/login', (req, res, next) => {
  res.status(200).json({message: 'its login page'});
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/mainpage',
    failureRedirect: '/login',
  })(req, res, next);
});

router.get('/logout', (req, res, next) => {
  req.logout();
  req.redirect('/login');
});

router.get('/mainpage', (req, res, next) => {
  res.status(200).json({message: 'its main page'});
});

module.exports = router;
