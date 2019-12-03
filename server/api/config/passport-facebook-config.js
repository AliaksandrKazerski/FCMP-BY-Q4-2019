const FacebookStrategy = require('passport-facebook').Strategy;

const User = require('../model/user');

const FACEBOOK_CLIENT_ID = '785751561872359';
const FACEBOOK_CLIENT_SECRET = 'da39cc12afa1a448dd1641040e6f5984';
const FACEBOOK_CALLBACK_URL = 'http://localhost:3000/auth/facebook/callback';

module.exports = function(passport) {
  passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK_CLIENT_ID,
        clientSecret: FACEBOOK_CLIENT_SECRET,
        callbackURL: FACEBOOK_CALLBACK_URL,
        profileFields: ["email", "name"]
      },
      function(accessToken, refreshToken, profile, done) {
        const { email, first_name, last_name } = profile._json;
        const userData = {
          email,
          firstName: first_name,
          lastName: last_name
        };
        new User(userData).save();
        done(null, profile);
      }
    )
  );
  
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

}
