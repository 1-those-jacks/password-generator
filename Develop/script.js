// Assignment Code
var generateBtn = document.querySelector("#generate");
// array for numbers 0-9
var Numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// array for alphabet characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array for special characters
var specialCharacter = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", ",", ".", "?", "/"];


// generates the password based on the selected criteria from the prompt/confirm windows.
function generatePassword() {
	var passwordLengthPrompt = window.prompt("How many characters would you like your password to be? Must be between 8 and 128.");
	if (passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128) {
		{
			window.alert("That is a valid number.");
		};
	} else {
		window.alert("Sorry, that does not match the input requirement");
		return;
	}
	var reqNum = window.confirm("Would you like numeric values in your password?");
	var reqLC = window.confirm("Would you like to include lowercase letters?");
	var reqUC = window.confirm("Would you like to include uppercase letters?");
	var reqSC = window.confirm("Would you like to include special characters?");
	// create container for various options from confirm dialogue boxes.
	var userChoice = {
			}
	// if clicked yes, array will be added to userChoice object
	if (reqNum === true) {
		userChoice["Numbers"] = true;
	}
	if (reqLC === true) {
		userChoice["Lower-case"] = true;
	}
	if (reqUC === true) {
		userChoice["Upper-case"] = true;
	}
	if (reqSC === true) {
		userChoice["Special-Char"] = true;
	}
	if (!userChoice["Numbers"] && !userChoice["Lower-case"] && !userChoice["Upper-case"] && !userChoice["Special-Char"]){
		window.alert("You need to select at least one of the criteria. Please try again.");
	};

	var result = [];

	var possibleChars = [];

	var guaranteedChars = [];

	passwordLengthPrompt = Number.parseInt(passwordLengthPrompt);
	
	function randomItem(passwordLengthPrompt) {
		return Math.floor(Math.random() * passwordLengthPrompt);
	}
	// for loop works for doing the correction amount of iterations
	for (var i = 0; i < Number.parseInt(passwordLengthPrompt); i++) {
		if (userChoice["Numbers"]) {
			possibleChars = Numeric[Math.floor(Math.random() * Numeric.length)];
			guaranteedChars.push(possibleChars);
		} 
		if (userChoice["Lower-case"]) {
			possibleChars = lowerCase[Math.floor(Math.random() * lowerCase.length)];
			guaranteedChars.push(possibleChars);
		}
		if (userChoice["Upper-case"]) {
			possibleChars = upperCase[Math.floor(Math.random() * upperCase.length)];
			guaranteedChars.push(possibleChars);
		}		
		if (userChoice["Special-Char"]) {
			possibleChars = specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
			guaranteedChars.push(possibleChars);
		}

		result[i] = guaranteedChars[i];	
		console.log(result[i], guaranteedChars[i]);
	}
	// logs result as an array in console
	console.log(result);
	// returns the value of each iteration without a space onto the browser
	return result.join("");
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
