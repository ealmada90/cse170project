'use strict';
//var user = require('../user.json');

var user = "";
var avatar = "";
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
 // console.log("hi");
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $(".glyphicon-user").closest('button').addClass('active');
	$.get("/chars", loadUser);
  

  var team = $("#tm").text();
  $("#teamname").text(team);
  if(team == "Heroes"){
    $('link[rel=stylesheet][href~="/css/team2.css"]').remove();
   // $('#smallher').show();
  }
  if(team == "Villains"){
    $('link[rel=stylesheet][href~="/css/team1.css"]').remove();
    //$('#smallvil').show();
  }

  var avat = $('#avat').text();
 // var newavatar ="#"+ avat + "Big";
  //$(newavatar).show();
  var name = $('#name').text();
  $("#user").text(name);
  var points = $("#pts").text();
  //console.log(points);
  $('#points').text(points + " points");
}

function loadUser(result){
  var team = $("#tm").text();
  var avat = $('#avat').text();
  var unlock = $("#unlock").text();
  var character;

  var i;
  var big;
  for(i =0; i < result[team].length; i++){
    if(avat == result[team][i]['title']){
      big = result[team][i]['bigsrc'];
    }
  }

  var bigHTML = '<h1 style= "text-align:Center">' + avat + '</h1> ' + '<p align="center">' +
  '<img src = "' + big + '"style="width:150px; height:240px"> </p>';
  //console.log(id);
  $("#bigchar").html(bigHTML);

  var smallHTML ="";
  for(i =0; i < result[team].length; i++){
    var temp = $('#'+result[team][i]["title"]+'unlock').length;
    if(temp ==0 && !(result[team][i]["title"] == "Superman" || result[team][i]["title"] == "Darkseid")){
      smallHTML += '<div class="btn-group btn-group-lg" id = "' + result[team][i]["title"] + 
      '" role="group" aria-label="' +result[team][i]["title"] + '">' +
      '<img src="' + result[team][i]["smallsrc"] +'" style="width:90px; height:90px; opacity:0.5"></div>';
    }
    else if( !(result[team][i]["title"] == "Superman" || result[team][i]["title"] == "Darkseid") ){
      smallHTML += '<div class="btn-group btn-group-lg icons" id = "' + result[team][i]["title"] + 
      '" role="group" aria-label="' +result[team][i]["title"] + '"> <a href ="#">' +
      '<img src="' + result[team][i]["smallsrc"] +'" style="width:90px; height:90px"></a></div>';
    }
    
  }
  $("#smallchar").html(smallHTML);
  var reward;
  if(team == "Heroes" && unlock == "true"){
   reward= '<h4 style = "text-align:center">Reward Character</h4>' +
      '<div class="btn-group btn-group-lg icons" role="group" aria-label="Superman" id = "Superman">'+ 
      '<a href ="#"><img src="http://img04.deviantart.net/3557/i/2003/12/e/6/golden_age_superman_base_color.jpg"'+
      ' style="width:90px; height:90px; margin-left:100px"></a></div></div>';
  }
  else if(team == "Heroes"){
    reward= '<h4 style = "text-align:center">Reward Character</h4>' +
      '<div class="btn-group btn-group-lg" role="group" aria-label="Superman" id = "Superman">'+ 
      '<img src="http://img04.deviantart.net/3557/i/2003/12/e/6/golden_age_superman_base_color.jpg"'+
      ' style="width:90px; height:90px; margin-left:100px; opacity:0.5"></div></div>';
  }
  else if(team == "Villains" && unlock == "true"){
   reward= '<h4 style = "text-align:center">Reward Character</h4>' +
      '<div class="btn-group btn-group-lg icons" role="group" aria-label="Darkseid" id = "Darkseid">'+ 
      '<a href ="#"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/DarkseidCrain.jpg/250px-DarkseidCrain.jpg"'+
      ' style="width:90px; height:90px; margin-left:100px"></a></div></div>';
  }
  else{
    reward= '<h4 style = "text-align:center">Reward Character</h4>' +
      '<div class="btn-group btn-group-lg" role="group" aria-label="Darkseid" id = "Darkseid">'+ 
      '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/DarkseidCrain.jpg/250px-DarkseidCrain.jpg"'+
      ' style="width:90px; height:90px; margin-left:100px; opacity:0.5"></div></div>';
  }
  $("#reward").html(reward);
  $(".icons").click(iconClick);



}

function iconClick(e){
  e.preventDefault();
  var id = $(this).attr("id");
  $("#avat").text(id);
  $.get("/chars", changeAvat);

 
  //console.log("hi");
}

function changeAvat(result){
  //console.log("here");
  var team = $("#tm").text();
  var avat = $('#avat').text();
  var character;

  var i;
  var big;
  for(i =0; i < result[team].length; i++){
    if(avat == result[team][i]['title']){
      big = result[team][i]['bigsrc'];
    }
  }

  var bigHTML = '<h1 style= "text-align:Center">' + avat + '</h1> ' + '<p align="center">' +
  '<img src = "' + big + '"style="width:150px; height:240px"> </p>';
  //console.log(id);
  $("#bigchar").html(bigHTML);
  var name = $('#name').text();
  $.post("/chars",{"name": name, "avatar": avat, "img" : big} , userAvat);
}

function userAvat(result){

}


