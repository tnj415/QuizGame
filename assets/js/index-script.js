$("#jumpto-board").on("click", function () {
localStorage.setItem("jump", true)
});

$("#play-game").on("click", function () {
    localStorage.setItem("jump", false)
    });