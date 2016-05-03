var mongoose = require('mongoose');
var Report = require('../models/report');
var User = require('../models/user');

module.exports = {
  findYourself: findYourself
}

function findYourself(req, res, next) {
  var yours = req.user.id;
  User.findOne({id: yours}, (err, you) => {
    if (!err) res.json(you)
  })
}
