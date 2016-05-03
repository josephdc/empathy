var mongoose = require('mongoose');
var Report = require('./report');
var schema = mongoose.Schema

var userSchema = new mongoose.Schema({
  id: {Type: Number, unique: true}, //twitter id
  username: String,
  displayName: String,
})

var User = mongoose.model("User", userSchema);

module.exports = User;
