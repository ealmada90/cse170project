var data = require("../user.json");

exports.view = function(req, res) {  
	var i;
	var index;
	for(i =0; i < data["users"].length; i++){
		if(data["users"][i]['current']){
			index = i;
		}
	}
	data["tm"] = data["users"][index]["team"];
    //console.log("hi");
	res.render('list',data)
}