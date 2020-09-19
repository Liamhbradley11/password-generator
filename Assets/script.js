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
  // the parseInt function converts its first argument to a string, parses that string
  var passwordLength = parseInt(prompt("Please choose between 8 and 128 characters!"));
  // alert if provided a number <8 and >128 // then returns an integer or NaN . If not NaN , the return value will be the integer that is the first argument taken as a number in the specified radix
    while(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
      if (passwordLength < 8) {
        passwordLength = parseInt(
          alert("Invalid. Please try again.")
        );
      }
    else if (passwordLength > 128) {
      passwordLength = parseInt(
        alert("Invalid. Please try again."));
  }
    else {
      passwordLength = parseInt(
        alert("Invalid. Please try again.")
      )
    }
    }
      var uppercase = confirm("Do you want uppercase letters?");
      var lowercase = confirm("Do you want lowercase letters");
      var specialcharacters = confirm("Do you want special characters?");
      var numbers = confirm("Do you want numbers?");
    
      while (uppercase === false && lowercase === false && specialcharacters === false && numbers === false){
        alert("Please select at least one character."); 
        var uppercase = confirm("Do you want uppercase letters?");
        var lowercase = confirm("Do you want lowercase letters");
        var specialcharacters = confirm("Do you want special characters?");
        var numbers = confirm("Do you want numbers?");  
      }

// empty variables
      var passwordValue = [];
      var passwordRandom = "";



// The concat() method is used to join two or more arrays
      if (uppercase) {
        passwordValue = passwordValue.concat(uppercaseChar);
      }
      if (lowercase) {
        passwordValue = passwordValue.concat(lowercaseChar);
      }
      if (specialcharacters) {
        passwordValue = passwordValue.concat(specialChar);
      }
      if (numbers) {
        passwordValue = passwordValue.concat(numbersChar);
        }

      for (var i = 0; i <passwordLength; i++){       
         passwordRandom = passwordRandom + passwordValue[Math.floor(Math.random() * passwordValue.passwordLength)]
      }
      return passwordRandom;
    }
 
      
  

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// prompt user to choose how many charcaters
  passwordText.value = password;
}

 // passwordRandom = passwordRandom + passwordValue[
 //   Math.floor(Math.random() * passwordValue.passwordLength)


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
