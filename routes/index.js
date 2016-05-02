var express = require('express');
var router = express.Router();

var watsonController = require('../controllers/watson');
var tweetsController = require('../controllers/tweets')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/watson', watsonController.index)
router.post('/watson', watsonController.analyze)
// router.get('/tweets', tweetsController.index)
router.get('/tweets', tweetsController.show)

module.exports = router;
