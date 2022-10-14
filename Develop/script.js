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
function generatePassword() {
	var requestA = window.prompt("How many characters would you like your password to be? Must be between 8 and 128.");
	if (requestA >= 8 && requestA <= 128) {{
		window.alert("That is a valid number.");
		};
	} else {window.alert("Sorry, that does not match the input requirement");
		return;
	}
	var request1 = confirm("Would you like numeric values in your password?");
	var request2 = confirm("Would you like to include lowercase letters?");
	var request3 = confirm("Would you like to include uppercase letters?");
	var request4 = confirm("Would you like to include special characters?");
	// create container for various options from confirm dialogue boxes.
	var userChoice = [];
			// if clicked yes, array will be added to userChoice array
			if (request1 === true){
				userChoice.push(Numeric);
			}
			if (request2 === true){
				userChoice.push(lowerCase);
			}
			if (request3 === true){
				userChoice.push(upperCase);
			}
			if (request4 === true){
				userChoice.push(specialCharacter);
			} else {window.alert("You need to select at least one of the criteria.");
				return;}
	function randomItem() {
		return userChoice[Math.floor(Math.random()*userChoice.length)];
			}
		for (var i = 0; i < requestA.length; i++)
			var randomOne = randomItem();
			var randomTwo = randomOne;
			console.log(randomTwo);
}

function writePassword(){
	var password = generatePassword();
  var passwordText = document.querySelector("#password");
	passwordText.value = password;}

	// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
