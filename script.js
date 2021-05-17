// Assignment Code
var generateBtn = document.querySelector("#generate");
// Created an array for Speacial Characters
var arraySpecial = ["!", "@", "#", "$", "*", "&", "?"];
// Created an array for lower Case words
var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Created an array for Upper Case words
var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Created an array for Numbers
var arrayNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Starts alert at the begining of page load
alert("It's time to make a password. Don't worry I will do most of the work.");

function generatePassword() {
  // Sets up function to ask for length of password
  var passWordLength = prompt("How long would you like the password?");
  var length = parseInt(passWordLength);
  
  // Making sure there is a number and not a string
   
  if(length === NaN){
     alert("Only numbers are permitted!"); 
     return;
   }
  // Sets parameters for the max and min amount of characters
  if (length < 8) {
    alert("Password needs to be aleast 8 characters long. Please restart page.");
    return;
  }
  if (length > 128) {
    alert("Brah, thats way to many characters. Imma restart.");
    return;
  }
  // Using confirm to ask what parameter for the password the user would like

  var wantSpChar = confirm("Do you want your password to have special characters?");

  var wantLwCase = confirm("Do you want Lower Case letters?");

  var wantUpCase = confirm("Do you want Upper Case letters?");

  var wantNum = confirm("Do you want Numbers?");

  // If nothing is picked this message will post and restart

  if (wantSpChar === false && wantLwCase === false && wantUpCase === false && wantNum === false) {
    alert("You have to pick one... Lets start from the begining..");
    return;
  }

  return passwordGenorator();
  
// Function is going through the choices and making an array to draw from
  function passwordGenorator() {
    var array = [];
    if (wantSpChar) {
      array = array.concat(arraySpecial);
    }

    if (wantLwCase) {
      array = array.concat(arrayLower);
    }

    if (wantUpCase) {
      array = array.concat(arrayUpper);
    }

    if (wantNum) {
      array = array.concat(arrayNumber);
    }
    var finish = "";

    for (var index = 0; index <= length; index++) {
      finish += randomizer(array);

    }
    console.log(finish);
    return finish;
  }
}
// This function will randomly pick out of an array
function randomizer(array) {
  var x = Math.floor(Math.random() * array.length);
  return array[x];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

