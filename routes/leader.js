var data = require("../ranks.json");

exports.view = function(req, res) {    

    //console.log("hi");
	res.render('leaderboard',data)
 }