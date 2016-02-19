var data = require("../data.json");
var user = require('../user.json');

exports.view = function(req, res) {

	for(i =0; i < user["users"].length; i++){
		if(true == user["users"][i]['current']){
			data = user["users"][i];
		}
	}

	if(req.query.work == '1'){
		var stat = req.query.stat;
		var i;
		var points;
		for(i=0; i<data['stats'].length; i++){
			if(data['stats'][i]['id'] == stat){
				points = data['stats'][i]['percent'];
				if(points <= 95){
					points +=5;
					data['stats'][i]['percent'] = points;
				}
			}
			
		}   
	}
	

   // console.log("hi");
	res.render('stats',data)
 }