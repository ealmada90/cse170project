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
	$("#testjs").click(function(e) {
		
	});
  //$(".strength").hide();
  $(".endurance").hide();
	// Add any additional listeners here

  $("#Strength").click(strengthClick);
  $("#Endurance").click(enduranceClick);

  $(".rank").click(rank1Click);
  //$("#create").click(createClick);
  //$.get("/user", loadUser);
  //$("#rank2").click(rank2Click);
  //$("#rank3").click(rank3Click);
  //$("#rank4").click(rank4Click);
  //$("#rank5").click(rank5Click);
}

function loadUser(result){
  var avat = result["avatar"];
  $('#avat').text(avat);
  var team = result["team"];
  if(team == "Heroes"){
    $('link[rel=stylesheet][href~="/css/team2.css"]').remove();
    $('.villain').hide();
  }
  if(team == "Villains"){
    $('link[rel=stylesheet][href~="/css/team1.css"]').remove();
    $('.hero').hide();
  }

}


function strengthClick(e){
  e.preventDefault();
  $(".strength").show();
  $(".endurance").hide();
  $("li.strong").addClass('active');
  $("li.endure").removeClass('active');
}

function enduranceClick(e){
  e.preventDefault();
  $(".strength").hide();
  $(".endurance").show();
  $("li.strong").removeClass('active');
  $("li.endure").addClass('active');
}

function rank1Click(e){
  e.preventDefault();
  var id = $(this).attr('id');
  id = "#" +id + "stats";
  $(id).toggle();
}


function createClick(e){
  //e.preventDefault();
 // $(".bigicon").hide();

 var data=$(this).closest('form').serialize();
  console.log(data);
  $.post("/user",data);
  console.log("hi");
  window.location.assign('/home');
}