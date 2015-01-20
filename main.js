/*var name = prompt("What is your name?");
alert("Hello " + name + "!"); */

/*--> String Reporter*/

/*var word = prompt("Please enter a word, any word.");

alert("Your entered " + word);

alert("There are " + word.length + " characters in the word.");

alert("The third character is '" + word.charAt(2) + "'");

alert(word.toLowerCase());

alert(word.toUpperCase());

alert("I have always wanted a " + word " since I was little.");

alert(word.substring(1, 3)); */

/*-->Simple Validator*/

var myPhone = prompt("Please enter your phone number using the format using the following format: xxx-xxx-xxxx. Your number will not be used for SPAM.");

if(myPhone.charAt(3) === '-' && myPhone.charAt(7) ==='-') {
	alert("You entered a valid number");
}

var myBirthdate = prompt("Please enter your birth date using the format xx/xx/xx");
if (myBirthdate.charAt(2) === '/' && myBirthdate.charAt(5) ==='/') {
	alert("You entered a valid birth date");
}

var myPostcode = prompt("Enter your post code using either xxxxx or xxxxx-xxxx");
if(myPostcode.length === 5 || myPostcode.charAt(5) === '-' ) {
	alert("You entered a valid Post Code");
}

var myState = prompt("Enter your state, using the 2 character abbreviation in CAPS.")
if(myState.length === 2 && myState === myState.toUpperCase()) {
	alert("You entered a valid state");
}

var maritalStatus = prompt("Are you married, Yes or No?")
if(maritalStatus === 'yes' || maritalStatus === 'no' || maritalStatus === 'YES' || maritalStatus === "Yes" || maritalStatus === 'No' || maritalStatus === "NO") {
	alert("You entered a vaild status.");
}