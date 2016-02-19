var ranks = require('../ranks.json');
var users = require('../user.json');


exports.projectInfo = function(req, res) { 
	//var projectID = req.params.email;
	/*if (projectID == "random") {
		projectID = Math.floor(Math.random() * projects.length) + 1;
	} else {
		projectID = parseInt(projectID);
	}*/

  	//var chars["Heroes"] = ranks["Heroes"];
   // chars["Villains"] = ranks["Villains"];
  	res.json(ranks);
}

exports.changeInfo = function(req, res) {

  var name = req.body.name;
  var img = req.body.img;
	var avatar = req.body.avatar;

	//console.log("here " +name);
  var i;
  var index;
  for(i =0; i < users["users"].length; i++){
    if(name == users["users"][i]['name']){
      index = i;
    }
  }

  users["users"][index]['avatar'] = avatar;
  users["users"][index]['image'] = img;
  //console.log("here");
  	
  	
  	//console.log(old);
  	//res.json(user);
}