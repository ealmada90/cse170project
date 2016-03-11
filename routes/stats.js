var data = require("../data.json");
var user = require('../user.json');
var ranks= require('../ranks.json');

exports.view = function(req, res) {
	var i;
	var name = req.query.usr;
	var email = req.query.eml;
	var tm = req.query.tm;
	var index = -1;
	for(i =0; i < user["users"].length; i++){
		if(name == user["users"][i]['name'] && email == user["users"][i]['email']){
			data = user["users"][i];
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
	data["note"] = user["users"][index]["note"];
	data["level"] = "";
	data["stat"] = "";
	data["gain"] = 0;

	if(req.query.work == '1'){
		var len;
		var ranks2;
		if(user["users"][index]["team"] == "Heroes"){
			ranks2 = ranks["ranks"];

			len = ranks2.length;
		}
			
		else{
			ranks2 = ranks["ranks2"];
			len = ranks2.length;
		}
			

		var stat = req.query.stat;
		var exercises = [req.query.ex1,req.query.ex2,req.query.ex3,req.query.ex4,req.query.ex5];
	
		var gain = 0;
		for(var k =0; k<exercises.length; k++){
			if(exercises[k] == "on"){
				gain += 5;
			}
		}
		var levelup;
		var points;
		for(i=0; i<data['stats'].length; i++){
			if(data['stats'][i]['id'] == stat){
				points = data['stats'][i]['percent'];
				points +=gain;
				if(points >= 100){
					data['stats'][i]['percent'] = points-100;
					data['stats'][i]['level']++;
					levelup = "true";

				}
				else{
					levelup = "false";
					stat = data['stats'][i]['id'];
					data['stats'][i]['percent'] = points;
				}
			
			}
			
		}

		data["level"] = levelup;
		data["stat"] = stat;
		data["gain"] = gain;

		var character;
		var unlocked = false;
		var j;
		console.log("testing");
		for(i=0; i<len; i++){
			character = ranks2[i]['rank'];
			unlocked = false;
			for(j=0; j<data['avatars'].length; j++){
				if(character ==data['avatars'][j]['name']){
					unlocked = true;
					//console.log("hi");
				}
			}
			if(!unlocked){
				if(ranks2[i]["Arm Strength"] <= data['stats'][0]['level'] && 
					ranks2[i]["Torso Strength"] <= data['stats'][1]['level'] &&
					ranks2[i]["Leg Strength"] <= data['stats'][2]['level'] &&
					ranks2[i]["Cardio"] <= data['stats'][3]['level'] ){

					
					user["users"][index]["points"]+= ranks2[i]["points"];
					user["users"][index]["avatars"].push({'name': character});
					break;
				}
				else{
					break;
				}
				
			}
		} 
	}

	

	
		
	

   // console.log("hi");
	res.render('stats',data)
 }