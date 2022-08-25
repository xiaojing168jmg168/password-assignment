// Assignment code here
//set user prompt
function generatePassword(){
var userInput = window.prompt("How many characters would you like your password to contain?");
var passwordLength = parseInt(userInput);

var hasSymbols = window.confirm("Click 'ok' to confirms including special characters.");
var hasNumbers = window.confirm("Click 'ok' to confirms including numbers.")
var hasLowercase = window.confirm("Click 'ok' to confirms including lowercase characters.")
var hasUppercase = window.confirm("Click 'ok' to confirms including uppercase characters.")

//add characters
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
var numbers = [1,2,3,4,5,6,7,8,9,0];

var uppercases = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps;
})();

var lowercases = [];
for(var i = 0; i<uppercases.length; i++){
lowercases[i] = uppercases[i].toLowerCase();
}

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
