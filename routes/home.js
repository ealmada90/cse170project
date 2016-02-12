// Get all of our friend data
var data = require('../user.json');

exports.view = function(req, res){
	//console.log(data);
    var name = req.query.name;
	var password = req.query.password;
	var email = req.query.email;
	var age = req.query.age;
	var team = req.query.team;

	if(name !=  null){

		var object =
		{
			'users':[
			{
			"email": email,
			"password": password,
			"name": name	,
			"age": age,
			"team": team,	
			"points": 10,
			"avatar": "https://s-media-cache-ak0.pinimg.com/236x/25/c1/a1/25c1a139856169144c900655b9ebb2f8.jpg"		
			}
			]
		};
		console.log(object);
		res.render('home',object);
   		 //data["users"].push(object);
	}
	else{
		console.log("hi");
		res.render('home',data);
	}
};