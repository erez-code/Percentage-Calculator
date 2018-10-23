window.addEventListener("load", startup, false);

function startup() {

//first calculator
	$("#calculate1").click(function(event) {
//check if there's enough input
	if($("#wholeForCalc1").val() === "" || $("#percentForCalc1").val() === "") {
		$("#displayResault1").text("Not enough input.")
	}
		else {
//run calculation
	var myResault1 = $("#wholeForCalc1").val() * $("#percentForCalc1").val() /100;
	$("#displayResault1").html("Resault: The part is " + myResault1 +"." + "</br>"  + $("#percentForCalc1").val() + "% of " + $("#wholeForCalc1").val()+ " is "+ myResault1 + ". ")}
	});

//second calculator
	$("#calculate2").click(function(event) {
//check if there's enough input
	if($("#partForCalc2").val() === "" || $("#wholeForCalc2").val() === "") {
		$("#displayResault2").text("Not enough input.")
	}
		else {
//run calculation	
	var myResault2 = $("#partForCalc2").val() *100 / $("#wholeForCalc2").val();
	$("#displayResault2").html("Resault: The percentage is " + myResault2 + "%." + "</br>"   + myResault2 + "% of " + $("#wholeForCalc2").val() + " is " + $("#partForCalc2").val()  +". ")}
	});

//third calculator
	$("#calculate3").click(function(event) {
//check if there's enough input
	if($("#partForCalc3").val() === "" || $("#percentForCalc3").val() === "") {
		$("#displayResault3").text("Not enough input.")
	}
		else {
//run calculation
	var myResault3 = $("#partForCalc3").val() *100 / $("#percentForCalc3").val();
	$("#displayResault3").html("Resault: The whole is " + myResault3 +"." + "</br>"  +$("#percentForCalc3").val() + "% of " + myResault3+" is "+ $("#partForCalc3").val()  + ". ")}
	});
}

