var mongoose = require('mongoose')
var Report = require("../models/report")

function create (req, res, next) {
  //save jsons from watson
}


function show (req, res, next){
  Report.find({}, (err, data) => {
    res.json(data)
    console.log("find: ", data)
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
  show: show,
  reportIndex: reportIndex,
  showCalendar: showCalendar
}
