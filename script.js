// Button to generate password
var generateBtn = document.getElementById("generate");

// Arrays for different prompts
var onlyUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var onlyLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var onlySpecialCharacters = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];
var onlyNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Begins with prompting the user for options when setting password
var answers;
function generate() {
  var length = parseInt(
    prompt("How many characters would you like your password to be?")
  )

  // Make sure answer is a number

  if (isNaN(length) === true) {
    alert("Please provide a number")

    return
  }

  // Make sure answer is greater than 8 and less than 128
  if (length < 8) {
    alert("Must be more than 8 characters")

    return
  }

  if (length > 128) {
    alert("Must be less than 128 characters")

    return
  }

  //Prompt user for details of the password

  //confirm special characters
  var questionSpecialCharacter = confirm(
    "Would you like to include Special Characters in your password?"
  )

  //confirm lower case characters
  var questionLowerCaseArr = confirm(
    "Would you like to include Lower case Characters in your password?"
  )

  //confirm upper case characters
  var questionUpperCaseArr = confirm(
    "Would you like to include Upper case Characters in your password?"
  )

  //confirm number characters
  var questionNumbers = confirm(
    "Would you like to include numbers in your password?"
  )

  //confirming if something was clicked on prompts above. If not, it will return alert "must select one prompt"

  if (
    questionSpecialCharacter === false &&
    questionLowerCaseArr === false &&
    questionUpperCaseArr === false &&
    questionNumbers === false
  ) {
    alert("Your password must contain at least one special, numeric, lowercase or uppercase character")

    return
  } else {

    //Gather what content for answers
     answers = {
      length: length,
      questionSpecialCharacter: questionSpecialCharacter,
      questionLowerCaseArr: questionLowerCaseArr,
      questionUpperCaseArr: questionUpperCaseArr,
      questionNumbers: questionNumbers

    }
    generatePassword(answers);
  }
}

// handles creating the password
function generatePassword(answers) {
  
  // console.log(details)

  var passwordPool = [];
  console.log(passwordPool)

  //if user confirmed to include Special character we will put in the password pool

  if (answers.questionSpecialCharacter) {
    for (i = 0; i < onlySpecialCharacters.length; ++i) {
      passwordPool.push(onlySpecialCharacters[i]);
    }
  }

  //if user confirmed to include numbers we will put it in the password pool

  if (answers.questionNumbers) {
    for (i = 0; i < onlyNumbers.length; ++i) {
      passwordPool.push(onlyNumbers[i]);
    }
  }

  //if user confirmed to include lowercase we will include it in the password pool

  if (answers.questionLowerCaseArr) {
    for (i = 0; i < onlyLowerCase.length; ++i) {
      passwordPool.push(onlyLowerCase[i]);
    }
  }

  //if user confirmed to include uppercase we will put it in the password pool

  if (answers.questionUpperCaseArr) {
    for (i = 0; i < onlyUpperCase.length; ++i) {
      passwordPool.push(onlyUpperCase[i]);
    }
  }
  //final password

  var finalPassword = [];

  //will go into the characters and pick random ones

  for (let i = 0; i < answers.length; ++i) {
    var randomPicker = Math.floor(Math.random() * Math.floor(passwordPool.length));
    finalPassword.push(passwordPool[randomPicker])
  }

  console.log(finalPassword)

  var superFinal = finalPassword.join('');
  console.log(superFinal)

  confirm = (finalPassword)

  document.getElementById("password").textContent = superFinal;
}

