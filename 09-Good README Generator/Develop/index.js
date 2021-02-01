const inquirer = require("inquirer");
var fs = require("fs");
// array of questions for user

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
