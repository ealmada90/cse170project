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
  var file = location.pathname;
  if(file == "/trainer" || file == "/list" || file == "/search" || file =="/request"){
    $(".glyphicon-search").closest('button').addClass('active');
  }
  else if(file == "/stats" || file == "/rank"){
    $(".glyphicon-stats").closest('button').addClass('active');
  }
  else{
    $(".glyphicon-user").closest('button').addClass('active');
  }
  //$(".strength").hide();
  $(".endurance").hide();
	// Add any additional listeners here

  $("#Strength").click(strengthClick);
  $("#Endurance").click(enduranceClick);
  //$(".cancel").click(cancelApp);

  $(".rank").click(rank1Click);
  $(".help").click(helpClick);
  //$("#create").click(createClick);
  //$.get("/user", loadUser);
  //$("#rank2").click(rank2Click);
  //$("#rank3").click(rank3Click);
  //$("#rank4").click(rank4Click);
  //$("#rank5").click(rank5Click);
  //var avat = result["avatar"];
  //$('#avat').text(avat);
  var team = $("#tm").text();
  if(team == "Heroes"){
    $('link[rel=stylesheet][href~="/css/team2.css"]').remove();
    $('.villain').hide();
  }
  if(team == "Villains"){
    $('link[rel=stylesheet][href~="/css/team1.css"]').remove();
    $('.hero').hide();
  }

  if(file == "/stats"){
    
    var level = $("#level").text();
    var stat = "." + $("#stat").text();
    var gain = $("#gain").text();
    //console.log(stat);
    var statement;
    if(gain != "0"){
     if(level == "true"){
      statement = "POWER UPP!!  +" + gain + "%";
     }
     else{
      statement = "EXP up +" + gain + "%";
     }

     $(stat+" .col-md-3").html("<p>"+statement +"</p>");
    }
    
  }
}

function loadUser(result){
  

}

function cancelApp(e){
  console.log("hi");
  var ul = $(this).closest("ul");
  console.log(ul.attr("id"));
  var ah = $(this).closest("ul").prev();
  console.log(ah.attr("id"));
  ul.remove();
  ah.remove();
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

function helpClick(e){
  var id = $(this).attr('id');
  id = "." + id;
  $(id).toggle();
}