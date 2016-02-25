var data = require("../ranks.json");
var user = require('../user.json');

exports.view = function(req, res) {  
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
		
	data["tm"] = user["users"][index]["team"];
	data["email"] = user["users"][index]["email"];
	data["user"] = user["users"][index]["name"];
    //console.log("hi");
	res.render('rank',data)
}