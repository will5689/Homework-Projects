const fs = require("fs");
const inquirer = require("inquirer");
//const until = require("until");

const generatorMarkdown = require("./Develop/utils/generateMarkdown");
//console.log("hello");
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
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log(sucsess);
    }
  });
}

// // function to initialize program
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("ReadME.md", generatorMarkdown(data));
    console.log(data);
  });
}
init();
