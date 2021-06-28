var quizContainer = document.querySelector(".quiz-container");
var preScreen = document.querySelector(".pre-screen");
var beginGame = document.querySelector(".begin");
var questionElement = document.querySelector("#question");


var opA = document.querySelector("#opA");
var opB = document.querySelector("#opB");
var opC = document.querySelector("#opC");
var opD = document.querySelector("#opD");



beginGame.addEventListener("click", beginQuiz)

function beginQuiz() {

    preScreen.setAttribute("class", "hide");
    quizContainer.setAttribute("class", "show");
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion();
}


function showQuestion(question) {
    console.log(questions) //should print the whole questions array
    console.log(questions[0]) //this should be the first element of that array... which is an object.\
    console.log(questions[0].question) //see how we're working our way through the array's objects?
    
    questionElement.innerText = questions[0].question;


       console.log(questions[0].options[0].text)
    
       opA.innerText = questions[0].options[0].text

    // opA.innerText = questions[0].options.text;
    // opB.innerText = questions[0].options[1];
    // opC.innerText = questions[0].options[2];
    // opD.innerText = questions[0].options[3];
    
}

var questions = [
    {
        question: "What is 2 + 2",
        options: [
            { text: "2", correct: false },
            { text: "4", correct: true },
            { text: "6", correct: false },
            { text: "8", correct: false },
        ]
    }
]