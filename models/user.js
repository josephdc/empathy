var mongoose = require('mongoose');
var Report = require('./report');
var schema = mongoose.Schema

var userSchema = new mongoose.Schema({
  id: {type: Number, unique: true}, //twitter id
  username: String,
  displayname: String,
  // reports: [{type: schema.Types.ObjectId, ref: "Report"}]
})

var User = mongoose.model("User", userSchema);

module.exports = User;
