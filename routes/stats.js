var data = require("../data.json");

exports.view = function(req, res) {

	if(req.query.work == '1'){
		//console.log("here");
		var i;
		var points;
		for(i=0; i<data['stats'].length; i++){
			points = data['stats'][i]['percent'];
			if(points <= 95){
				points +=5;
				data['stats'][i]['percent'] = points;
			}
		}   
	}
	

   // console.log("hi");
	res.render('stats',data)
 }