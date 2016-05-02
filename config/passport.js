require('dotenv').load();
var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;

passport.use(new Strategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: '/oauthcallback'
  },
  function(token, tokenSecret, profile, cb) {
    console.log(Object.keys(profile))
    return cb(null, profile)
  }
));

passport.serializeUser(function(user,cb) {
  cb(null, user);
})

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
})
