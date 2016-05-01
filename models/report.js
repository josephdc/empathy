var mongoose = require('mongoose');

var toneCategoriesSchema = new mongoose.Schema({
  tones: [{
          score: Number,
          tone_id: String,
          tone_name: String
          }],
  category_id: String,
  category_name: String
})

var reportSchema = new mongoose.Schema({
  tone_categories: [toneCategoriesSchema],
})

var Report = mongoose.model("Report", reportSchema);

module.exports = Report;
