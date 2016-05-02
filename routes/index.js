var express = require('express');
var router = express.Router();
var passport = require('passport');

var watsonController = require('../controllers/watson');
var tweetsController = require('../controllers/tweets');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
});

// twitter oauth login
router.get('/login', passport.authenticate('twitter'))

// twitter oauth callback
router.get('/oauthcallback',
  passport.authenticate('twitter', {failureRedirect:'/'}),
  function(req, res) {
    res.redirect('/');
  }
);

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

// test pages
router.get('/watson', watsonController.index)
router.post('/watson', watsonController.analyze)
// router.get('/tweets', tweetsController.index)
router.get('/tweets', tweetsController.show)

module.exports = router;
