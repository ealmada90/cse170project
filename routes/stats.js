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

	if(req.query.work == '1'){
		var len;
		if(user["users"][index]["team"] == "Heroes"){
			ranks = ranks["ranks"];
			console.log("ranks");
			len = ranks.length;
		}
			
		else{
			ranks = ranks["ranks2"];
			len = ranks.length;
		}
			

		var stat = req.query.stat;
		var points;
		for(i=0; i<data['stats'].length; i++){
			if(data['stats'][i]['id'] == stat){
				points = data['stats'][i]['percent'];
				points +=5;
				if(points >= 100){
					data['stats'][i]['percent'] = points-100;
					data['stats'][i]['level']++;
				}
				else{
					
					data['stats'][i]['percent'] = points;
				}
			
			}
			
		}
		var character;
		var unlocked = false;
		var j;
		for(i=0; i<len; i++){
			character = ranks[i]['rank'];
			unlocked = false;
			for(j=0; j<data['avatars'].length; j++){
				if(character ==data['avatars'][j]['name']){
					unlocked = true;
					//console.log("hi");
				}
			}
			if(!unlocked){
				if(ranks[i]["Arm Strength"] <= data['stats'][0]['level'] && 
					ranks[i]["Torso Strength"] <= data['stats'][1]['level'] &&
					ranks[i]["Leg Strength"] <= data['stats'][2]['level'] &&
					ranks[i]["Arm Endurance"] <= data['stats'][3]['level'] &&
					ranks[i]["Torso Endurance"] <= data['stats'][4]['level'] &&
					ranks[i]["Leg Endurance"] <= data['stats'][5]['level'] ){

					data['avatars'].push({'name': character});
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