var mongoose = require('mongoose')
var Report = require("../models/report")

function showReport(req, res, next) {
  Report.findById(req.params.id, function (err, report) {
    res.render('watson', {
      text: report.text
    })
  })
}

var reportIndex = function (req, res) {
  Report.find({user_id: req.user.id}, function (err, reports){
    if (err) {
      res.send(err)
    }
    console.log ("show the reports")
    res.json(reports)
  })
}

function showCalendar(req, res, next) {
  res.render('query')
}

module.exports = {
  showReport: showReport,
  reportIndex: reportIndex,
  showCalendar: showCalendar
}
