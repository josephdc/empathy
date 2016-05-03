var mongoose = require('mongoose');
var Report = require('../models/report');
var User = require('../models/user');

module.exports = {
  findYourself:          findYourself,
  findUserById:          findUser,
  findUserByUsername:    findUserByUsername,
  findUserByDisplayname: findUserByDisplayname,
  findReportById:        findReportById
};

function findDocumentHandler(err, doc) {
  if (err) res.send(err)
};

function findYourself(req, res, next) {
  var yours = req.user.id;
  User.findOne({id: yours}, findDocumentHandler);
};

function findUser (req, res, next) {
  // var id = req.query.id;
  // var username = req.query.username;
  // var displayname = req.query.displayname;
  // var attrs = [id, username, displayname]
  //
  // attrs.forEach((attr) => {
  //   if (attr) return
  // })
}

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
  Report.findOne({_id: id}, (err, doc) => {
    if (!err) res.json(doc)
  })
}
