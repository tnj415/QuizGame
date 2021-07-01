var setGameTypeEl = document.querySelector(".gameType");
var setScoreEl = document.querySelector("#scoreLog");
var memberEl = document.querySelector("#name");
var submitEl = document.querySelector("#submit");
var leaderBoardBtn = document.querySelector("#enter-leader-board");
var userInput = "";
var score = JSON.parse(localStorage.getItem("scoreLog"));
var gameType = JSON.parse(localStorage.getItem("gameType"));
var userInput = "";
var memberNameStored = userInput;
var memberCountEl = document.querySelector("#member-count");
var memberNameEl = document.querySelector("#member-name");
var memberScoreEl = document.querySelector("#member-score");

submitEl.addEventListener("click", showResponse);
leaderBoardBtn.addEventListener("click", enterLeaderBoard);

var jpArrTimed = [];
var jpArrUntimed = [];
// var leaderBoardArr = [
//     {memberName = userInput},
//     {memberScore = localStorage.getItem("scoreLog")},
//     {memberGameType = localStorage.getItem("gameType")}
// ]
var storedBoardObjTimed = JSON.parse(localStorage.getItem("storedBoardTimed"));
var storedBoardObjUntimed = JSON.parse(localStorage.getItem("storedBoardUntimed"));
var leaderBoardArrTimed = [];
var leaderBoardArrUntimed = [];

function enterLeaderBoard() {
    event.preventDefault();
    setLeaderBoard();
    $(".score-card").addClass("hide");
    $(".leader-board").removeClass("hide");
    $(".leader-board").addClass("show");

}
function getTimedLeaderBoard() {
    if (storedBoardObjTimed.length === 0) memberListCount = 0;
    else memberListCount = storedBoardObjTimed.length;

    memberCountEl.textContent = memberListCount;
}

function getUntimedLeaderBoard() {
    if (storedBoardObjUntimed.length === 0) memberListCount = 0;
    else memberListCount = storedBoardObjUntimed.length;

    memberCountEl.textContent = memberListCount;
}

function setLeaderBoard() {
    // setGameType();
    // setScore();
console.log("!!!userInput = " +userInput)
console.log("!!!score = " + parseInt(score,10)/100)
    //jpArrTimed.push(userInput);
   //jpArrTimed.push(memberEl);
   leaderBoardArrTimed.push([userInput, parseInt(score, 10) / 100]);

    if (localStorage.getItem("storedBoardTimed") !== null)
        jpArrTimed = (JSON.parse(localStorage.getItem("storedBoardTimed")));
    if (localStorage.getItem("storedBoardUntimed") !== null)
        jpArrUntimed = (JSON.parse(localStorage.getItem("storedBoardUntimed")));
    //     if (gameType)
    //     showTimedLeaderBoard();
    // else if (!gameType)
    console.log(jpArrTimed)
    showTimedLeaderBoard();
    
    //else alert("ERROR: in setLeaderBoard if statement");
    // memberCountEl.textContent = memberListCount;
    // localStorage.setItem("storedBoardObj", storedBoard);
    // memberNameEl.textContent = memberName;
    // localStorage.setItem("storedBoardObj", storedBoard);
    console.log(leaderBoardArrTimed);
    console.log(leaderBoardArrTimed);
    console.log(leaderBoardArrTimed);
    console.log(leaderBoardArrTimed);

    localStorage.setItem('storedBoardTimed', JSON.stringify(leaderBoardArrTimed));

}

function showTimedLeaderBoard() {

    console.log("jpArrTimed.length = " + jpArrTimed.length)
    for (var i = 0; i < jpArrTimed.length / 2; i += 2) {
        
        console.log("leaderBoardArrTimed = " + leaderBoardArrTimed);
        console.log("leaderBoardArrTimed[i] = " + leaderBoardArrTimed[i]);
       // console.log("jpa i+1" + jpArrTimed[i+1])
        leaderBoardArrTimed.push([jpArrTimed[i], jpArrTimed[i + 1]])

        console.log("leaderBoardArrTimed = " + leaderBoardArrTimed);
        console.log("leaderBoardArrTimed[i] = " + leaderBoardArrTimed[i]);
    }

    leaderBoardArrTimed.forEach((el, i) => {
        $("#member-list").append("<li>" + leaderBoardArrTimed[i])
        //memberListCount++
        // memberCountEl.textContent = leaderBoardArr.length;
        // memberNameEl.textContent = leaderBoardArr[i][el];
        // memberScoreEl.textContent = memberScore[i][el];
    })
    //if (memberListCount !== leaderBoardArrTimed.length) alert("mlc != lbArr")

}
function showUntimedLeaderBoard() {

    for (var i = 0; i < jpArrUntimed.length / 2; i += 2) {
        leaderBoardArrUntimed.push([jpArrUntimed[i], jpArrUntimed[i + 1]]);

    }


    leaderBoardArrUntimed.forEach((el, i) => {
        $(".rank").append("<li>" + leaderBoardArrUntimed[i][el] + " - " + leaderBoardArrUntimed[i][el])
        memberListCount++
        // memberCountEl.textContent = leaderBoardArr.length;
        // memberNameEl.textContent = leaderBoardArr[i][el];
        // memberScoreEl.textContent = memberScore[i][el];
    })

    if (memberListCount !== leaderBoardArrUntimed.length) alert("mlc != lbArr")
}

function init() {
    setGameType();
    setScore();
}

function setGameType() {
    if (gameType) setGameTypeEl.textContent = "Game Type: Timed";
    else if (!gameType) setGameTypeEl.textContent = "Game Type: Un-Timed";
    else alert("problem setting Game Type");
}

function setScore() {
    if (gameType) setScoreEl.textContent = parseInt(score, 10) / 100;
    else if (!gameType) setScoreEl.textContent = score;
    else alert("problem setting score");
    
}

function showResponse(e) {
    e.preventDefault();
    if (memberEl.value != "") {
        userInput = memberEl.value;
        //localStorage.setItem("memberNameStored", userInput)
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
