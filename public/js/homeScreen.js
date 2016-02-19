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
	//$.get("/user", loadUser);

  $(".work").change(submitClick);
  //console.log($(".work").length);
  $("#powerBtn").click(powerClick);
  $("#finishBtn").click(finishClick);
  //$(".icons").click(iconClick);

  var team = $("#tm").text();
  if(team == "Heroes"){
    $('link[rel=stylesheet][href~="/css/team2.css"]').remove();
  }
  if(team == "Villains"){
    $('link[rel=stylesheet][href~="/css/team1.css"]').remove();
  }
}

function loadUser(result){
  var name = result['name'];
  $("#user").text(name);
  var avat = result["avatar"];
  $('#avat').text(avat);
  var image = result['image'];
  $('#avsrc').attr('src', image);

  

}

function submitClick(e){
  console.log("hi");
  e.preventDefault();
  var workoutID = $('#workout').val();
  $(".list-group").hide();
  $(workoutID).show();
  $('.stats').remove();
  var stat = $(workoutID).children('p').text();
  //console.log(stat);
  var input = '<input class = "stats" type = "hidden" name = "stat" value ="' + stat + '"></input>';
  $(workoutID).append(input);
  
}

function powerClick(e){
  var blank = $('#nowork').css("display");
 // console.log(blank);
  var workoutID = $('#workout').val();
  if(blank == "none"){
    $("#workoutForm :input").attr('disabled', true)
   // $("#powerBtn").text("FINISH");
   //$("#powerBtn").attr("id","finishBtn");
   $("#powerBtn").hide();
   $("#finishBtn").show();
   $(workoutID + " :input").attr('disabled',false);
   $(workoutID + " label").removeClass('disabled');
  }

  
  
}

function finishClick(e){
 // console.log("hi");
  $(".list-group").hide();
  $("#nowork").show();
  $("#powerBtn").show();
  $("#finishBtn").hide()
  $("#workoutForm :input").prop('disabled', false)
  var checkbox = $('.list-group label.checkbox :input');
  //checkbox.text("hi");
  checkbox.attr('disabled',true);
  checkbox.attr('checked',false);
  checkbox = $('.list-group label.checkbox')
  checkbox.addClass('disabled');
  
  //console.log(checkbox);
 // $("#finishBtn").text("POWER UPP");
 // $("#finishBtn").attr("id", "powerBtn")
}


