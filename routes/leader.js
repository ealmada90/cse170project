var data = require("../ranks.json");
var user = require('../user.json');

exports.view = function(req, res) {  
	var i;
	var index = -1;
	var name = req.query.usr;
	var email = req.query.eml;
	var tm = req.query.tm;

	var hero = 0;
	var vill = 0;
	for(i =0; i < user["users"].length; i++){
		if(name == user["users"][i]['name'] && email == user["users"][i]['email']){
			index = i;
		}
		if(user["users"][i]['team'] =="Heroes"){
			hero +=user["users"][i]['points'];
		}
		else if(user["users"][i]['team'] =="Villains"){
			vill +=user["users"][i]['points'];
		}
	}
	if(index == -1){
		index = 0;
		console.log("not found");
	}

	data["tm"] = user["users"][index]["team"];
	data["email"] = user["users"][index]["email"];
	data["user"] = user["users"][index]["name"];
	if(hero >= vill){
		data["board"] = [{"team":"Heroes", "points": hero},{"team":"Villains", "points": vill}];
	}
	else{
		data["board"] = [{"team":"Villains", "points": vill},{"team":"Heroes", "points": hero}];
	}

	


    //console.log("hi");
	res.render('leaderboard',data)
}