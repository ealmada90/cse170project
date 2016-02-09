// Get all of our friend data
var data = require('../ranks.json');

exports.view = function(req, res){
	//console.log("hi");
	
      
	res.render('avatar',data);
};