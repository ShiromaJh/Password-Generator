var lower = ["abcdefghijklmnopqrstuvwxyz"];
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["1234567890"];
var special = ["!@#$%^&*()+-,./"];

function PasswordPrompts() {
  var length = parseInt(prompt("How many characters will your password be?"));
  if (isNaN(length) === true) {
    alert("Enter a number");
    return;
  }
  if (length < 8) {
    alert("Password must be between 8 and 128 characters");
    return;
  }

  if (length > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }
  var uppercase = confirm("do you want uppercase letters?");
  var lowercase = confirm("Do you want lowercase letters?");
  var number = confirm("Do you want numbers?");
  var specialChar = confirm("Do you want special characters?");

  var passArr = [];

  if (number === true) {
    passArr.push(numbers);
  }
  if (lowercase === true) {
    passArr.push(lower);
  }
  if (uppercase === true) {
    passArr.push(upper);
  }
  if (specialChar === true) {
    passArr.push(special);
  }

  var stringLength = passArr.toString();
  function generatePassword(length) {
    result = "";
    var charactersLength = stringLength.length;
    for (var i = 0; i < length; i++) {
      var randPos = Math.floor(Math.random() * charactersLength);
      var result = stringLength.charAt(randPos);
      createdArr.push(result);
    }
  }
  createdArr = [];
  generatePassword(length);

  var completedPassword = createdArr.join("");
  alert("Here is your generated password: " + completedPassword);
}

var genPass = function () {
  PasswordPrompts();
  for (var i = 1; i <= passwordLength; i++) {
    createdPassword +=
      passwordType.chosen[
        Math.floor(Math.random() * passwordType.chosen.length)
      ];
  }
  return createdPassword;
};

var generateBtn = document.querySelector("#generate");

function Pass() {
  var pa = genPass();
  var paString = document.querySelector("#password");
  paString.value = pa;
}
generateBtn.addEventListener("click", Pass);
