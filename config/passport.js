require('dotenv').load();
var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;
var User = require('../models/user');
var locus = require('locus');

passport.use(new Strategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: process.env.TWITTER_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    var newUser = new User({
      id: profile.id,
      username: profile.username,
      displayname: profile.displayName
    });
    newUser.save(function(err) {
      return cb(null, newUser);
    });
  }
));

passport.serializeUser(function(user,cb) {
  cb(null, user);
})

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
})
