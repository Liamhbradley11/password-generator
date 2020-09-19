// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(uppercase);
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(lowercase);
var specialcharacters = "~`!@#$%^&*()_-+=".split("");
console.log(specialcharacters);
var numbers = "0123456789".split("");
console.log(numbers);
var passwordLength = 0;
console.log(passwordLength);

function generatePassword () {
  // var passwordLength = prompt("Please choose between 8 and 128 characters!")


}



// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Please choose between 8 and 128 characters!");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if(passwordLength < 8 || passwordLength > 128){
    alert("Invalid. Please try again.")
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
