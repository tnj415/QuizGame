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
    questionElement.innerText = question.question;
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