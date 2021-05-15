// Assignment Code
var generateBtn = document.querySelector("#generate");
// Created an array for Speacial Characters
var arraySpecial = ["!", "@", "#", "$", "*", "&", "?"];
// Created an array for lower Case words
var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s","t","u","v","w","x","y","z"];
// Created an array for Upper Case words
var arrayUpper = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "S","T", "U","V","W","X","Y","Z"];
// Created an array for Numbers
var arrayNumber = ["1","2","3","4","5","6","7","8","9","0"];

// Starts alert at the begining of page load
alert("It's time to make a password. Don't worry I will do most of the work.");

function wholeThang(){
  // Sets up function to ask for length of password
  var passWordLength = prompt("How long would you like the password?" );
  // Sets parameters for the max and min amount of characters
  if(passWordLength > 8){
    alert("Password needs to be aleast 8 characters long. Please restart page.");
    return;
  }
  if(passWordLength > 128){
    alert("Brah, thats way to many characters. Imma restart.");
    return;
  }
  // Using confirm to ask what parameter for the password the user would like

  var wantSpChar = confirm("Do you want your password to have special characters?");

  var wantLwCase = confirm("Do you want Lower Case letters?");

  var wantUpCase = confirm("Do you want Upper Case letters?");

  var wantNum = confirm("Do you want Numbers?");

  // If nothing is picked this message will post and restart

  if(wantSpChar === false && wantLwCase === false && wantUpCase === false && wantNum === false){
    alert("You have to pick one... Lets start from the begining..");
    return;
  }


  // This function will randomly pick out of an array

  function randomizer (array){
    var x = Math.floor(Math.random()*array.length);
    return x;
  }
  

  function passwordGenorator () {

    var options = randomizer();
    array = [];
    if(wantSpChar){
      randomizer(arraySpecial);
    }
  }

}

  // variable store the user choice about special characters create a confirm or make variable = answer to there confirm
  // add message to your confirm 
  // if all character confirms false, tell user to at least pick one character or return. 

  // create a function to create a password generator randomly (array)
    // variable = Math.floor(Math.random() * array.length)
    // return variable 
  
  
  // Function to generate password
    //var options = password options function
    // array = []
    // check if options exists, return
    // check if options has special charctes
    // array = array.concat(special charcters)
    // check if options has uppercase charctes
    // array = array.concat(upper case characters)
    // check if options has lowercase charctes
    // array = array.concat(lower case chacters)
    // check if options has number charctes
    // array = array.concat(numeric)
    // for loop to call randomly generate passwords., pass our array



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

