require('dotenv').load();
var watson = require('watson-developer-cloud');

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

module.exports = {
  show: show
}

function show(req, res, next) {
  tone_analyzer.tone({ text: 'Greetings from Watson Developer Cloud!'}, function(err, tone) {
    if (err) console.log(err);
    else {
      res.json(tone)
    }
  })
}
