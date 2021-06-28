var quizContainer = document.querySelector(".quiz-container");
var preScreen = document.querySelector(".pre-screen");
var beginGame = document.querySelector(".begin");

var opBtn = document.querySelectorAll("op-btn");

var askQ = document.querySelector("#question");
var opA = document.querySelector("#opA");
var opB = document.querySelector("#opB");
var opC = document.querySelector("#opC");
var opD = document.querySelector("#opD");

beginGame.addEventListener("click", beginQuiz)

opA.addEventListener("click", evaluateAns)
opB.addEventListener("click", evaluateAns)
opC.addEventListener("click", evaluateAns)
opD.addEventListener("click", evaluateAns)


function beginQuiz() {

    preScreen.setAttribute("class", "hide");
    quizContainer.setAttribute("class", "show");
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion();
    evaluateAns();
}

function showQuestion(question) {

    askQ.innerText = questions[0].question;

    opA.innerText = questions[0].options[0].text
    opB.innerText = questions[0].options[1].text
    opC.innerText = questions[0].options[2].text
    opD.innerText = questions[0].options[3].text

    opA.dataset = questions[0].options[0].correct
    opB.dataset = questions[0].options[1].correct
    opC.dataset = questions[0].options[2].correct
    opD.dataset = questions[0].options[3].correct

    console.log(questions[0].options[0].correct)
    console.log(questions[0].options[1].correct)
    console.log(questions[0].options[2].correct)
    console.log(questions[0].options[3].correct)

}

function evaluateAns(element) {

//     if (this.dataset === correct) {
//         opBtn.setAttribute("class", "incorrect-ans")
//         this.removeAttribute("class", "incorrect-ans")
//         this.setAttribute("class", "correct-ans")
//    }

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
        question: "What is the default value of Object variable?",
        options: [
            { text: "undefined", correct: false },
            { text: "0", correct: false },
            { text: "null", correct: true },
            { text: "not defined", correct: false },
        ]
    },

    {
        question: "What is the default value of Object variable?",
        options: [
            { text: "undefined", correct: false },
            { text: "0", correct: false },
            { text: "null", correct: true },
            { text: "not defined", correct: false },
        ]
    }
]