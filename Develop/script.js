// Assignment code here

function generatePassword(){
//add characters
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
var numbers = [1,2,3,4,5,6,7,8,9,0];

var uppercases = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps;
})();//from stackOverflow

var lowercases = [];
for(var i = 0; i<uppercases.length; i++){
lowercases[i] = uppercases[i].toLowerCase();
}

//set user prompt, validate the input
while(true){
var userInput = window.prompt("How many characters would you like your password to contain?")
//user close the prompt
if(userInput === null){
return;
}
var passwordLength = parseInt(userInput);

if(passwordLength <8 || passwordLength >128){
window.alert("Invalid password length. Length should be between 8 and 128 characters.")
}else if(isNaN(passwordLength)){
window.alert("That's not a number!")
}else{
 break;
}
}

//confirm user choices
var hasLowercase = window.confirm("Click OK to confirms including lowercase characters.")
var hasUppercase = window.confirm("Click OK to confirms including uppercase characters.")
var hasNumbers = window.confirm("Click OK to confirms including numbers.")
var hasSymbols = window.confirm("Click OK to confirms including special characters.");


//add user's choices to availableCharacters
//use ternary operator and spread operator
var availableCharacters = [
...(hasSymbols ? symbols:[]),
...(hasNumbers ? numbers:[]),
...(hasLowercase ? lowercases:[]),
...(hasUppercase ? uppercases:[])
];
//find random index to generat password
var generatedPassword = "";

if(availableCharacters.length === 0) return "";

for(let i = 0; i < passwordLength; i++){
const randomIndex = Math.floor(Math.random() * availableCharacters.length);
generatedPassword += availableCharacters[randomIndex];
}
return generatedPassword;

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
