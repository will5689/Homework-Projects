var currentQuestionIndex = 0;
var selections = [];
let questions = [{
    question: "what does HTML stand for?",
    answer: [
      "Hyper Text Markup Language",
      "Hyperlinks and text markup Languages",
      "Home tool markup Languages",
    ],
    choiceB: "Hyperlinks and text markup Languages",
    choiceC: "Home tool markup Languages",
    correct: "Hyper Text Markup Language",
  },
  {
    question: "What does CSS Stand for?",
    choiceA: "NOTHING ",
    choiceB: "Cascading Style Sheet",
    choiceC: " Undan Dictionary ",
    correct: "Cascading Style Sheet",
  },

  {
    question: " Text for Question",
    choiceA: "the first question ",
    choiceB: "the second question",
    choiceC: "the 3rd question",
    correct: "",
  },
];

console.log(questions[currentQuestionIndex].question);

const startButton = document.getElementById("start");
const questionBoxEL = document.getElementById("questionBox");
const questionEL = document.getElementById("question");
//var setTime = docment.getElementById('time');
const card1El = document.getElementById("cardA");
const card2El = document.getElementById("cardB");
const card3El = document.getElementById("cardC");
const submitEL = document.querySelectorAll(".submit");

// can i have more than one thing hiding in the event listner??
// hide start button
startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  questionBoxEL.style.visibility = "visible";
});

// submit Listener for question text
questionEL.addEventListener("click", function () {
  submitEl.style.display = "";
  displayQuestions();
});

// Question Display
function showQuestions() {
  questionBoxEL.innerText = questions[currentQuestionIndex].question;
  question.answer.foreach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendchild(button);
  });
}

console.log(questions[currentQuestionIndex].question);

// show answers in the box
card1El.textContent = "AnswerA";
card2El.textContent = "AnswerB";
card3El.textContent = " AnswerC";

// time need to start
// Timer
var secondLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till game over.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
console.log(setTime);
// check it answer is right or wrong
// if answer is right need to add it score