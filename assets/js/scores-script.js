var score = JSON.parse(localStorage.getItem("scoreLog")) || 0;
var gameType = JSON.parse(localStorage.getItem("gameType")) || 0;
var setGameTypeEl = document.querySelector(".gameType");
var setScoreEl = document.querySelector("#scoreLog");
var memberEl = document.querySelector("#name");
var submitEl = document.querySelector("#submit");
var leaderBoardBtn = document.querySelector("#enter-leader-board");
var newName = null;
var newScore = null;
var leaderBoardArr = [];
submitEl.addEventListener("click", showResponse);
leaderBoardBtn.addEventListener("click", enterLeaderBoard);
var didWeJump = (JSON.parse(localStorage.getItem("jump")))

function showResponse(e) {
    e.preventDefault();
    if (memberEl.value != "") {
        newName = (memberEl.value).toUpperCase();
        document.querySelector("#response").textContent = newName + " is a contender!";

        $("#enter-leader-board").removeClass("hide")
        $("#enter-leader-board").addClass("show")
    }
    else {
        document.querySelector("#response").textContent = "You Must Enter A Name!"
    }
}

function setGameType() {
    if (gameType) {
        setGameTypeEl.textContent = "Game Type: Timed";
    }
    else if (!gameType) {
        setGameTypeEl.textContent = "Game Type: Un-Timed";
    }
    else alert("problem setting Game Type");
}

function setScore() {
    if (gameType) {
        newScore = parseInt(score, 10) / 100
        setScoreEl.textContent = newScore;
    }
    else if (!gameType) {
        newScore = score
        setScoreEl.textContent = newScore;
    }
    else alert("problem setting score");
}

function enterLeaderBoard() {
    event.preventDefault();
    setLeaderBoard();
    $(".score-card").addClass("hide");
    $(".leader-board").removeClass("hide");
    $(".leader-board").addClass("show");
}

function setLeaderBoard() {
    var chooseBoard = true;
    var newScoreArr = {
        score: newScore,
        name: newName
    }

    if (didWeJump) {
        chooseBoard = confirm("click \"OK\" to view Timed Leader Board or \"Cancel\" to view Untimed Leader Board")

        if (chooseBoard) {
            leaderBoardArr = JSON.parse(localStorage.getItem("storedBoardTimed")) || [];
            gameType = true;
        }
        else if (!chooseBoard) {
            leaderBoardArr = JSON.parse(localStorage.getItem("storedBoardUntimed")) || [];
            gameType = false;

        }
        else alert("Error in setLeaderBoard: not getting proper obj from local storage")
        setGameType();
    }
    else if (!didWeJump) {
        if (gameType) {
            leaderBoardArr = JSON.parse(localStorage.getItem("storedBoardTimed")) || [];
            (newScore !== null) ? leaderBoardArr.push(newScoreArr) : {};
            leaderBoardArr.sort((a, b) => (a.score < b.score) ? 1 : -1)
            localStorage.setItem('storedBoardTimed', JSON.stringify(leaderBoardArr));
        }
        else if (!gameType) {

            leaderBoardArr = JSON.parse(localStorage.getItem("storedBoardUntimed")) || [];
            (newScore !== null) ? leaderBoardArr.push(newScoreArr) : {};
            leaderBoardArr.sort((a, b) => (a.score < b.score) ? 1 : -1)
            localStorage.setItem('storedBoardUntimed', JSON.stringify(leaderBoardArr));
        }
    }
    showLeaderBoard();
}

function showLeaderBoard() {
    leaderBoardArr.forEach((e, i) => {
        if (i < 10) $("#member-list").append("<li>" + e.name + ": " + e.score)
    })
    localStorage.setItem("jump", true);
}


function init() {

    if (didWeJump) {
        setLeaderBoard();
        $(".score-card").removeClass("show");
        $(".score-card").addClass("hide");
        $(".leader-board").removeClass("hide");
        $(".leader-board").addClass("show");

    }
    else if (!didWeJump) {
        $(".score-card").removeClass("hide");
        $(".score-card").addClass("show");
        setGameType();
        setScore();
    }
    else alert("ERROR LINE 145")
}


init();
