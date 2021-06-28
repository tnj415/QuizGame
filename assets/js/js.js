var quizContainer = document.querySelector(".quiz-container")
var preScreen = document.querySelector(".pre-screen")
var beginGame = document.querySelector(".begin")
var nxtBtn = document.querySelector(".nxt-btn")
var results = document.querySelector(".results")

var opBtn = document.querySelectorAll(".op-btn")

var askQ = document.querySelector("#question")
var opA = document.querySelector("#opA")
var opB = document.querySelector("#opB")
var opC = document.querySelector("#opC")
var opD = document.querySelector("#opD")

beginGame.addEventListener("click", beginQuiz)

opA.addEventListener("click", evaluateAns)
opB.addEventListener("click", evaluateAns)
opC.addEventListener("click", evaluateAns)
opD.addEventListener("click", evaluateAns)

nxtBtn.addEventListener("click", setNextQuestion)

var currQ = 0;

function beginQuiz() {

    preScreen.setAttribute("class", "hide")
    quizContainer.setAttribute("class", "show")
    setNextQuestion()
}

function setNextQuestion() {

   if (currQ > 0) reset()
    
    showQuestion(currQ)
    //evaluateAns();
}

function showQuestion(question) {

    //   console.log(questions) //should print the whole questions array
    //   console.log(questions[0]) //this should be the first element of that array... which is an object.
    //   console.log(questions[0].question) //see how we're working our way through the array's objects?
    //   console.log(questions[0].options[1]) //what do you think this will store? console.log(myVar) to find out!

    askQ.innerText = questions[currQ].question;

    opA.innerText = questions[currQ].options[0].text
    opB.innerText = questions[currQ].options[1].text
    opC.innerText = questions[currQ].options[2].text
    opD.innerText = questions[currQ].options[3].text

    opA.dataset.correct = questions[currQ].options[0].correct
    opB.dataset.correct = questions[currQ].options[1].correct
    opC.dataset.correct = questions[currQ].options[2].correct
    opD.dataset.correct = questions[currQ].options[3].correct

    // console.log(questions[0].options[0].correct)
    // console.log(questions[0].options[1].correct)
    // console.log(questions[0].options[2].correct)
    // console.log(questions[0].options[3].correct)

}

function evaluateAns(e) {

    // console.log(e.target)
    // console.log(e.target.dataset.correct)

    if (e.target.dataset.correct === "true") {
        opBtn.forEach(el => el.setAttribute("id", "incorrect-ans"))
        e.target.removeAttribute("id", "incorrect-ans")
        e.target.setAttribute("id", "correct-ans")
    }
    else {
        opBtn.forEach((el) => {
            if (el.dataset.correct === "false")
                el.setAttribute("id", "incorrect-ans")
            else
                el.setAttribute("id", "correct-ans")
        })
    }

    currQ++

    if (currQ < questions.length) {
        nxtBtn.classList.remove("hide")
        nxtBtn.classList.add("show")
    }
    else {
        results.classList.remove("hide")
        results.classList.add("show")
    }

    console.log(nxtBtn)
    nxtBtn.addEventListener("click", setNextQuestion)
}

function reset() {



    opBtn.forEach((el) => {

        if (document.querySelector("#incorrect-ans"))
        el.removeAttribute("id", "incorrect-ans")

        else if (document.querySelector("#correct-ans"))
        el.removeAttribute("id", "incorrect-ans")
        else alert("something bad happened here")
    })

    if (nxtBtn.classList.contains("show")) {
        nxtBtn.classList.remove("show")
        nxtBtn.classList.add("hide")
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