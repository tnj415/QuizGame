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
var resultEl = document.querySelector(".result-timed")
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
        question: "HTML coding language is used to create:",
        options: [
            { text: "web pages", correct: true },
            { text: "Food", correct: false },
            { text: "Files for computers", correct: false },
            { text: "Pencils", correct: false },
        ]
    },

    {
        question: "Javascript",
        options: [
            { text: "Is a password used at coffee shops", correct: false },
            { text: "A way to order coffee", correct: false },
            { text: "Is a coding language", correct: true },
            { text: "None of the above", correct: false },
        ]
    },

    {
        question: "Coding is used for ",
        options: [
            { text: "Furniture", correct: false },
            { text: "Hardwood", correct: false },
            { text: "Computers", correct: true },
            { text: "None of the above", correct: false },
        ]
    },

    {
        question: "People who write code are",
        options: [
            { text: "Computer Programmers", correct: true },
            { text: "Alphabet", correct: false },
            { text: "Foodies", correct: false },
            { text: "Oranges", correct: false },
        ]
    }
]

timedTestChoice.addEventListener("click", function () {
    timedTest = true;
    beginQuiz();
});

untimedTestChoice.addEventListener("click", function () {
    timedTest = false;
    beginQuiz();
});

function nxtBtnFunction () {

        console.log("Entered event Listener")
        console.log("1currQ = " + currQ);
        currQ++;
        console.log("2currQ = " + currQ);
        setNextQuestion(currQ);
    
}

function timerFunction() {

    setInterval(function () {
        if (timer <= 0) {
            clearInterval(timer = 0);

            $(".op-btn").hover(function () {
                $(this).css("border-color", "white");
                $(this).css("cursor", "default")
            });

            results.classList.remove("hide");
            results.classList.add("show");
            opA.removeEventListener("click", evaluateAns);
            opB.removeEventListener("click", evaluateAns);
            opC.removeEventListener("click", evaluateAns);
            opD.removeEventListener("click", evaluateAns);
            results.addEventListener("click", function () {
    
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

setInterval(function () {

    resultEl.classList.add("hide")

},2000)



function showResults() {


    console.log("correctLog = " + correctLog);
    if (!quizCompleted) {
        quizCompleted = true

        opA.removeEventListener("click", evaluateAns);
        opB.removeEventListener("click", evaluateAns);
        opC.removeEventListener("click", evaluateAns);
        opD.removeEventListener("click", evaluateAns);
    
        $(".op-btn").hover(function () {
            $(this).css("border-color", "white");
            $(this).css("cursor", "default")
        });
    
        if (timedTest) {

            localStorage.setItem("scoreLog", timer);
        }
        else if (!timedTest) {
            localStorage.setItem("scoreLog", correctLog);
        }
        else alert("error in showResults() if statement")

        localStorage.setItem("gameType", timedTest);
    }
}

function beginQuiz() {
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
    if (currQ < questions.length) showQuestion(currQ);

    opA.addEventListener("click", evaluateAns);
    opB.addEventListener("click", evaluateAns);
    opC.addEventListener("click", evaluateAns);
    opD.addEventListener("click", evaluateAns);
    nxtBtn.removeEventListener("click", nxtBtnFunction);
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
    nxtBtn.removeEventListener("click", function(){});
    var lastQ = false;
    console.log("questions.length = " + questions.length)
    console.log("currQ = " + currQ)
    if (currQ === questions.length - 1) lastQ = true;

    if (!timedTest && quizCompleted === false) {
        // console.log(e.target)
        // console.log(e.target.dataset.correct)
        nxtBtn.removeAttribute("class", "hide");
        nxtBtn.setAttribute("class", "show");

        if (e.target.dataset.correct === "true") {
            // $("#root").css("background-color", "green")
            opBtn.forEach(el => {
                el.setAttribute("id", "incorrect-ans");
                el.removeEventListener("click", evaluateAns);
            });
            e.target.removeAttribute("id", "incorrect-ans");
            e.target.setAttribute("id", "correct-ans");
            e.target.removeEventListener("click", evaluateAns);
            console.log("aC log = " + correctLog)
            correctLog++;
            console.log("bC log = " + correctLog)

        }
        else {
            //$("#root").css("background-color", "red")
            opBtn.forEach((el) => {
                if (el.dataset.correct === "false") {

                    el.setAttribute("id", "incorrect-ans");
                    el.removeEventListener("click", evaluateAns);
                }
                else {
                    el.setAttribute("id", "correct-ans");
                    el.removeEventListener("click", evaluateAns);
                }
            })
        }
    }
    else {
        if (e.target.dataset.correct === "false" && quizCompleted === false) {
            timer -= 1000;
            currQ++;
            resultEl.classList.remove("hide")
            resultEl.classList.add("show")
            resultEl.innerText = "INCORRECT"
        }
        else {
             currQ++;
             resultEl.classList.remove("hide")
             resultEl.classList.add("show")
             resultEl.innerText = "CORRECT"
        }
    }

    if (!lastQ) {
        if (timedTest) setNextQuestion();
        else {
            opA.removeEventListener("click", evaluateAns);
            opB.removeEventListener("click", evaluateAns);
            opC.removeEventListener("click", evaluateAns);
            opD.removeEventListener("click", evaluateAns);
         
         nxtBtn.addEventListener("click", nxtBtnFunction);
        }
    }
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
    if (nxtBtn.classList.contains("show")) {
        nxtBtn.removeAttribute("class", "show");
        nxtBtn.setAttribute("class", "hide");
    }
    opBtn.forEach((e, i) => {
        console.log(i + " el.id = " + e.id)
        if (document.querySelector("#incorrect-ans"))
            e.removeAttribute("id", "incorrect-ans");
        else if (document.querySelector("#correct-ans"))
            e.removeAttribute("id", "correct-ans");
    })
}