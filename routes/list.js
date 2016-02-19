var data = require("../user.json");

exports.view = function(req, res) {  
	var i;
	var index;
	var data2 = {};
	for(i =0; i < data["users"].length; i++){
		if(data["users"][i]['current']){
			index = i;
		}
	}
	data2["tm"] = data["users"][index]["team"];
	data2["teammates"] = [ ];

	for(i =0; i < data["teammates"].length; i++){
		if(data["teammates"][i]['name'] != data["users"][index]["name"] && data["teammates"][i]['name'] != null){
			data2["teammates"].push(data["teammates"][i]);
		}
	}
    //console.log("hi");
	res.render('list',data2)
}