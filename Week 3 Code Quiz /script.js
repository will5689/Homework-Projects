const startButton = document.getElementById('start-btn');


startButton.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("started")

};

function setNextQuestion() {

};

function selectAnswer() {

};

var questions1 = {
  Q: "What does HTML mean",
  1: 'Nothing',
  2: 'lucky guess',
  3: 'Need another guess',

  Q: " Does your computer need to be ON to work?",
  1: "NO",
  2: "Yes",
  3: "I dont Know"
};

questions1[0] = "Question"
document.getElementById('question').innerHTML = questions1[0];
console.log(questions1);




//