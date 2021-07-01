var setGameTypeEl = document.querySelector(".gameType");
var setScoreEl = document.querySelector("#scoreLog");
var memberEl = document.querySelector("#name");
var submitEl = document.querySelector("#submit");
var leaderBoardBtn = document.querySelector("#enter-leader-board");

var score = JSON.parse(localStorage.getItem("scoreLog"));
var gameType = JSON.parse(localStorage.getItem("gameType"));
var userInput = "";
var memberCountEl = document.querySelector("#member-count");
var memberNameEl = document.querySelector("#member-name");
var memberScoreEl = document.querySelector("#member-score");

submitEl.addEventListener("click", showResponse);
leaderBoardBtn.addEventListener("click", enterLeaderBoard);

var jpArrTimed = (JSON.parse(localStorage.getItem("storedBoardTimed")).split(' '))
var jpArrUntimed = (JSON.parse(localStorage.getItem("storedBoardUntimed")).split(' '))
// var leaderBoardArr = [
//     {memberName = userInput},
//     {memberScore = localStorage.getItem("scoreLog")},
//     {memberGameType = localStorage.getItem("gameType")}
// ]
var storedBoardObjTimed = JSON.parse(localStorage.getItem(storedBoardTimed));
var storedBoardObjUntimed = JSON.parse(localStorage.getItem(storedBoardUntimed));
var leaderBoardArrTimed = [];
var leaderBoardArrUntimed = [];

function enterLeaderBoard() {
    event.preventDefault();
    $(".score-card").addClass("hide");
    $(".leader-board").removeClass("hide");
    $(".leader-board").addClass("show");
}
function getLeaderBoard() {
    if (storedBoard.length === 0) memberListCount = 0;
    else memberListCount = storedBoard.length;

    memberCountEl.textContent = memberListCount;
}

function setLeaderBoard() {
    setGameType();
    setScore();
    showTimedLeaderBoard();

    // memberCountEl.textContent = memberListCount;
    // localStorage.setItem("storedBoardObj", storedBoard);

    // memberNameEl.textContent = memberName;
    // localStorage.setItem("storedBoardObj", storedBoard);

    // memberScoreEl.textContent = memberScore;
    // localStorage.setItem("storedBoardObj", storedBoard);
}

function showTimedLeaderBoard() {

    for (var i = 0; i < jpArr.length / 2; i += 2) {
        leaderBoardArrTimed[i].push([jpArr[i], jpArr[i + 1]])

    }

        leaderBoardArrTimed.forEach((el, i) => {
        $("<ol>").append("<li>" + leaderBoardArrTimed[i][el] + " - " + leaderBoardArrTimed[i][el])
        memberListCount++
        // memberCountEl.textContent = leaderBoardArr.length;
        // memberNameEl.textContent = leaderBoardArr[i][el];
        // memberScoreEl.textContent = memberScore[i][el];
    })
    if (memberListCount !== leaderBoardArrTimed.length) alert("mlc != lbArr")

}
function showUntimedLeaderBoard() {

    for (var i = 0; i < jpArr.length / 2; i += 2) {
        leaderBoardArr[i].push([jpArr[i], jpArr[i + 1]])

    }


    leaderBoardArrUntimed.forEach((el, i) => {
        $("<ol>").append("<li>" + leaderBoardArrUntimed[i][el] + " - " + leaderBoardArrUnt[i][el])
        memberListCount++
        // memberCountEl.textContent = leaderBoardArr.length;
        // memberNameEl.textContent = leaderBoardArr[i][el];
        // memberScoreEl.textContent = memberScore[i][el];
    })

    if (memberListCount !== leaderBoardArrUntimed.length) alert("mlc != lbArr")
}

function init() {
    getLeaderBoard();
}

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
    setLeaderBoard();
}

function showResponse(e) {
    e.preventDefault();
    if (memberEl.value != "") {
        var userInput = memberEl.value;
        var response = userInput + " is a contender!";
        document.querySelector("#response").textContent = response.toUpperCase()

        $("#enter-leader-board").removeClass("hide")
        $("#enter-leader-board").addClass("show")
    }
    else {
        document.querySelector("#response").textContent = "You Must Enter A Name!"
    }
}

init();
