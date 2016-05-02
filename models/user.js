var mongoose = require('mongoose');
var Report = require('./report');

var userSchema = new mongoose.Schema({
  id: Number,
  username: String,
  twitter_handle: String,
  reports: [{type: Schema.Types.ObjectId, ref: "Report"}]
})

var User = mongoose.model("User", userSchema);

module.exports = User;
