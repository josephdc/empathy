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


module.exports = {
  show: show
}
