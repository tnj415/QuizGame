var quizContainer = document.querySelector(".quiz-container");
var preScreen = document.querySelector(".pre-screen");
var beginGame = document.querySelector(".begin");
var questionElement = document.querySelector('#question');
var answerBtnElement = document.querySelectorAll('.option-btn');



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
    questionElement.innerText = question.question[0];
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

function showQuestion(question) {
    //questionElement.innerText = question.question;

  console.log(questions) //should print the whole questions array

  console.log(questions[0]) //this should be the first element of that array... which is an object.

  console.log(questions[0].question) //see how we're working our way through the array's objects?

  var myVar = questions[0].options[1] //what do you think this will store? console.log(myVar) to find out!
}