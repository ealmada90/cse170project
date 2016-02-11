var users = require('../user.json');

exports.projectInfo = function(req, res) { 
	//var projectID = req.params.email;
	/*if (projectID == "random") {
		projectID = Math.floor(Math.random() * projects.length) + 1;
	} else {
		projectID = parseInt(projectID);
	}*/

  	var user = users["users"][0]; // of by one, our first project has index 0
  	res.json(user);
}