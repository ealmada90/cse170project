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
  $(".glyphicon-home").closest('button').addClass('active');
  console.log("hi");

  $(".work").change(submitClick);
  //console.log($(".work").length);
  $("#powerBtn").click(powerClick);
  $("#cancelBtn").click(finishClick);
  
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
  //console.log("hi");
  e.preventDefault();
  var workoutID = $('#workout').val();
  $(".list-group").hide();
  $(workoutID).show();
  if(workoutID == "#nowork"){
    $(".power").hide();
  }
  else{
    $(".power").show();
  }
  //ga("send", "event", "switch", "click");
}
  //console.log(stat);
  


function powerClick(e){
  var blank = $('#nowork').css("display");
 // console.log(blank);
  var workoutID = $('#workout').val();
  if(blank == "none"){
    $("#workoutForm :input").attr('disabled', true)
   // $("#powerBtn").text("FINISH");
   //$("#powerBtn").attr("id","finishBtn");
   $(".power").hide();
   $("#finishBtn").show();
   $("#cancelBtn").show();
   $("#back").hide();
   $(workoutID).hide();
   $(workoutID+"check").show();
   var stat = $(workoutID+"check").children('p').text();
   var input = '<input class = "stats" type = "hidden" name = "stat" value ="' + stat + '"></input>';
   $(workoutID+"check").append(input);
   $(workoutID+"check" + " :input").attr('disabled',false);
   $(workoutID+"check" + " label").removeClass('disabled');
  }

  //ga("send", "event", "power", "click");
  
}

function finishClick(e){
 // console.log("hi");
  $(".list-group").hide();
  $("#nowork").show();
  
  $("#finishBtn").hide()
  $("#cancelBtn").hide()
  $("#workoutForm :input").prop('disabled', false)
  var checkbox = $('.list-group label.checkbox :input');
  //checkbox.text("hi");
  checkbox.attr('disabled',true);
  checkbox.attr('checked',false);
  checkbox = $('.list-group label.checkbox')
  checkbox.addClass('disabled');

  
    $(".power").hide();
  
  //console.log(checkbox);
 // $("#finishBtn").text("POWER UPP");
 // $("#finishBtn").attr("id", "powerBtn")
 //ga("send", "event", "back", "click");
}

