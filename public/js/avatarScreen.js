'use strict';

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
	$.get("/user", loadUser);
  $(".icons").click(iconClick);
}

function loadUser(result){
  var team = result["team"];
  $("#teamname").text(team);
  if(team == "Heroes"){
    $('link[rel=stylesheet][href~="/css/team2.css"]').remove();
    $('#smallher').show();
  }
  if(team == "Villains"){
    $('link[rel=stylesheet][href~="/css/team1.css"]').remove();
    $('#smallvil').show();
  }

  var avat = result["avatar"];
  var newavatar ="#"+ avat + "Big";
  $(newavatar).show();
}

function iconClick(e){
  e.preventDefault();
  $(".bigicon").hide();
  var avatar = $(this).attr("id");
  var newavatar ="#"+ avatar + "Big";
  $(newavatar).show();
  var image = $(newavatar).children('p').children().attr('src');
  $.post("/user",{"avatar": avatar, "image": image}, changeUser);
  //console.log(image);
}

function changeUser(result){
  //console.log("hi " +result);
}


