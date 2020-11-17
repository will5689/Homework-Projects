const startButton = document.getElementById('start-btn')
const questionEl = document.getElementById('question')
const questionContainerEl = document.getElementById('question-container')
const answerBtnsEl = document.getElementById('answer-btns')
const timerEl = document.getElementById('timer');
const setHighScoreEl = document.getElementById("high-scores-list")
//const addIntials = document.getElementById("add-initials");
//const setHighScore = document.querySelector("high-scores-list");
//const highscore = localStorage.setItem('"high-scores-list"');
points = 0
timer = 50
highScore = 0

let shuffledQuestions, currentQuestionIndex = 0

startButton.addEventListener("click", startQuiz);
//addIntials.addEventListener("click", )



function startQuiz() {
  console.log("started")
  startButton.classList.add("hide")
  timerEl.innerHTML = timer
  stopwatch = setInterval(() => {

    timer = timer - 1
    console.log("Time me", timer)
    timerEl.innerHTML = timer
    console.log(currentQuestionIndex, questions.length, "lokk at me ")
    if (timer === 0 || currentQuestionIndex === questions.length) {
      clearInterval(stopwatch)
      setHighScore()
      console.log("im the high score", highScore)
    }
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
      
    
    console.log(highScore)
  
  }



  // resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  console.log("next question ", shuffledQuestions, currentQuestionIndex)
  currentQuestionIndex++
};

function setHighScore() {
  console.log("its the end of the Game")
  setHighScoreEl.innerText = points
  questionContainerEl.classList.add("hide")


  if (points > highScore) {
    highScore = points
  }

  console.log(highScore, "heres a new line ")
};


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
  if (ans.correct === true) {
    points = points + 10
    console.log("im adding points")
    const scoreEl = document.getElementById("score").innerHTML = points;
  } else {
    timer = timer - 10
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