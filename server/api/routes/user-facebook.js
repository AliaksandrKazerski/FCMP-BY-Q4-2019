const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get("/auth/facebook", passport.authenticate("facebook"));

router.get(
  "/auth/facebook/callback", 
  passport.authenticate("facebook", {successRedirect: "/mainpage", failureRedirect: "/auth/facebook"})
);

router.get('/mainpage', (req, res, next) => {
  res.status(200).json({message: 'its main page'});
});

module.exports = router;