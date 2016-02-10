var data = require("../user.json");

exports.view = function(req, res) {  

    //console.log("hi");
	res.render('list',data)
}