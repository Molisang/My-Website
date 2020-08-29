$(document).ready(function(){

  $("#CD").click(function(){
	$("#one").fadeIn(1000);
	$("#two").fadeOut(1000);
	$("#two-two").fadeOut(1000);
	$("#three").fadeOut(1000);
	$("#three-two").fadeOut(1000);
	$("#four").fadeOut(1000);
	$("#five").fadeOut(1000);
  });

  $("#GD").click(function(){
	$("#two").fadeIn(1000);
	$("#two-two").fadeIn(1000);
	$("#one").fadeOut(1000);
	$("#three").fadeOut(1000);
	$("#three-two").fadeOut(1000);
	$("#four").fadeOut(1000);
	$("#five").fadeOut(1000);
  });

   $("#UIX").click(function(){
	$("#three").fadeIn(1000);
	$("#three-two").fadeIn(1000);
	$("#two").fadeOut(1000);
	$("#two-two").fadeOut(1000);
	$("#one").fadeOut(1000);
	$("#four").fadeOut(1000);
	$("#five").fadeOut(1000);
  });

   $("#3DM").click(function(){
	$("#four").fadeIn(1000);
	$("#two").fadeOut(1000);
	$("#two-two").fadeOut(1000);
	$("#three").fadeOut(1000);
	$("#three-two").fadeOut(1000);
	$("#one").fadeOut(1000);
	$("#five").fadeOut(1000);
  });

   $("#VP").click(function(){
	$("#five").fadeIn(1000);
	$("#two").fadeOut(1000);
	$("#two-two").fadeOut(1000);
	$("#three").fadeOut(1000);
	$("#three-two").fadeOut(1000);
	$("#four").fadeOut(1000);
	$("#one").fadeOut(1000);
  });

});