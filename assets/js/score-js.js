var scoreInput = document.querySelector("#user-score");
var nameInput = document.querySelector("#name");

function submitScore(e) {

    e.preventDefault();

}

function showScore () {
    var scoreLog = window.getItem("scoreLog");
    scoreInput.textContent = scoreLog;
}