// Assignment code here


var uppercase = window.prompt("Would you like uppercase letters?")
    


var lowercase = window.prompt("Would you like lowercase letters?")
var numbers = window.prompt("Would you like numbers?")
var symbols = window.prompt("Would you like symbols?")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);