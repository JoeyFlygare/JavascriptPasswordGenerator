///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's


var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmLowercase;
var confirmUppercase;

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generateOptions (){
  var confirmLength = (prompt("Choose a Password length between 8 and 128"));

  while(confirmLength < 8 || confirmLength > 128) {
    alert("Password must be 8 to 128 characters!");
    var confirmLength = (prompt("Choose a Password length between 8 and 128"));
}
var confirmSpecialCharacter = confirm("Would you like to add special characters?");
var confirmNumericCharacter = confirm("Would you like to add numbers? ");
var confirmLowercase = confirm("Would you like to add lowercase letters?");
var confirmUppercase = confirm("Would you like to add uppercase letters?");

if(confirmSpecialCharacter === false && confirmNumericCharacter === false && confirmLowercase === false && confirmUppercase === false) {
  alert("You must select one parameter");
  return;
  }

  var savedOptions = {
    confirmLength: confirmLength, 
    confirmSpecialCharacter: confirmSpecialCharacter,
    confirmNumericCharacter: confirmNumericCharacter,
    confirmLowercase: confirmLowercase,
    confirmUppercase: confirmUppercase
  }
  return savedOptions;
}
function generatePassword() {
  var options = generateOptions();
  // var confirmLength = (prompt("Choose a Password length between 8 and 128"));

  // while(confirmLength < 8 || confirmLength > 128) {
  //   alert("Password must be 8 to 128 characters!");
  //   var confirmLength = (prompt("Choose a Password length between 8 and 128"));
  // }

  
    // var confirmSpecialCharacter = confirm("Would you like to add special characters?");
    // var confirmNumericCharacter = confirm("Would you like to add numbers? ");
    // var confirmLowercase = confirm("Would you like to add lowercase letters?");
    // var confirmUppercase = confirm("Would you like to add uppercase letters?");

      // if(confirmSpecialCharacter === false && confirmNumericCharacter === false && confirmLowercase === false && confirmUppercase === false) {
      //   alert("You must select one parameter");
      //   return;
      // }

      var passwordCharacters = []

      var generatedPassword = []

      if (options.confirmSpecialCharacter === true) {
        passwordCharacters = passwordCharacters.concat(specialChar)
        console.log("specialCharctersR"+passwordCharacters);
      }

      if (options.confirmNumericCharacter === true) {
        passwordCharacters = passwordCharacters.concat(number)
      }

      if (options.confirmLowercase === true) {
        passwordCharacters = passwordCharacters.concat(alphaLower)
      }

      if (options.confirmUppercase === true) {
        passwordCharacters = passwordCharacters.concat(alphaUpper)
      }

        console.log(passwordCharacters)

        var randomPassword = ""


 for (var i = 0; i < options.confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log("randomPassword" + randomPassword)
        // generatedPassword.push(randomPassword);
      }
      return randomPassword;
}
///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("writePassword")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//////////////////////////////////////////////////////////////////////
