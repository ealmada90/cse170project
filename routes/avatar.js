// Get all of our friend data
var data = require('../ranks.json');
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

	data["user"] = user["users"][index]["name"];
	data["avatar"] = user["users"][index]["avatar"];
	data["img"] = user["users"][index]["image"];

      
	res.render('avatar',data);
};