// Get all of our friend data
var data = require('../data.json');
var user = require('../user.json');

exports.view = function(req, res){
	//console.log(data);
  	var name = req.query.name;
	var email = req.query.email;
	var age = req.query.age;
	var team = req.query.team;
	var pass = req.query.focus;
	var exists = false;

	var i;
	var index;
	for(i =0; i < user["users"].length; i++){
		if(name == user["users"][i]['name']){
			exists = true;
			index = i;
		}
	}
	if(name != null && exists == false && team != null){
		for(i =0; i < user["users"].length; i++){
			user["users"][i]['current'] = false;
			
		}	
		//console.log("hi");
		var object = {
			"email": email,
			"current": true,
			"password": pass,
			"name": name,
			"age": age,
			"team": team,
			"points": 10,  
        	"avatar": "",
        	"image" : "",
        	"stats": [
				{
					"class": "strength",
					"title": "Arm and Shoulder",
					"level": 1,
					"percent": 0		
				},
				{
					"class": "strength",
					"title": "Torso",
					"level": 1,
					"percent": 0		
				},
				{
					"class": "strength",
					"title": "Leg",
					"level": 1,
					"percent": 0		
				},
				{
					"class": "endurance",
					"title": "Arm and Shoulder",
					"level": 1,
					"percent": 0		
				},
				{
					"class": "endurance",
					"title": "Torso",
					"level": 1,
					"percent": 0		
				},
				{
					"class": "endurance",
					"title": "Leg",
					"level": 1,
					"percent": 0		
				}
			]
			
		};
		if(team == "Heroes"){
			object["avatar"] = "Robin"
			object["image"] = "https://s-media-cache-ak0.pinimg.com/236x/25/c1/a1/25c1a139856169144c900655b9ebb2f8.jpg";
		}
		else if(team == "Villains"){
			object["avatar"] = "ThePenguin"
			object["image"] = "http://www.toptenz.net/wp-content/uploads/2008/07/penguin.jpg";
		}
		
		//data = data["Batman"];
   		 user["users"].push(object);
   		 var data2 = data["Batman"];
		data2["user"] = object["name"];
		data2["avatar"] = object["avatar"];
		data2["img"] = object["image"];
		data2["tm"] = object["team"];
   		 res.render('home',data2);

   		 //console.log("hi");
	}
	/*else if(exists){
		var data2 = data["Robin"];
		for(i =0; i < user["users"].length; i++){
			user["users"][i]['current'] = false;
			
		}	
		user["users"][index]["current"] = true;
		console.log(data2.push(user["users"][0]));
		res.render('home',data2);
		//console.log(data["friends"]);
	}*/
	else{
		var data2 = data["Batman"];
		for(i =0; i < user["users"].length; i++){
			if(user["users"][i]['current']){
				index = i;
			}
		}
		data2["user"] = user["users"][index]["name"];
		data2["avatar"] = user["users"][index]["avatar"];
		data2["img"] = user["users"][index]["image"];
		data2["tm"] = user["users"][index]["team"];
		//console.log(data2["user"]);
		res.render('home',data2);
	}
	//console.log(name != null);
	

	//res.render('home',data);

};