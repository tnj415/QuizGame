var setGameTypeEl = document.querySelector(".gameType");
var setScoreEl = document.querySelector("#scoreLog");
var nameInput = document.querySelector("#name");
var submitEl = document.querySelector("#submit");
var hideScoreCard = document.querySelector(".score-card");
var leaderBoardBtn = document.querySelector("#enter-leader-board");
var leader = document.querySelector("#name");

//var submissionResponseEl = document.querySelector("#response");
// document.getElementById("scoreLog").innerHTML = localStorage.getItem("scoreLog");
// setGameTypeEl = localStorage.getItem("gameType");
var score = JSON.parse(localStorage.getItem("scoreLog"));
var gameType = JSON.parse(localStorage.getItem("gameType"));
var userInput = "";

submitEl.addEventListener("click", showResponse);

var members = [];

setGameType();
setScore();

function setGameType() {


    if (gameType)
        setGameTypeEl.textContent = "Game Type: Timed";
    else if (!gameType)
        setGameTypeEl.textContent = "Game Type: Un-Timed";
    else alert("problem setting Game Type");
}

function setScore() {
    if (gameType) setScoreEl.textContent = parseInt(score, 10) / 100;
    else if (!gameType) setScoreEl.textContent = score;
    else alert("problem setting score");
}

function showResponse(e) {
    e.preventDefault();



    if (nameInput.value != "") {
        var userInput = nameInput.value;

        if (localStorage.hasOwnProperty("scoreLog")) {

            var response = userInput + " is a contender!";
            document.querySelector("#response").textContent = response.toUpperCase()

            $("#enter-leader-board").removeClass("hide")
            $("#enter-leader-board").addClass("show")
            leaderBoardBtn.addEventListener("click", function () {
                $(".score-card").addClass("hide")
                $(".my-score-form").addClass("hide")
            })

        }
        else {
            document.querySelector("#response").textContent = "You are not a contender!";
        }
    }
    else {
        document.querySelector("#response").textContent = "You Must Enter A Name!"
    }



}

function hideScoreCardFn() {
    console.log("entered")

    $(".score-card").addClass("hide")
    $(".my-score-form").addClass("hide")

    showBoard();
}
