'use strict';

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
  $(".toned").hide();
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("#submitBtn").click(submitClick);
  $("#powerBtn").click(powerClick);
  $("#finishBtn").click(finishClick);

  $("#strength").click(strengthClick);
  $("#toned").click(tonedClick);

  $(".rank").click(rank1Click);
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
  $(".toned").hide();
  $("li.strong").addClass('active');
  $("li.endurance").removeClass('active');
}

function tonedClick(e){
  e.preventDefault();
  $(".strength").hide();
  $(".toned").show();
  $("li.strong").removeClass('active');
  $("li.endurance").addClass('active');
}

function rank1Click(e){
  e.preventDefault();
  var id = $(this).attr('id');
  id = "#" +id + "stats";
  $(id).toggle();
}