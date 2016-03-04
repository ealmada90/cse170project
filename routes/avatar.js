// Get all of our friend data
var data = require('../ranks.json');
var user = require('../user.json');

exports.view = function(req, res){
	//console.log("hi");
	var i;
	var index = -1;
	var name = req.query.usr;
	var email = req.query.eml;
	var tm = req.query.tm;
	for(i =0; i < user["users"].length; i++){
		if(name == user["users"][i]['name'] && email == user["users"][i]['email']){
			index = i;
		}
	}
	if(index == -1){
		index = 0;
		console.log("not found");
	}

	data["user"] = user["users"][index]["name"];
	data["avatar"] = user["users"][index]["avatar"];
	data["img"] = user["users"][index]["image"];
	data["pts"] = user["users"][index]["points"];
	data["tm"] = user["users"][index]["team"];
	data["email"] = user["users"][index]["email"];
	data["avatars"] = user["users"][index]["avatars"];
	data["note"] = user["users"][index]["note"];

      
	res.render('avatar',data);
};