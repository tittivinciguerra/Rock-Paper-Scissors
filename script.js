var whichChoice = document.querySelectorAll(".choice").length;

for (var i = 0; i < whichChoice; i++) {
  var userChoice = document.getElementsByClassName("choice");
}

function victory(user, rand) {
  if (user === rand) {
    document.getElementById("middle").innerHTML = "DRAW";
  } else if (user === "paper" && rand === "scissors") {
    document.getElementById("middle").innerHTML = "YOU LOSE";
  } else if (user === "paper" && rand === "rock") {
    document.getElementById("middle").innerHTML = "YOU WIN";
    return true;
  } else if (user === "scissors" && rand === "paper") {
    document.getElementById("middle").innerHTML = "YOU WIN";
    return true;
  } else if (user === "rock" && rand === "scissors") {
    document.getElementById("middle").innerHTML = "YOU WIN";
    return true;
  } else {
    document.getElementById("middle").innerHTML = "YOU LOSE";
  }
  return false;
}

var lastPick = "";
var elPick1 = document.getElementById("pick1");

var randPick = "";
var elPick2 = document.getElementById("pick2");

$(function() {
  var user = $('.choice').click(function chosen() {
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.height = "23rem";
    document.querySelector(".game").style.display = "none";

    lastPick = this.innerHTML;
    elPick1.classList.add(lastPick);


    var myArray = ["paper", "rock", "scissors"];
    randPick = myArray[Math.floor(Math.random() * myArray.length)];
    elPick2.classList.add(randPick);


    var score = victory(lastPick, randPick);
    if (score == true) {
      document.getElementById("num").innerHTML++;

    }
    document.querySelector(".game").style.display = "none";

  });

});

$(function() {
  $("#again").click(function enableBtn() {
    document.querySelector(".game").style.display = "block";
    document.getElementById("result").style.display = "none";
    elPick1.classList.remove(lastPick);
    elPick2.classList.remove(randPick);
  });
});
