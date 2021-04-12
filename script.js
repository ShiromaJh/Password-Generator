// Assignment code here

function RandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
}
// console.log(RandomLower());

function RandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 65);
}
// console.log(RandomUpper());

function RandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
}
// console.log(RandomNumber());

function RandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>,.';
    return symbols[Math.floor(Math.random() * symbols.length)];

}
    console.log(RandomSymbol());




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





