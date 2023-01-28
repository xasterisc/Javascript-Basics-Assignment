/* eslint no-console : ["error", {allow : ["warn", "error"] }] */

// Refer to the Markdown tab for the main instructions,
// and instructions for each individual question are written as comments in this source file.

// Only edit code in the sections for each question.
// There is some code that should not be edited,
// it is just used to set up the conditions for your code to work.
// That code has comments around it mentioning not to edit it.

// QUESTION 1.
// Assign string values based on your own information to the variables firstName,
// lastName and homeCountry below.
const firstName = 'Mohamed';
const lastName = 'Zouari';
const homeCountry = 'Tunisia';

// QUESTION 2. String Concatenation (Addition)
// - Add your firstName and lastName variables together
// and set them equal to the fullName variable as a string.
// Don't forget to add a space.
const fullName = 'Mohamed Zouari';

// QUESTION 3. String Concatenation (Addition) 2.
// - Create a sentence and set it equal to the mySentence variable
// that says "My full name is (your fullName variable). I am from (homeCountry)."
// Try and use template literal notation!
// For example, if your fullName variable contains the string "John Doe"
// and your homeCountry variable contains the string "Brazil"
// it would end up equaling ""My full name is John Doe. I am from Brazil."
const mySentence = `My full name is ${fullName}. I am from ${homeCountry}.`;

// QUESTION 4. FUNKY INITIALS.
// Using multiple string methods and your firstName and lastName variables from above
// (think length, slice, indexOf, charAt, that kind of thing)
// programmatically place the last letter of your first name
// and the last letter of your last name into the funkyInitials variable below.
// Also make sure they are capitalized.
// Hint: You may want to create new variables as intermediary steps
// before finally setting or resetting the value of funkyInitials.
const firstNameLetter = firstName[firstName.length - 1];
const lastNameLetter = lastName[lastName.length - 1];
let funkyInitials = (firstNameLetter + lastNameLetter).toUpperCase();
console.warn(funkyInitials);
funkyInitials = (
  firstName[firstName.length - 1] + lastName.charAt(lastName.length - 1)
).toUpperCase();
console.warn(funkyInitials);

// QUESTION 5. Conditional 1
// - We've had, and have, a lot of developers named Jorge at Code the Dream.
// So now we want to check programatically to see
// if you are the newest Jorge passing through the halls of CtD.
// Create an if/else statement that sets
// the variable isJorge to true if your firstName variable is "Jorge"
// and false if it is anything else.
function isJorgeChecker() {
  if (firstName === 'Jorge') {
    return true;
  }
  return false;
}
const isJorge = isJorgeChecker();
console.warn(isJorge);

// Question 6. Conditional 2
// - You are given a randomNumber generator
// that will create a number between 1 and 3 in the randomNumber variable (do not change this code).
// Create a condtional where
// if the randomNumber variable is equal to 1 set theAnswer variable to "perhaps it is so",
// if randomNumber is equal to 2 set theAnswer variable to "yes, definitely" and
// if randomNumber is equal to 3 set theAnswer to "no, never"

/// DO NOT TOUCH THE CODE HERE
// - it is creating a random number between 1 and three for you to test against
const randomNumber = Math.floor(Math.random() * 3 + 1);

// WRITE YOUR CODE BELOW
let theAnswer;
console.warn(randomNumber);

switch (randomNumber) {
  case 1:
    theAnswer = 'perhaps it is so';
    break;
  case 2:
    theAnswer = 'yes, definitely';
    break;
  case 3:
    theAnswer = 'no, never';
    break;
  default:
    theAnswer = 'something went wrong';
}
console.warn(theAnswer);

// QUESTION 7.
// Given the variable x, using JS round it to it's nearest two decimal number
// on the line immediately below the line that initially sets the x variable.

let x = 21.45729;
x = Number(x.toFixed(2));
console.warn(x);

// QUESTION 8.
// Given the variable y as a string,
// convert it to the an integer with no decimal places. Round down.

let y = '15.3522';
y = Math.round(y);
console.warn(y);

// QUESTION 9.
// Without removing the string delimiters from var1 (the " "),
// add var1 and var2 so that they add up to 42 as an integer and are stored in the variable var3.

const var1 = '24';

const var2 = 18;

// code here
const var3 = Number(var1) + var2;

console.warn(var3);

// QUESTION 10 - MODULUS/REMAINDER and some other JS.
// If the variable var4q is divisible by exactly 6
// then have the variable var4a set to the string "It is divisible."
// If it is not divisible by 6 then set it to the string. "I am not divisible."

const var4q = 42;
let var4a;
function divisible() {
  if (var4q % 6 === 0) {
    var4a = 'It is divisible.';
    return var4a;
  }
  var4a = 'I am not divisible.';
  return var4a;
}
var4a = divisible();
console.warn(var4a);

// DO NOT TOUCH THE CODE HERE
// export functions and variables you want to check against here.
// Do not touch this if you are a student.

module.exports = {
  randomNumber,
  theAnswer,
  firstName,
  lastName,
  homeCountry,
  fullName,
  mySentence,
  isJorge,
  funkyInitials,
  x,
  y,
  var1,
  var2,
  var3,
  var4q,
  var4a,
};
