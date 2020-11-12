const startButton = document.getElementById('start-btn')
const questionEl = document.getElementById('question')
const questionContainerEl = document.getElementById('question-container')
const answerBtnsEl = document.getElementById('answer-btns')

let shuffledQuestion, currentQuestionIndex

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
  resetState()
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

function resetState() {
  while (answerBtnsEl.firstchild) {
    answerBtnsEl.removeChild(answerBtnsEl.firstchild)
  }
}

function selectAnswer(e) {

};

const questions = [{
  question: "What does HTML mean",
  answers: [{
      text: 'Need another guess',
      correct: true
    },

    {
      text: "nothing",
      correct: false
    },
    {
      text: "The Wrong Answer",
      correct: false
    }

  ]
}]

// A: 'Nothing',
//   A: 'lucky guess',
//   A: 'Need another guess',

//   Q: " Does your computer need to be ON to work?",
//   1: "NO",
//   2: "Yes",
//   3: "I dont Know"
// };

questions[0] = "question".innerHTML = questions[0];
console.log(questions);




//