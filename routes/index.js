var express = require('express');
var router = express.Router();
var passport = require('passport');

var watsonController = require('../controllers/watson');
var tweetsController = require('../controllers/tweets');
var reportController = require('../controllers/report');
var apiController    = require('../controllers/api');
var locus = require('locus');

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
    res.redirect('/watson/setup');
  }
);

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

// profile page
router.get('/profile', function(req, res) {
  res.render('report')
})

// query page
router.get('/watson/setup', function(req, res) {
  res.render('query')
})
router.get('/watson/setup/ajax', reportController.reportIndex)

// third party api calls
router.get('/watson', watsonController.analyze)
router.post('/watson/analyze', watsonController.analyze)
router.get('/watson/test', watsonController.test)
router.get('/watson/ten', watsonController.testTen)
router.get('/watson/show/:id', watsonController.showReport)
router.get('/tweets', tweetsController.show)

// database retrieval test
router.get('/db', reportController.show)

// homegrown api calls
router.get('/api/you', apiController.findYourself)
router.get('/api/users/id/:id', apiController.findUserById)
router.get('/api/users/username/:username', apiController.findUserByUsername)
router.get('/api/users/displayname/:displayname', apiController.findUserByDisplayname)
router.get('/api/reports/latest', apiController.findLatestReport)
router.get('/api/reports/:id', apiController.findReportById)

module.exports = router;
