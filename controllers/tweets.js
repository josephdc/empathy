require('dotenv').load();
var Twitter = require('twitter');
var locus = require('locus');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESSTOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESSTOKEN_SECRET
});

// var params = {
//   screen_name: req.user.username,
//   count: 1
// };

var arr = [
  {created_at: 'Tue May 03 15:59:24 +0000 2016'},
  {created_at: 'Wed Apr 27 23:01:45 +0000 2016'},
  {created_at: 'Mon Mar 21 07:10:36 +0000 2016'},
  {created_at: 'Fri Mar 11 16:15:49 +0000 2016'},
  {created_at: 'Tue Mar 08 20:49:18 +0000 2016'},
  {created_at: 'Sat Feb 20 19:57:05 +0000 2016'},
  {created_at: 'Thu Feb 11 19:20:04 +0000 2016'},
  {created_at: 'Tue Jan 26 05:13:55 +0000 2016'},
  {created_at: 'Tue Jan 12 17:00:26 +0000 2016'},
  {created_at: 'Wed Dec 09 06:43:57 +0000 2015'}
]

function dateRange(tweet) {
  var since = new Date('2016-02-01')
  var until = new Date('2016-03-01')
  var createdAt = new Date(tweet.created_at)
  return ( createdAt > since && createdAt < until)
}

function show(req, res, next) {
  client.get('statuses/user_timeline', {screen_name: req.user.username, count: 10}, function(err, tweets, resp) {
    if (err) { console.log(err); res.json(err) }
    else {
      var allTweets = JSON.parse(resp.body)
      var wantedTweets = allTweets.filter(dateRange)
      console.log(wantedTweets)
      wantedTweets.forEach((tweet) => {
        console.log(tweet.created_at)
      })
      res.json(wantedTweets)
    }
  })
}

module.exports = {
  show: show
}
