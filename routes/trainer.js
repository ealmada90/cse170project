var data = require("../user.json");

exports.view = function(req, res) { 
	var i;
	var index = -1;
	var user;
	var data2 = {};
	var name = req.query.usr;
	var eml = req.query.eml;
	var tm = req.query.tm;
	for(i =0; i < data["users"].length; i++){
		if(data["users"][i]['name'] == name && eml == data["users"][i]['email']){
			index = i;
			//console.log("found");
		}
	}
	if(index == -1){
		index = 0;
		console.log("not found");
	}
	user = data["users"][index];
	data2["user"] = user["name"];
	data2["avatar"] = user["avatar"];
	data2["img"] = user["image"];
	data2["appointments"] = [ ];
	data2["tm"] = user["team"];
	data2["email"] = user["email"];

	
	//console.log(user["team"]);
	if(req.query.remove == "yes"){
		//console.log("here2");
		var day = req.query.day;
		var loc = req.query.location;
		var email = req.query.email;
		var mine = false;

		for(i =0; i < data["appointments"].length; i++){
			if(email == data["appointments"][i]['email'] && day == data["appointments"][i]['day']){
				mine = data["appointments"][i]["mine"];
				data["appointments"][i] = {"id": data["appointments"][i]["id"]};
				
				//console.log(mine);
			}
		}
		if(mine){
			for(i =0; i < data["teammates"].length; i++){
			if(email == data["teammates"][i]['email'] && day == data["teammates"][i]['day']){
				data["teammates"][i] = {"id": data["teammates"][i]["id"]};
				//console.log("here");
			}
		}
		}
		
	}
	if(req.query.request == "yes"){
		var day = req.query.day;
		var loc = req.query.location;
		var time = req.query.time;
		var exists = false;
		
		for(i =0; i < data["appointments"].length; i++){
			if(user["name"] == data["appointments"][i]['trainer']){
				exists = true;
				index = i;
			}
		}
		if(exists == false){
			var object = {
				"trainee": "",
				"trainer": user["name"],
				"email": user["email"],
				"focus": "Arm Strength",
				"day": day,
				"time": time,
				"location": loc,
				"id": data["teammates"][data["teammates"].length-1]['id'] +1,
				"mine": true
			};

			var object2 = {
				"name": user["name"],
				"email": user["email"],
				"focus": "Arm Strength",
				"day": day,
				"time": time,
				"location": loc,
				"id": data["teammates"][data["teammates"].length-1]['id'] +1,
			};
			data["appointments"].push(object);
			data["teammates"].push(object2);
		}

		

	}  
	else{
		var name = req.query.name;
		var email = req.query.email;
		var focus = req.query.focus;
		var day = req.query.day;
		var time = req.query.time;
		var loc = req.query.location;
		var id = req.query.id;
		var exists = false;

		
		for(i =0; i < data["appointments"].length; i++){
			if(name == data["appointments"][i]['trainer']){
				exists = true;
				index = i;
			}
		}

		if(name !=  null && exists == false){

			var object = {
				"trainee": data2["user"],
				"trainer": name,
				"email": email,
				"focus": focus,
				"day": day,
				"time": time,
				"location": loc,
				"id": id,
				"mine": false
			};
	   		data["appointments"].push(object);
	   		
	   		 
		}
		else if(exists && name != null){
			//console.log("here");
			data["appointments"][index]['trainee'] = data2["user"];
		}
	}
	for(i =0; i < data["appointments"].length; i++){

		if(data["appointments"][i]['trainer'] == data2["user"] || data["appointments"][i]['trainee'] == data2["user"]){
			//console.log("here2");
			data["appointments"][i]["mine"] = data["appointments"][i]['trainer'] ==  data2["user"];
			data2["appointments"].push(data["appointments"][i]);
		}
	}

	/*index = -1;
	for(i =0; i < data["users"].length; i++){
		if(data["users"][i]['name'] == name && eml == data["users"][i]['email']){
			index = i;
		}
	}*/
	
	
	//data2["user"] = data["users"][index]["name"];
   // console.log("hi");
	res.render('trainer',data2)
}