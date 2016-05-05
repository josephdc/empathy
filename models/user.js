var mongoose = require('mongoose');
var Report = require('./report');
var schema = mongoose.Schema

var userSchema = new mongoose.Schema({
  id: {type: Number, unique: true}, //twitter id
  username: String,
  displayname: String,
  created_at: Date,
  updated_at: Date
})

var User = mongoose.model("User", userSchema);

module.exports = User;
