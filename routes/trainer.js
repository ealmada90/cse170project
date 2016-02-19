var data = require("../user.json");

exports.view = function(req, res) { 
	var i;
	var user;
	for(i =0; i < data["users"].length; i++){
		if(data["users"][i]['current']){
			user = data["users"][i];
		}
	}
	data["user"] = user["users"][index]["name"];
	data["avatar"] = user["users"][index]["avatar"];
	data["img"] = user["users"][index]["image"];
	//console.log(user["team"]);
	if(req.query.request == "yes"){
		var day = req.query.day;
		var loc = req.query.location;
		var exists = false;

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

		var i;
		for(i =0; i < data["appointments"].length; i++){
			if(id == data["appointments"][i]['id']){
				exists = true;
			}
		}

		if(name !=  null && exists == false){

			var object = {
				"trainee": "",
				"trainer": name,
				"email": email,
				"focus": focus,
				"day": day,
				"time": time,
				"location": loc,
				"id": id
			};
	   		 data["appointments"].push(object);
	   		 
		}
	}
	
   // console.log("hi");
	res.render('trainer',data)
}