// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberInput = document.querySelector("#inputNumber");
var lowerCaseCheckBox = document.querySelector("#lowerCaseCheckBox");
var upperCaseCheckBox = document.querySelector("#upperCaseCheckBox");
var numberCheckBox = document.querySelector("#numberCheckBox");
var specialCharacterCheckBox = document.querySelector("#specialCharacterCheckBox");
var result = document.querySelector("#result");
var myModal = document.querySelector("#myModal");
var pass = document.querySelector("#password");
var charsLower = "abcdefghijklmnopqrstuvwxyz";
var charsUpper = charsLower.toUpperCase();
var charsNumbers = "012345679";
var charsSpecial = "!@#$%^&*()_+";


function checkForm() {
  var number = numberInput.value;
  if(number === '' || number <8 || number > 128){
    alert("Please enter a number between 8 and 128.");
    return;
  }
  
  var lowerCaseIsChecked = lowerCaseCheckBox.checked;
  var upperCaseIsChecked = upperCaseCheckBox.checked;
  var numberIsChecked = numberCheckBox.checked;
  var specialCharacterIsChecked = specialCharacterCheckBox.checked;

  if(!lowerCaseIsChecked && !upperCaseIsChecked && !numberIsChecked && !specialCharacterIsChecked ){
    alert("Please sure, checked at least one character type.");
    return;
  }
 
  var charset = (lowerCaseIsChecked ? charsLower : '') + (upperCaseIsChecked ? charsUpper : '') + (numberIsChecked ? charsNumbers :'')+
                (specialCharacterIsChecked ? charsSpecial : ''); //one line if

  var generatePassword = "";
  var charsetLength = charset.length-1;
  for (var i = 0 ; i < number; ++i) {
    generatePassword += charset.charAt(Math.floor(Math.random() * charsetLength)); //
  }
  
  pass.value = generatePassword;
  checkPasswordQuality(generatePassword)
  $(function () {
    $('#myModal').modal('toggle');
 });
  
}

function checkPasswordQuality(pwString) {
  var strength = 0;

  strength += /[A-Z]+/.test(pwString) ? 1 : 0;
  strength += /[a-z]+/.test(pwString) ? 1 : 0;
  strength += /[0-9]+/.test(pwString) ? 1 : 0;
  strength += /[\W]+/.test(pwString) ? 1 : 0;

  switch(strength) {
      case 2:
        result.innerText="weak"
      case 3:
        result.innerText="medium";
          break;
      case 4:
        result.innerText="strong";
          // it's strong!
          break;
      default:
        result.innerText="very weak";
          // it's weak!
          break;
  }
}
