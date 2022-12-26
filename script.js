
var myInput = document.getElementById("pwd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var formContainer = document.querySelector(".form-container");
var bottom = document.querySelector(".bottom");


// When the user clicks on the password field, show the message box and change dimensions/styles
myInput.onfocus = function() {
    document.getElementById("message").setAttribute('style', 'display: block')
  document.getElementById("message-container").setAttribute('style', 'display: flex; flex-flow: column wrap;')
  formContainer.style.height="50vh";
  bottom.style.height="20vh";
}

// When the user clicks outside of the password field, hide the message box and reset to default styles and dimensions
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
  formContainer.style.height="40vh";
  bottom.style.height="30vh";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

//password match function


