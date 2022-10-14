// Assignment Code
var generateBtn = document.querySelector("#generate");
// array for numbers 0-9
var Numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// array for alphabet characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array for special characters
var specialCharacter = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", ",", ".", "?", "/"];
// Write password to the #password input
function writePassword() {
	var requestA = prompt("How many characters would you like your password to be? Must be between 8 and 128.")
	var request1 = confirm("Would you like numeric values in your password?");
	var request2 = confirm("Would you like to include lowercase letters?");
	var request3 = confirm("Would you like to include uppercase letters?");
	var request4 = confirm("Would you like to include special characters?");
	
	var password = generatePassword();
  
	var passwordText = document.querySelector("#password");

  passwordText.value = password;

	function generatePassword(){
	if (request1 === true){
		return Numeric[Math.floor(Math.random()*Numeric.length)];
	}
	if (request2 === true){
		return lowerCase[Math.floor(Math.random()*lowerCase.length)];
	}
	if (request3 === true){
		return upperCase[Math.floor(Math.random()*upperCase.length)];
	}
	if (request4 === true){
		return specialCharacter[Math.floor(Math.random()*specialCharacter.length)];
	} else {
		alert("Sorry, you need to select at least one of the criteria. Please refresh webpage.");
	}}
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
