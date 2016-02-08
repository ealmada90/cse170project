var data = require("../data.json");

exports.view = function(req, res) {    

   // console.log("hi");
	res.render('trainer',data)
 }