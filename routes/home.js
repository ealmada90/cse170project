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
	for(i =0; i < user["users"].length; i++){
		if(name == user["users"][i]['name']){
			exists = true;
		}
	}
	if(name != null && exists == false){
		for(i =0; i < user["users"].length; i++){
			user["users"][i]['current'] = false;
			
		}	
		var object = {
			"email": email,
			"current": true,
			"password": pass,
			"name": name,
			"age": age,
			"team": team,
			"points": 10,  
        	"avatar": "Robin",
        	"image" : "https://s-media-cache-ak0.pinimg.com/236x/25/c1/a1/25c1a139856169144c900655b9ebb2f8.jpg",
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
		//data = data["Batman"];
   		 user["users"].push(object);
   		 res.render('home',data["Batman"]);
   		 //console.log("hi");
	}
	else{
		var data2 = data["Robin"];
		//data2["Robin"].push(user["users"][0]);
		res.render('home',data2);
		//console.log(data["friends"]);
	}
	//console.log(name != null);
	

	//res.render('home',data);

};