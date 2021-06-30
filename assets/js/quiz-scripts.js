var quizContainer = document.querySelector(".quiz-container");
var preScreen = document.querySelector(".pre-screen");
var timedTestChoice = document.querySelector(".timed-test");
var untimedTestChoice = document.querySelector(".slow-test");
var results = document.querySelector("#results");
var nxtBtn = document.querySelector("#nxt-btn")
var opBtn = document.querySelectorAll(".op-btn");
var askQ = document.querySelector("#question");
var opA = document.querySelector("#opA");
var opB = document.querySelector("#opB");
var opC = document.querySelector("#opC");
var opD = document.querySelector("#opD");
var timerTitleEl = document.querySelector("#timer-title");
var timerEl = document.querySelector("#timer");
var scoreLog = localStorage.getItem("scoreLog");
var gameType = localStorage.getItem("gameType")
localStorage.removeItem("scoreLog");

var timedTest = false;
var timer = 6000;
var currQ = 0;
var correctLog = null;
var quizCompleted = false;
var enterOnce = true;


var questions = [
    {
        question: "1st Q?",
        options: [
            { text: "undefined", correct: false },
            { text: "0", correct: false },
            { text: "null", correct: true },
            { text: "not defined", correct: false },
        ]
    },

    {
        question: "2?",
        options: [
            { text: "Abstraction is a technique to define different methods of same type", correct: false },
            { text: "Abstraction is the ability of an object to take on many forms", correct: false },
            { text: "It refers to the ability to make class abstract in OOP", correct: true },
            { text: "None of the above", correct: false },
        ]
    },

    {
        question: "3?",
        options: [
            { text: "maybe", correct: false },
            { text: "maybe not", correct: false },
            { text: "maybe", correct: true },
            { text: "maybe not", correct: false },
        ]
    },

    {
        question: "LAST QUESTION?",
        options: [
            { text: "ert", correct: false },
            { text: "0ert", correct: false },
            { text: "ewrt", correct: true },
            { text: "not ewrt", correct: false },
        ]
    }
]

// [opA, opB, opC, opD].forEach((e) => {
//     e.addEventListener("click", evaluateAns)
// });
opA.addEventListener("click", evaluateAns);
opB.addEventListener("click", evaluateAns);
opC.addEventListener("click", evaluateAns);
opD.addEventListener("click", evaluateAns);

nxtBtn.addEventListener("click", function () {
    console.log("Entered event Listener")
    setNextQuestion();
});

timedTestChoice.addEventListener("click", function () {
    timedTest = true;
    //console.log(timedTest);
    beginQuiz();
});

untimedTestChoice.addEventListener("click", function () {
    timedTest = false;
    //console.log(timedTest);
    beginQuiz();
});

//results.addEventListener("click", showResults)
// beginGame.addEventListener("click", beginQuiz);

function timerFunction() {

    setInterval(function () {
        if (timer <= 0) {
            clearInterval(timer = 0);

            $(".op-btn").hover(function () {
                $(this).css("border-color", "white");
                $(this).css("cursor", "default")
            });

            // quizCompleted = true;
            results.classList.remove("hide");
            results.classList.add("show");
            opA.removeEventListener("click", evaluateAns);
            opB.removeEventListener("click", evaluateAns);
            opC.removeEventListener("click", evaluateAns);
            opD.removeEventListener("click", evaluateAns);
            results.addEventListener("click", function () {
                const score = { 0: "iwin" };
                const gametype = { true: "iwin" }
                localStorage.setItem("scoreLog", 0);
                localStorage.setItem("gameType", true);
                window.location = "scores.html";
            });
        }

        timerEl.innerHTML = (timer / 100).toFixed(2);
        if (!quizCompleted)
            --timer;
    }, 10)
}

function showResults() {

    console.log("correctLog = " + correctLog);
    // if (!localStorage.hasOwnProperty("scoreLog")) {
    if (!quizCompleted) {
        quizCompleted = true
        if (timedTest) {

            localStorage.setItem("scoreLog", timer);
        }
        else if (!timedTest) {
            localStorage.setItem("scoreLog", correctLog);
        }
        else alert("error in showResults() if statement")

        localStorage.setItem("gameType", timedTest);
    }

    // window.location = "scores.html";

}

function beginQuiz() {
    //console.log("currQ = " + currQ)
    preScreen.setAttribute("class", "hide");
    quizContainer.setAttribute("class", "show");

    if (timedTest === true) {
        timerTitleEl.removeAttribute("class", "hide");
        timerTitleEl.setAttribute("class", "show");
        timerEl.removeAttribute("class", "hide");
        timerEl.setAttribute("class", "show");
        timerFunction();
    }

    setNextQuestion(currQ);
}

function setNextQuestion() {

    if (currQ > 0 && timedTest === false) reset();
    if (currQ < questions.length) showQuestion();
}

function showQuestion(question) {

    //   console.log(questions) //should print the whole questions array
    //   console.log(questions[0]) //this should be the first element of that array... which is an object.
    //   console.log(questions[0].question) //see how we're working our way through the array's objects?
    //   console.log(questions[0].options[1]) //what do you think this will store? console.log(myVar) to find out!

    askQ.innerText = questions[currQ].question;

    opA.innerText = questions[currQ].options[0].text;
    opB.innerText = questions[currQ].options[1].text;
    opC.innerText = questions[currQ].options[2].text;
    opD.innerText = questions[currQ].options[3].text;

    opA.dataset.correct = questions[currQ].options[0].correct;
    opB.dataset.correct = questions[currQ].options[1].correct;
    opC.dataset.correct = questions[currQ].options[2].correct;
    opD.dataset.correct = questions[currQ].options[3].correct;

    // console.log(questions[0].options[0].correct)
    // console.log(questions[0].options[1].correct)
    // console.log(questions[0].options[2].correct)
    // console.log(questions[0].options[3].correct)
}

function evaluateAns(e) {
    //console.log(questions)
    var lastQ = false;
    if (currQ === questions.length - 1) lastQ = true;

    if (!timedTest && quizCompleted === false) {
        // console.log(e.target)
        // console.log(e.target.dataset.correct)
        nxtBtn.removeAttribute("class", "hide");
        nxtBtn.setAttribute("class", "show");

        if (e.target.dataset.correct === "true") {
            $("#root").css("background-color", "green")
            opBtn.forEach(el => {
                el.setAttribute("id", "incorrect-ans");
                el.removeEventListener("click", evaluateAns());
            });
            e.target.removeAttribute("id", "incorrect-ans");
            e.target.setAttribute("id", "correct-ans");
            e.target.removeEventListener("click", evaluateAns());
            correctLog++;

        }
        else {
            $("#root").css("background-color", "red")
            opBtn.forEach((el) => {
                if (el.dataset.correct === "false") {

                    el.setAttribute("id", "incorrect-ans");
                    el.removeEventListener("click", evaluateAns());
                }
                else {
                    el.setAttribute("id", "correct-ans");
                    el.removeEventListener("click", evaluateAns());
                }
            })
        }
    }
    else {
        if (e.target.dataset.correct === "false" && quizCompleted === false) {
            timer -= 1000;
        }
    }

    // if (!lastQ) {
    //     console.log("Entered line 222")
    //     if (timedTest) setNextQuestion();
    //     else {
    //         opA.removeEventListener("click", evaluateAns);
    //         opB.removeEventListener("click", evaluateAns);
    //         opC.removeEventListener("click", evaluateAns);
    //         opD.removeEventListener("click", evaluateAns);

    $(".op-btn").hover(function () {
        $(this).css("cursor", "default")
    });
    //}
    //}
    if (lastQ) {
        showResults()

        results.classList.remove("hide");
        results.classList.add("show");
        nxtBtn.classList.remove("show");
        nxtBtn.classList.add("hide");

        results.addEventListener("click", function () {

            window.location = "scores.html";
        })
    }
}

function reset() {
    // currQ++;
    if (nxtBtn.classList.contains("show")) {
        nxtBtn.removeAttribute("class", "show");
        nxtBtn.setAttribute("class", "hide");
    }
    // var i = 0;
    opBtn.forEach((e) => {
        // console.log(i + " el.id = " + e.id)
        if (e.id === "incorrect-ans")
            e.removeAttribute("id", "incorrect-ans");
        else if (e.id === "correct-ans")
            e.removeAttribute("id", "correct-ans");
        else alert("multiple tags dont have appropriate IDs line 236")
        // i++;
    })

    if (timerEl.classList.contains("incorrectT-effect"))
        timerEl.classList.remove("incorrectT-effect");
    else if (timerEl.classList.contains("correctT-effect"))
        timerEl.classList.remove("correctT-effect");
    else alert("Error in timer classlist loop line ")
}