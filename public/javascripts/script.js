
$.ajax('/watson/setup/ajax').done(function (reports){
  console.log(reports)
  reports.forEach(reportHandler)
})

// var reportHandler = function (report) {
//   $('#reports').append("<li class='report'>"+ report.report_name + "</li>")
// }

var reportHandler = function (report) {
  $('#reports').append(`
    <li class='report list-group-item'><a href='/watson/show/${report._id}'> ${report.report_name} </a></li>
    `)
}
