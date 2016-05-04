var mongoose = require('mongoose');


var toneSchema = new mongoose.Schema({
  score: Number,
  tone_id: String,
  tone_name: String
})
var toneCategoriesSchema = new mongoose.Schema({
  tones: [toneSchema],
  category_id: String,
  category_name: String
})

var reportSchema = new mongoose.Schema({
  user_id: Number,
  tweetId: Number,
  text: String,
  tone_categories: [toneCategoriesSchema],
  report_name: {type: String, unique: true},
  tweet_created_at: Date,
  created_at: Date,
  updated_at: Date
})

var Report = mongoose.model("Report", reportSchema);

module.exports = Report;
