const startButton = document.getElementById('start-btn')
const questionEl = document.getElementById('question')
const questionContainerEl = document.getElementById('question-container')
const answerBtnsEl = document.getElementById('answer-btns')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("started")
  startButton.classList.add("hide")

  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerEl.classList.remove("hide")
  setNextQuestion()


};

function setNextQuestion() {
  // resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])


};

function showQuestion(question) {
  questionEl.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerBtnsEl.appendChild(button)


  });
}

// function resetState() {
//   while (answerBtnsEl.firstchild) {
//     answerBtnsEl.removeChild(answerBtnsEl.firstchild)
//   }
// };

function selectAnswer(e) {

};

const questions = [{
  question: "What does HTML stand for?",
  answers: [{
      text: "Hyper Text Markup Language",
      correct: true
    },

    {
      text: "Hyperlinks and text markup Languages",
      correct: false
    },
    {
      text: "Home tool markup Languages",
      correct: false
    }

  ]
}];



// questions[0] = "question".innerHTML = questions[0];
// console.log(questions);





//   question: "What does CSS Stand for?",
//   choiceA: "NOTHING ",
//   choiceB: "Cascading Style Sheet",
//   choiceC: " Undan Dictionary ",
//   correct: "Cascading Style Sheet",
// },

// {
//   question: " Text for Question",
//   choiceA: "the first question ",
//   choiceB: "the second question",
//   choiceC: "the 3rd question",
//   correct: "",
// },
// ];