var express = require('express');
var router = express.Router();

var watsonController = require('../controllers/watson');
var tweetsController = require('../controllers/tweets');
var reportController = require('../controllers/report')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// test pages
router.get('/watson', watsonController.index)
router.post('/watson', watsonController.analyze)
// router.get('/tweets', tweetsController.index)
router.get('/tweets', tweetsController.show)

router.get('/db', reportController.show)

module.exports = router;
