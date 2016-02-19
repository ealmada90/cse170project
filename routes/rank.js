var data = require("../ranks.json");
var user = require('../user.json');

exports.view = function(req, res) {  
	var i;
	var index;
	for(i =0; i < user["users"].length; i++){
		if(user["users"][i]['current']){
			index = i;
		}
	}
	data["tm"] = user["users"][index]["team"];
    //console.log("hi");
	res.render('rank',data)
}