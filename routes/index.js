var express = require('express');
var router = express.Router();

var watsonController = require('../controllers/watson')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/watson', watsonController.index)
router.post('/watson', watsonController.analyze)

module.exports = router;
