var data = require("../data.json");

exports.view = function(req, res) {    
	// Your code goes here
	/*var name = req.query.name;
	var desc = req.query.description;
	var object = { 'name': name,
        'description': desc,
        'imageURL': 'http://lorempixel.com/400/400/people'
      };
     //console.log(object);
    data["friends"].push(object); */
    console.log("hi");
	res.render('rank',data)
 }