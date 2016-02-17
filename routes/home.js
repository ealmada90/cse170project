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

	if(name != null){
		var object = {
			"name": name,
			"email": email,
			"age": age,
			"team": team,
			"pass": pass
		};

   		 user["users"].push(object);
	}
	

	res.render('home',data);

};