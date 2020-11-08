// Assignment Code
// need to propt user; Done
// collect data: working on it
// make a password
//present the password

var chosenChars = [];
var generateBtn = document.querySelector("#generate");
var password = ""

// Write password to the #password input
function generatePassword(writePassword) {
  console.log("I have lenght", writePassword);
  if (writePassword== undefined) {
    alert("will it does not work yet");
    
  }
}
       
function writePassword() {
  var userList = [];
  // password Length
  var passWordLength = prompt("Characters must beteewn 8 - 128 ");
  console.log(passWordLength);

  //var characterTypes= prompt("lowercase, uppercase, numeric ");
  var smallLetters = confirm(" Press OK for lowercase ");
  if (smallLetters == true) {
    console.log('I am lowercase')
    var userList = userList.concat(lowerCase);
    
  }
  
  // button for larger letters confirmation
  var largeLetters = confirm(" Press OK for Uppercase");
  if (largeLetters == true) {
    var userList = userList.concat(upperCase);
    console.log (userList);
  }

  // button for numbers confirmation
  var numbers = confirm(" Press OK for Numeric");
  if (numbers == true) {
    console.log('number');
    var userList = userList.concat(numeric);
    
  } 
  var character = confirm("Press Ok for Character type");
  if (character == true) {
    var userList = userList.concat(specialCharacter);
  alert("Thank You");
  }
    
  
    
   

  for (var i = 0; i < passWordLength; i++) {
    var randomNum = Math.random() * userList.length;
    var randomNumFloored = Math.floor(randomNum);
    console.log("i am  ", userList[randomNumFloored]);
    password = password + userList[randomNumFloored]
  }
  console.log(password);
  //var  userList= generatePassword (passWordLength, smallLetters, largeLetters, numbers, character);
  var passwordText = document.querySelector("#password");
     passwordText.value = password;
}
 //function displayMessage(type, message) {
   //msgDiv.textContent = message;
  // msgDiv.setAttribute("password", type);

  
  
   

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerCase =
  ["a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
console.log(numeric);



 


generateBtn.addEventListener("click", writePassword);
function MyFunction() {
  document.getElementById(password).value =writePassword ;

}