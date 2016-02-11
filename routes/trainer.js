var data = require("../user.json");

exports.view = function(req, res) {   
	var name = req.query.name;
	var focus = req.query.focus;
	var day = req.query.day;
	var time = req.query.time;
	var loc = req.query.location;
	var id = req.query.id;

	if(name !=  null){

		var object = {
			"trainee": "",
			"trainer": name,
			"focus": focus,
			"day": day,
			"time": time,
			"location": loc,
			"id": id
		};
   		 data["appointments"].push(object);
	}
	
   // console.log("hi");
	res.render('trainer',data)
}