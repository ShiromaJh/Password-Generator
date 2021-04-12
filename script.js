// Assignment code here

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "123456789";
var symbol = "!@#$%^&*(){}[]<>,./?";



function generatePassword() {
    var allowed = '';
    if (document.generator.upper.checked) {
        allowed += upper;
    }
    if (document.generator.lower.checked) {
        allowed += lower;
    }
    if (document.generator.number.checked) {
        allowed += number;
    }
    if (document.generator.symbol.checked) {
        allowed += symbol;
    }

    var password = '';
    var length = parsInt(document.generator.length.value);
    for(var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * allowed.length);
        password += allowed.random;
    }
    return password;
}






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