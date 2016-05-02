// grab tweets then put them through watson

require('dotenv').load();
var Twitter = require('twitter');
var watson = require('watson-developer-cloud');
var locus = require('locus');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESSTOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESSTOKEN_SECRET
});

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
