const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "Project Name",
    message: "What is your projects name?",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
  },
];
// function to write README file
function writeToFile(fileName, data) {}

// // function to initialize program
function init() {
  inquirer.prompt(questions);
}
// function call to initialize program
init();
