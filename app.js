window.addEventListener("load", startup, false);

function startup() {
	$("#calculate1").click(function(event) {
	var myResault1 = $("#wholeForCalc1").val() * $("#percentForCalc1").val() /100;
	$("#displayResault1").text(myResault1 +".")
	});
	$("#calculate2").click(function(event) {
	var myResault2 = $("#partForCalc2").val() *100 / $("#wholeForCalc2").val();
	$("#displayResault2").text(myResault2 + "%.")
	});
	$("#calculate3").click(function(event) {
	var myResault3 = $("#partForCalc3").val() *100 / $("#percentForCalc3").val();
	$("#displayResault3").text(myResault3 +".")
	});
}

