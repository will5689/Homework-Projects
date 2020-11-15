const startButton = document.getElementById('start-btn')
const questionEl = document.getElementById('question')
const questionContainerEl = document.getElementById('question-container')
const answerBtnsEl = document.getElementById('answer-btns')
newconst timerEl = document.getElementById('timer');
points = 0
timer = 10

let shuffledQuestions, currentQuestionIndex = 0

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("started")
  startButton.classList.add("hide")
  timerEl.innerHTML = timer
  stopwatch = setInterval(() => {

    timer = timer - 1
    console.log("Time me", timer)
    timerEl.innerHTML = timer
    if (timer === 0) {
      clearInterval(stopwatch)
      setHighScore()
    };



  }, 1000)
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerEl.classList.remove("hide")
  setNextQuestion()


};

function setNextQuestion() {
  console.log(questions.length, currentQuestionIndex)
  if (questions.length === currentQuestionIndex) {
    return setHighScore()
  }
  // resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  console.log("next question ", shuffledQuestions, currentQuestionIndex)
  currentQuestionIndex++
};

function setHighScore() {
  console.log("its the end of the world ")

}

function showQuestion(question) {
  console.log('hi');
  questionEl.innerText = question.question
  answerBtnsEl.innerHTML = undefined
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn-grid')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', function () {
      console.log('Something new', answer)
      selectAnswer(answer)

    })
    console.log('IM answer', answerBtnsEl);
    answerBtnsEl.appendChild(button)


  });
}


// someVar = some_other_function();
// alert(someVar);
// someObj.addEventListener("click", function () {
//   some_function(someVar);
// }, false);

function resetState(question) {
  //   while (answerBtnsEl.firstchild) {
  //     answerBtnsEl.removeChild(answerBtnsEl.firstchild)
  //   }
};

function selectAnswer(ans) {
  if (ans.correct) {
    points = 10 + points
    const scoreEl = document.getElementById("score").innerHTML = points;

  }
  setNextQuestion()
  console.log("Im an a", ans.correct)
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
  },
  {
    question: "What does CSS Stand for?",
    answers: [{
        text: "nothing ",
        correct: true
      },
      {
        text: "Cascading Style Sheet",
        correct: false
      }
    ]
  },
  {
    question: " Text for Question",
    answers: [{
        text: "great Idea",
        correct: true
      },
      {
        text: "bad Idea",
        correct: false
      }
    ]

  }

];



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