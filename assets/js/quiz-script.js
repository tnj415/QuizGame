var quizContainer = document.querySelector(".quiz-container");
var preScreen = document.querySelector(".pre-screen");
var timedTestChoice = document.querySelector(".timed-test");
var slowTestChoice = document.querySelector(".slow-test");
// var beginGame = document.querySelector(".begin");
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
window.localStorage.clear();


opA.addEventListener("click", evaluateAns);
opB.addEventListener("click", evaluateAns);
opC.addEventListener("click", evaluateAns);
opD.addEventListener("click", evaluateAns);

timedTestChoice.addEventListener("click", function () {
    timedTest = true;
    //console.log(timedTest);
    beginQuiz()
})

slowTestChoice.addEventListener("click", function () {
    timedTest = false;
    //console.log(timedTest);
    beginQuiz()
})

//results.addEventListener("click", showResults)

// beginGame.addEventListener("click", beginQuiz);

var timedTest = false;
var timer = 1000;
var currQ = 0;
var correctLog = 0;
var quizCompleted = false;

function timerFunction() {

    setInterval(function () {
        if (timer <= 0) {
            clearInterval(timer = 0);

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
    if (!localStorage.hasOwnProperty("scoreLog")) {
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
    if (timedTest === true) {
        timerTitleEl.removeAttribute("class", "hide")
        timerTitleEl.setAttribute("class", "show")
        timerEl.removeAttribute("class", "hide")
        timerEl.setAttribute("class", "show")
        timerFunction();
    }
    preScreen.setAttribute("class", "hide");
    quizContainer.setAttribute("class", "show");


    setNextQuestion(currQ);
}

function setNextQuestion() {

    if (currQ > 0 && timedTest === false) reset();

    //might need questions.length - 1
    //and have a different condition for last question
    // if (timedTest === true && currQ < questions.length) {showQuestion(currQ);}
    if (currQ < questions.length) { showQuestion(currQ); }
    //else { showResults() }

    opA.addEventListener("click", evaluateAns);
    opB.addEventListener("click", evaluateAns);
    opC.addEventListener("click", evaluateAns);
    opD.addEventListener("click", evaluateAns);

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

    var lastQ = false;

    if (currQ === questions.length - 1) lastQ = true;

    if (!timedTest) {
        // console.log(e.target)
        // console.log(e.target.dataset.correct)
        nxtBtn.removeAttribute("class", "hide");
        nxtBtn.setAttribute("class", "show");

        if (e.target.dataset.correct === "true") {
            opBtn.forEach(el => el.setAttribute("id", "incorrect-ans"));
            e.target.removeAttribute("id", "incorrect-ans");
            e.target.setAttribute("id", "correct-ans");
            correctLog++;
            console.log("clog = " + correctLog);
        }
        else {

            opBtn.forEach((el) => {
                if (el.dataset.correct === "false")
                    el.setAttribute("id", "incorrect-ans");
                else
                    el.setAttribute("id", "correct-ans");
            })
        }

    }
    else {
        if (!lastQ && e.target.dataset.correct === "true") { }

        else if (!lastQ && e.target.dataset.correct === "false") {
            timerEl.classList.add("incorrectT-effect")
            timer -= 10;
            timerEl.innerHTML = -10;

            //only happens for a split second
            if (timerEl.classList.contains("incorrectT-effect")) {
                timerEl.classList.remove("incorrectT-effect")
                timerEl.classList.add("correctT-effects")
            }
        }
        // else if (lastQ) {

        //     showResults();

        // }
    }

    //might need different condition if last question

    if (!lastQ) {
        currQ++;
        if (timedTest) setNextQuestion();
        else nxtBtn.addEventListener("click", setNextQuestion);
    }
    else {
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

    if (nxtBtn.classList.contains("show")) {
        nxtBtn.removeAttribute("class", "show");
        nxtBtn.setAttribute("class", "hide");
    }
    opBtn.forEach((el) => {

        if (document.querySelector("#incorrect-ans"))
            el.removeAttribute("id", "incorrect-ans");

        else if (document.querySelector("#correct-ans"))
            el.removeAttribute("id", "incorrect-ans");
        else alert("something bad happened here")
    })

    if (timerEl.classList.contains("incorrectT-effect")) {
        timerEl.classList.remove("incorrectT-effect");
    }


}

var questions = [
    {
        question: "What is the default value of Object variable?",
        options: [
            { text: "undefined", correct: false },
            { text: "0", correct: false },
            { text: "null", correct: true },
            { text: "not defined", correct: false },
        ]
    },

    {
        question: "What is Abstraction?",
        options: [
            { text: "Abstraction is a technique to define different methods of same type", correct: false },
            { text: "Abstraction is the ability of an object to take on many forms", correct: false },
            { text: "It refers to the ability to make class abstract in OOP", correct: true },
            { text: "None of the above", correct: false },
        ]
    },

    {
        question: "do you think you can guess this one?",
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