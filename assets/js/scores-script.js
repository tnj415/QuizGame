var score = JSON.parse(localStorage.getItem("scoreLog")) || 0;
var gameType = JSON.parse(localStorage.getItem("gameType")) || 0;
var setGameTypeEl = document.querySelector(".gameType");
var setScoreEl = document.querySelector("#scoreLog");
var memberEl = document.querySelector("#name");
var submitEl = document.querySelector("#submit");
var leaderBoardBtn = document.querySelector("#enter-leader-board");
var newName = "";
var newScore = 0;
var leaderBoardArr = [];
submitEl.addEventListener("click", showResponse);
leaderBoardBtn.addEventListener("click", enterLeaderBoard);

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
        setScoreEl.textContent = score;
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


    var newScoreArr = {
        score: newScore,
        name: newName
    }

    leaderBoardArr = JSON.parse(localStorage.getItem("storedBoardTimed")) || [];
    leaderBoardArr.push(newScoreArr);
    //sortBoard();
    console.log(leaderBoardArr)
    leaderBoardArr.sort((a, b) => (a.score < b.score) ? 1 : -1)
    console.log(leaderBoardArr)
    localStorage.setItem('storedBoardTimed', JSON.stringify(leaderBoardArr));

    showLeaderBoard();
}


function showLeaderBoard() {

    //console.log("from showLeaderBoard stobjt  = " + leaderBoardArr)
    leaderBoardArr.forEach((e, i) => {
        //console.log("el = " + el)
        //console.log("el.name el.score" + el.name + el.score)
        console.log("i = " + i)
        if (i < 10) { $("#member-list").append("<li>" + "" + e.name + ": " + e.score)}
    })
}


function init() {
    setGameType();
    setScore();
}


init();
