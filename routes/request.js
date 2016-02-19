// Get all of our friend data
var data = require('../data.json');
var user = require('../user.json');

exports.view = function(req, res){
	//console.log("hi");
      var i;
	var index;
	for(i =0; i < user["users"].length; i++){
		if(user["users"][i]['current']){
			index = i;
		}
	}
	data["tm"] = user["users"][index]["team"];
	res.render('request',data);
};