
 

$(document).ready(function(){
$('#ex1').zoom({ on:'grab' });
$('#ex2').zoom({ on:'grab' });
$('#ex3').zoom({ on:'grab' });
$('#ex4').zoom({ on:'grab' });
$('#ex5').zoom({ on:'grab' });
$('#ex6').zoom({ on:'grab' });
$('#ex7').zoom({ on:'grab' });
$('#ex8').zoom({ on:'grab' });
$('#ex9').zoom({ on:'grab' });
$('#ex10').zoom({ on:'grab' });
$('#ex11').zoom({ on:'grab' });
$('#ex12').zoom({ on:'grab' });
});
$(document).ready(function(){
$(".show").click(function(){
$(".panel").slideDown("slow");
});
$("body").on("contextmenu", ".enlarged-image", function() {
return false;
});
$("#exp1").click(function() {
$("body").css("overflow", "hidden");
$("#lightbox1").show();
});
$(".minimize").click(function() {
$("#lightbox1").hide();
location.reload();
});
$("#exp2").click(function() {
$("body").css("overflow", "hidden");
$("#lightbox2").show();
});
$("#exp3").click(function() {
$("body").css("overflow", "hidden");
$("#lightbox3").show();
});
$("#exp4").click(function() {
$("body").css("overflow", "hidden");
$("#lightbox4").show();
});
$("#exp5").click(function() {
$("body").css("overflow", "hidden");
$("#lightbox5").show();
});
$("#exp6").click(function() {
$("body").css("overflow", "hidden");
$("#lightbox6").show();
});
$("#exp7").click(function() {
$("body").css("overflow", "hidden");
$("#lightbox5").show();
});
$("#exp8").click(function() {
$("body").css("overflow", "hidden");
$("#lightbox8").show();
});
$("#exp9").click(function() {
$("body").css("overflow", "hidden");
$("#lightbox9").show();
});
$("#exp10").click(function() {
$("body").css("overflow", "hidden");
$("#lightbox10").show();
});
$("#exp11").click(function() {
$("body").css("overflow", "hidden");
$("#lightbox11").show();
});
$("#exp12").click(function() {
$("body").css("overflow", "hidden");
$("#lightbox12").show();
});
$(".show").click(function(){
});
$(".checkout").click(function(){
$(".panel3").slideDown("slow");
$(".panel2").hide("slow");
});
$(".close").click(function(){
$(".panel3").hide("slow");
});
});
$(document).ready(function(){
$("#numb_value").click(function(){
// use jquery to grab value of input field
var numb_value = $("#numb").val(); 
if(numb_value<= 0) {
alert("Incorrect amount");
$(".panel").hide();
}
else{
alert(numb_value  + " item(s) have been added to your cart");
$(".panel").hide();
$(".panel2").slideDown();}
$("#hide").click(function(){
$(".panel2").hide("slow");
});
$(".cart").click(function() {
if ($("#cartbox").hasClass("open")) {
$("#cartbox").slideUp();
$("#cartbox").removeClass("open");
} else {
$("#cartbox").slideDown();
$("#cartbox").addClass("open");
}
});
});
});

