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
	// example: $("#div-id").click(functionToCall);
	$("#submitBtn").click(submitClick);
  $("#powerBtn").click(powerClick);
  $("#finishBtn").click(finishClick);

  $("#Strength").click(strengthClick);
  $("#Endurance").click(enduranceClick);

  $(".rank").click(rank1Click);
  $(".icons").click(iconClick);
  $("#create").click(createClick);
  //$("#rank2").click(rank2Click);
  //$("#rank3").click(rank3Click);
  //$("#rank4").click(rank4Click);
  //$("#rank5").click(rank5Click);
}


function submitClick(e){

	var workoutID = $('#workout').val();
  $(".list-group").hide();
  $(workoutID).show();
	
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

function iconClick(e){
  e.preventDefault();
  $(".bigicon").hide();
  var avatar = $(this).attr("id");
  avatar ="#"+ avatar + "Big";
  $(avatar).show();

}

function createClick(e){
  e.preventDefault();
 // $(".bigicon").hide();
  user = $("#inputName").attr('value');
  console.log(user);
  console.log("hi");
}