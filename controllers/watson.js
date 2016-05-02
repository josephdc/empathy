require('dotenv').load();
var watson = require('watson-developer-cloud');
var locus require('locus');
// var bodyParser = require('body-parser')

function textAnalyze(req, res, next) {
  tone_analyzer.tone({ text: 'Greetings from Watson Developer Cloud!'}, function(err, tone) {
    if (err) console.log(err);
    else {
      res.send(JSON.stringify(tone, null, 2))
    }
  })
}

var tone_analyzer = watson.tone_analyzer({
  username: process.env.USERNAME_WATSON,
  password: process.env.PASSWORD_WATSON,
  version:  'v3-beta',
  version_date: '2016-02-11'
});


function index(req, res, next) {
  res.render('watson')
}

function analyze(req, res, next) {
  console.log(req.body)
  tone_analyzer.tone({ text: req.body.text}, function(err, tone) {
    if (err) console.log(err);
    else {
      // eval(locus)
      res.json(tone)
    }
  })
}

module.exports = {
  index: index,
  analyze: analyze
}
