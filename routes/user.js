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

exports.changeInfo = function(req, res) {

  	var user = users["users"][0]; // of by one, our first project has index 0
  	var avatar = req.body;
  	//console.log(avatar['avatar']);
    if( (avatar['name'] == null || avatar['name'] == "") && avatar['avatar'] != null){

      users["users"][0]['avatar'] = avatar['avatar'];
      users["users"][0]['image'] = avatar['image'];
      var old =users["users"][0]['avatar'];
    }
    else{
      if(avatar['team'] == "Heroes"){
        user = {
          "email": avatar['email'] ,
        "password": avatar['password'],
        "name": avatar['name'],
        "age": avatar['age'],
        "team": avatar['team'], 
        "points": 10,  
        "avatar": "Robin",
        "image" : "https://s-media-cache-ak0.pinimg.com/236x/25/c1/a1/25c1a139856169144c900655b9ebb2f8.jpg"
        };
       // console.log(user);
        users["users"][0] = user;
      }
      else if(avatar['team'] == "Villains"){
        user = {
          "email": avatar['email'] ,
        "password": avatar['password'],
        "name": avatar['name'],
        "age": avatar['age'],
        "team": avatar['team'], 
        "points": 10,  
        "avatar": "ThePenguin",
        "image" : "http://www.toptenz.net/wp-content/uploads/2008/07/penguin.jpg"
        };
       // console.log(user);
        users["users"][0] = user;
      }
    }
   // console.log("here");
  	
  	
  	//console.log(old);
  	res.json(user);
}