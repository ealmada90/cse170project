var data = require("../user.json");

exports.view = function(req, res) {  
	var i;
	var index = -1;
	var name = req.query.usr;
	var email = req.query.eml;
	var tm = req.query.tm;
	var day = req.query.day;
	var location = req.query.location;
	var focus = req.query.focus;

	var data2 = {};
	for(i =0; i < data["users"].length; i++){
		if(name == data["users"][i]['name'] && email == data["users"][i]['email']){
			index = i;
		}
	}
	if(index == -1){
		index = 0;
		console.log("not found");
	}
	data2["tm"] = data["users"][index]["team"];
	data2["email"] = data["users"][index]["email"];
	data2["user"] = data["users"][index]["name"];
	data2["teammates"] = [ ];

	for(i =0; i < data["teammates"].length; i++){
		if(data["teammates"][i]['name'] != data["users"][index]["name"] && data["teammates"][i]['name'] != null){
			if( (day== "All" || day == data["teammates"][i]['day'])
			 && (location == "All" || location ==  data["teammates"][i]['location']) 
			 && (focus == "All" || focus ==  data["teammates"][i]['focus'])
			 && data2["tm"] == data["teammates"][i]['team'] ) {
				data["teammates"][i]["tm"] = data["users"][index]["team"];
				data["teammates"][i]["email"] = data["users"][index]["email"];
				data["teammates"][i]["user"] = data["users"][index]["name"];
				data2["teammates"].push(data["teammates"][i]);
			}
			
			
		}
	}
    //console.log("hi");
	res.render('list',data2)
}