var data = require("../data.json");
var user = require('../user.json');

exports.view = function(req, res) {
	var i;
	var name = req.query.usr;
	var email = req.query.eml;
	var tm = req.query.tm;
	for(i =0; i < user["users"].length; i++){
		if(name == user["users"][i]['name'] && email == user["users"][i]['email']){
			data = user["users"][i];
		}
	}

	if(req.query.work == '1'){
		var stat = req.query.stat;
		var points;
		for(i=0; i<data['stats'].length; i++){
			if(data['stats'][i]['id'] == stat){
				points = data['stats'][i]['percent'];
				if(points <= 95){
					points +=5;
					data['stats'][i]['percent'] = points;
				}
			}
			
		}   
	}

	var index = -1;
	for(i =0; i < user["users"].length; i++){
		//console.log(user["users"][i]['name'] + " " + name);
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

   // console.log("hi");
	res.render('stats',data)
 }