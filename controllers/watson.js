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
  // get tweet
  client.get('statuses/user_timeline', {screen_name: req.user.username, count: 1}, function(err, tweets, resp) {
    if (err) console.log(err)
    else {
      // plug tweet into watson
      var tweetData = JSON.parse(resp.body)[0]
      tone_analyzer.tone({ text: tweetData.text}, function(err, tone) {
        if (err) console.log(err);
        else {
          // get desired data from returned json
          var result = tone.document_tone.tone_categories[0].tones
          res.render('watson', {
            text: tweetData.text,
            result: result
          })
        }
      })
    }
  })
}


// watson testing
var text = "hey guys hows it goin kripparrian here"

function test(req, res, next) {
  tone_analyzer.tone({text: text}, function(err, tone) {
    if (err) console.log(err);
    else res.json(tone)
  })
}

module.exports = {
  index: index,
  analyze: analyze,
  test: test
}
