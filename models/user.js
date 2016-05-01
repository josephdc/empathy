var mongoose = require('mongoose');
var Report = require('./report')
var _id = requiere(.'./report._id')
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  twitter_handle: String,
  reports: {$ref: Report,
            $id: _id}
})

var User = mongoose.model("User", userSchema);

module.exports = User;
