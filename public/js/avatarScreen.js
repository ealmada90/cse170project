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
    $('#smallher').show();
  }
  if(team == "Villains"){
    $('#smallvil').show();
  }

  var avat = result["avatar"];
}

function iconClick(e){
  e.preventDefault();
  $(".bigicon").hide();
  var avatar = $(this).attr("id");
  avatar ="#"+ avatar + "Big";
  $(avatar).show();

}


