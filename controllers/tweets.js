require('dotenv').load();
var Twitter = require('twitter');
var locus = require('locus');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESSTOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESSTOKEN_SECRET
});

var params = {
  screen_name: 'wersterlobe',
  count: 1
};

function show(req, res, next) {
  client.get('statuses/user_timeline', params, function(err, tweets, resp) {
    if (err) console.log(err)
    else {
      var tweetData = JSON.parse(resp.body)[0]
      res.json(tweetData)
    }
  })
}

module.exports = {
  show: show
}
