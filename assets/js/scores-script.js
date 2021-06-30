var setGameTypeEl = document.querySelector(".gameType");
var setScoreEl = document.querySelector("#scoreLog");
var nameInput = document.querySelector("#name");
var submitEl = document.querySelector("#submit");
var hideScoreCard = document.querySelector(".score-card")
var leaderBoardBtn = document.querySelector("#leader-board-enter")

//var submissionResponseEl = document.querySelector("#response");
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
    if (gameType) setScoreEl.textContent = parseInt(score, 10) / 100;
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
    e.preventDefault();



    if (nameInput.value != "") {
        var userInput = nameInput.value;

        if (localStorage.hasOwnProperty("scoreLog")) {
            $(".score-card").css("padding-bottom", "6px")
            var response = userInput + " is a contender!";
            document.querySelector("#response").textContent = response.toUpperCase()
             $("#leader-board-enter").removeClass(".hide")
             $("#leader-board-enter").addClass(".show")
             //var leaderBoardCard = document.querySelector("#leader-board-enter");
             leaderBoardBtn.removeAttribute("class", "hide");
             leaderBoardBtn.setAttribute("class", "show");
            }
        else {
            document.querySelector("#response").textContent = "You are not a contender!";
        }
    }
    else {
        document.querySelector("#response").textContent = "You Must Enter A Name!"}
}

submitEl.addEventListener("click", showResponse);

leaderBoardBtn.addEventListener("click", hideScoreCardFn)

function hideScoreCardFn (){
    hideScoreCard.setAttribute(".hide");
}