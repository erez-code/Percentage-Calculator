window.addEventListener("load", startup, false);

function startup() {
  //first calculator
  $("#calculate1").click(function(event) {
    //check if there's enough input
    if (
      $("#wholeForCalc1").val() === "" ||
      $("#percentForCalc1").val() === ""
    ) {
      $("#displayResult1").text("Not enough input.");
    } else {
      //run calculation
      var myResult1 =
        ($("#wholeForCalc1").val() * $("#percentForCalc1").val()) / 100;
      $("#displayResult1").html(
        "Result: The part is " +
          myResult1 +
          "." +
          "</br>" +
          $("#percentForCalc1").val() +
          "% of " +
          $("#wholeForCalc1").val() +
          " is " +
          myResult1 +
          ". "
      );
    }
  });

  //second calculator
  $("#calculate2").click(function(event) {
    //check if there's enough input
    if ($("#partForCalc2").val() === "" || $("#wholeForCalc2").val() === "") {
      $("#displayResult2").text("Not enough input.");
    } else {
      //run calculation
      var myResult2 =
        ($("#partForCalc2").val() * 100) / $("#wholeForCalc2").val();
      $("#displayResult2").html(
        "Result: The percentage is " +
          myResult2 +
          "%." +
          "</br>" +
          myResult2 +
          "% of " +
          $("#wholeForCalc2").val() +
          " is " +
          $("#partForCalc2").val() +
          ". "
      );
    }
  });

  //third calculator
  $("#calculate3").click(function(event) {
    //check if there's enough input
    if ($("#partForCalc3").val() === "" || $("#percentForCalc3").val() === "") {
      $("#displayResult3").text("Not enough input.");
    } else {
      //run calculation
      var myResult3 =
        ($("#partForCalc3").val() * 100) / $("#percentForCalc3").val();
      $("#displayResult3").html(
        "Result: The whole is " +
          myResult3 +
          "." +
          "</br>" +
          $("#percentForCalc3").val() +
          "% of " +
          myResult3 +
          " is " +
          $("#partForCalc3").val() +
          ". "
      );
    }
  });
}
