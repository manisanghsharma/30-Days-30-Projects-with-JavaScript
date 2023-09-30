const questions = [
    {
        question: "Which is larget animal in the world?",
        answers: [
        { text: "Shark", correct: false},
        { text: "Blue Whale", correct: true},
        { text: "Elephant", correct: false},
        { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
        { text: "Vatican City", correct: false},
        { text: "Bhutan", correct: true},
        { text: "Nepal", correct: false},
        { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
        { text: "Kalahari", correct: false},
        { text: "Gobi", correct: true},
        { text: "Sahara", correct: false},
        { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "What is the smallest continent in the world?",
        answers: [
        { text: "Asia", correct: false},
        { text: "Australia", correct: true},
        { text: "Arctic", correct: false},
        { text: "Africa", correct: false},
        ]
    }
]

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." +currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();



