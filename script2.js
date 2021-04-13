// Assignment code here

var numbersString = ["1234567890"];
var lowercaseString = ["abcdefghijklmnopqrstuvwxyz"];
var uppercaseString = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var symbolsString = ["!@#$%^&*()"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {



var uppercase = window.confirm("Would you like uppercase letters?");
//if true push to another string

var lowercase = window.confirm("Would you like lowercase letters?");
//if true push to another string

var numbers = window.confirm("Would you like numbers?");
//if true push to another string

var symbols = window.confirm("Would you like symbols?");
//if true push to another string


var passLength = window.prompt("How many characters would you like your password to be?");




//Check Password Length
//What if less than 8
//What if more then 128
//What if it is blank
//What if not a #   (not a # js)


//Create an empty array
//us if statements to push to an array || PUSH
//find way to join strings in array || JOIN


//create seperate function using for loop , random # gen on string length 

//in for loop , push grabbed character into empty array for password




  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);