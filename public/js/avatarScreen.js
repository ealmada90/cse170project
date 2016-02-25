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
    if(temp ==0){
      smallHTML += '<div class="btn-group btn-group-lg" id = "' + result[team][i]["title"] + 
      '" role="group" aria-label="' +result[team][i]["title"] + '">' +
      '<img src="' + result[team][i]["smallsrc"] +'" style="width:90px; height:90px; opacity:0.5"></div>';
    }
    else{
      smallHTML += '<div class="btn-group btn-group-lg icons" id = "' + result[team][i]["title"] + 
      '" role="group" aria-label="' +result[team][i]["title"] + '"> <a href ="#">' +
      '<img src="' + result[team][i]["smallsrc"] +'" style="width:90px; height:90px"></a></div>';
    }
    
  }
  $("#smallchar").html(smallHTML);
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


