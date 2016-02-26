// Get all of our friend data
var data = require('../data.json');
var user = require('../user.json');
exports.view = function(req, res){

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
		console.log("not foundsdc");
	}
	data2 = data[user["users"][index]["avatar"]];
	data2["user"] = user["users"][index]["name"];
	data2["avatar"] = user["users"][index]["avatar"];
	data2["img"] = user["users"][index]["image"];
	data2["tm"] = user["users"][index]["team"];
	data2["email"] = user["users"][index]["email"];
    //console.log("hi");
	res.render('hometest',data2)
}

exports.login = function(req, res){
	//console.log(data);
  	var name = req.body.name;
	var email = req.body.email;
	var age = req.body.age;
	var team = req.body.team;
	var pass = req.body.focus;
	var exists = false;
	var log = req.body.logtype;

	var i;
	var index;
	//check if inputted user exists
	for(i =0; i < user["users"].length; i++){
		if(email == user["users"][i]['email']){
			exists = true;
			index = i;
		}
	}

	//appropriate user creation conditions
	if(exists == false && log == "create"){	
		//console.log("hi");
		var object = {
			"email": email,
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
					"id": "as",
					"level": 1,
					"percent": 0		
				},
				{
					"class": "strength",
					"title": "Torso",
					"id": "ts",
					"level": 1,
					"percent": 0		
				},
				{
					"class": "strength",
					"title": "Leg",
					"id": "ls",
					"level": 1,
					"percent": 0		
				},
				{
					"class": "strength",
					"title": "Cardio",
					"id": "c",
					"level": 1,
					"percent": 0		
				}
			]
			
		};
		if(team == "Heroes"){
			object["avatar"] = "Robin";
			object["avatars"] = [{"name": "Robin"}];
			object["image"] = "https://s-media-cache-ak0.pinimg.com/236x/25/c1/a1/25c1a139856169144c900655b9ebb2f8.jpg";
		}
		else if(team == "Villains"){
			object["avatar"] = "ThePenguin";
			object["avatars"] = [{"name": "ThePenguin"}];
			object["image"] = "http://www.toptenz.net/wp-content/uploads/2008/07/penguin.jpg";
		}
		
		//data = data["Batman"];
   		 user["users"].push(object);
   		 //console.log(data[object["avatar"]]);
   		 var data2 = data[object["avatar"]];
		data2["user"] = object["name"];
		data2["avatar"] = object["avatar"];
		data2["img"] = object["image"];
		data2["tm"] = object["team"];
		data2["email"] = object["email"];
		//console.log(data2);
   		 res.render('hometest',data2);

   		 //console.log("hi");
	}
	else if(exists && log == "create"){

		//console.log(data2.push(user["users"][0]));
		res.render('create',{"exists":true});
		//console.log(data["friends"]);
	}
	else if(exists && log == "login"){
		
		/*for(i =0; i < user["users"].length; i++){
			if(user["users"][i]['current']){
				index = i;
			}
		}*/
		console.log("else");
		//index = 0;
		
		/*if( data[user["users"][index]["avatar"]] == null){
			var data2 = data["Batman"];
			//console.log(data[user["users"][index]["avatar"]]);
		}*/
		//else{
			var data2 = data[user["users"][index]["avatar"]];
		//}
		
		data2["user"] = user["users"][index]["name"];
		data2["avatar"] = user["users"][index]["avatar"];
		data2["img"] = user["users"][index]["image"];
		data2["tm"] = user["users"][index]["team"];
		data2["email"] = user["users"][index]["email"];
		//console.log(data2["user"]);
		res.render('hometest',data2);
	}
	else if(!exists && log == "login"){
		console.log("else if");
		res.render('index',{"exists":true});
	}
	//console.log(name != null);
	

	//res.render('home',data);

};