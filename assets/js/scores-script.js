var setScoreEl  = document.querySelector("#scoreLog");
var nameInput = document.querySelector("#name");
var submitEl = document.querySelector("#submit");
var setGameTypeEl = document.querySelector(".gameType");
var submissionResponseEl = document.querySelector("#response");
// document.getElementById("scoreLog").innerHTML = localStorage.getItem("scoreLog");
// setGameTypeEl = localStorage.getItem("gameType");
var score = JSON.parse(localStorage.getItem("scoreLog"))
var gameType = JSON.parse(localStorage.getItem("gameType"));
var userInput = "";

//console.log("gameType = " + localStorage.getItem("gameType"))
//console.log(gameType);
setGameType()
setScore()

function setScore() {
if (gameType) setScoreEl.textContent = parseInt(score, 10)/100;
else if (!gameType) setScoreEl.textContent = score;
else alert("problem setting score");
}

function setGameType() {


    if (gameType)
        setGameTypeEl.textContent = "Game Type: Timed";
    else if (!gameType)
        setGameTypeEl.textContent = "Game Type: Un-Timed";
    else alert("problem setting Game Type");
}

function showResponse(e) {

    var correctInput = false;

    do {
    if (nameInput.value != "") {
     correctInput = true;
     userInput = nameInput.value;
     e.preventDefault();
    }
    else alert("Must Enter Text")
    }while (correctInput)

    
    console.log(ms2)
if (localStorage.hasOwnProperty("scoreLog")) {
    $(".score-card").css("padding-bottom", "6px")
    var response = ms2 + " is a contender!";
    submissionResponseEl.textContent = response
    // $("leader-board-enter").removeClass(".hide")
    // $("leader-board-enter").addClass(".show")
}
else {submissionResponseEl.textContent = "You are not a contender!";}
}

submitEl.addEventListener("click", showResponse);