var mongoose = require('mongoose');
var Report = require('../models/report');
var User = require('../models/user');

module.exports = {
  findUserById:          findUserById,
  findUserByUsername:    findUserByUsername,
  findUserByDisplayname: findUserByDisplayname,
  findReportById:        findReportById
};

function findUserById (req, res, next) {
  var id = req.params.id;
  User.findOne({id: id}, (err, doc) => {
    if (!err) res.json(doc)
  });
}

function findUserByUsername (req, res, next) {
  var username = req.params.username;
  User.findOne({username: username}, (err, doc) => {
    if (!err) res.json(doc)
  });
}

function findUserByDisplayname (req, res, next) {
  var displayname = req.params.displayname;
  User.findOne({displayname: displayname}, (err, doc) => {
    if (!err) res.json(doc)
  });
}

function findReportById(req, res, next) {
  var id = req.params.id;
  console.log(id)
  Report.findOne({_id: id}, (err, doc) => {
    if (!err) res.json(doc)
  })
}
<<<<<<< HEAD

// last report of logged in user
function findLatestReport(req, res, next) {
  var id = req.user.id;
  Report.find({user_id: id}).sort({created_at: -1}).limit(1).exec((err, doc) => {
    if (err) res.send(err)
    else res.json(doc)
  })
}
=======
>>>>>>> ae08d3655c0ae048d0ad301945ebd4e910aaeebe
