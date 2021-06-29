var nameInput = document.querySelector("#name");
var submitEl = document.querySelector("#submit");
var setGameTypeEl = document.querySelector(".gameType");
var submissionResponseEl = document.querySelector("#response");
document.getElementById("scoreLog").innerHTML = localStorage.getItem("scoreLog");
// setGameTypeEl = localStorage.getItem("gameType");
var gameType = JSON.parse(localStorage.getItem("gameType"));

//console.log("gameType = " + localStorage.getItem("gameType"))
//console.log(gameType);
setGameType()

function setGameType() {


    if (gameType)
        setGameTypeEl.textContent = "Game Type: Timed";
    else if (!gameType)
        setGameTypeEl.textContent = "Game Type: Un-Timed";
    else alert("problem setting Game Type");
}

function showResponse(e) {

    var myString = nameInput.value;
    ms2 = myString.toUpperCase();

    e.preventDefault();
    console.log(ms2)

    $(".score-card").css("padding-bottom", "6px")
    var response = "Welcome to the Leader-board " + ms2 + "!";
    submissionResponseEl.textContent = response
}

submitEl.addEventListener("click", showResponse);