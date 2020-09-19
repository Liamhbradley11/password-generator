// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// console.log(uppercase);
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split("");
// console.log(lowercase);
var specialChar = "~`!@#$%^&*()_-+=".split("");
// console.log(specialcharacters);
var numbersChar = "0123456789".split("");
// console.log(numbers);
var passwordLength = parseInt("");
// console.log(passwordLength);


function generatePassword () {
  var passwordLength = parseInt(prompt("Please choose between 8 and 128 characters!"));
  // alert if provided a number <8 and >128
    if(passwordLength < 8 || passwordLength > 128){
      alert("Invalid. Please try again.")
    }
    else {
    var uppercase = confirm("Do you want uppercase letters?");
    var lowercase = comnfirm("Do you want lowercase letters");
    var specialcharacters = confirm("Do you want special characters?");
    var numbers = confirm("Do you want numbers?");
    }
    if (uppercase === false && lowercase === false && specialcharacters === false && numbers === false){
      alert("choose at least one character!")
    }
  }
    


 //--> wont work here // while(uppercase === false && lowercase === false && specialcharacters === false && numbers === false)

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// prompt user to choose how many charcaters
  passwordText.value = password;




  // var passwordLength = prompt("Please choose between 8 and 128 characters!");
// alert if provided a number <8 and >128
  // if(passwordLength < 8 || passwordLength > 128){
  //   alert("Invalid. Please try again.")
  //   return;
  }
  // confirm each variable 
  // var uppercase = confirm("Do you want uppercase letters?");
  // var lowercase = comnfirm("Do you want lowercase letters");
  // var specialcharacters = confirm("Do you want special characters?");
  // var numbers = confirm("Do you want numbers?");





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
