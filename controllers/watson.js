// grab tweets then put them through watson

require('dotenv').load();
var Twitter = require('twitter');
var watson = require('watson-developer-cloud');
var locus = require('locus');
var Report = require('../models/report');
var User = require('../models/user');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESSTOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESSTOKEN_SECRET
});

var tone_analyzer = watson.tone_analyzer({
  username: process.env.USERNAME_WATSON,
  password: process.env.PASSWORD_WATSON,
  version:  'v3-beta',
  version_date: '2016-02-11'
});

function analyze(req, res, next) {
  // twitter part
  console.log(req.body.daterange)
  var query = req.body.daterange.split(" - ")
  client.get('statuses/user_timeline', {screen_name: req.user.username}, function(err, tweets, resp) {
    if (err) console.log(err)
    else {
      ///// watson part /////

      var tweetData = JSON.parse(resp.body)
      // filter function by date range
      var wantedData = tweetData.filter((tweet) => {
        var createdAt = new Date(tweet.created_at)
        var since = new Date(query[0])
        var until = new Date(query[1])
        return (createdAt > since && createdAt < until)
      })
      // concatentate tweets into one string
      textString = ''
      wantedData.forEach((tweet) => {
        textString += `${tweet.text}. `
      })

      tone_analyzer.tone({ text: textString }, function(err, tone) {
        if (err) {
          res.render('query', {error: err})
        }
        else {
          // get desired data from returned json
          var result = tone.document_tone.tone_categories
          // save result to data base
          var newReport = new Report({
            user_id: req.user.id,
            report_name: `${query[0]} to ${query[1]}`,
            text: textString,
            created_at: Date.now(),
            tone_categories: result
          });
          newReport.save(function(err) {
            if (err) return (console.log(err))
          })
          res.redirect(`/watson/show/${newReport._id}`)
        }
      })
    }
  })
}

module.exports = {
  analyze: analyze
}
