"use strict";

var test = "you cannot spell slaughter without laughter";

/* Task 1 */
/* Write a function which defines if a given value is a string. Use this function in the next tasks to define if a given value is a string. */

function isString(str) {
  return (typeof str === "string");
}

console.log("isString?");
console.log(isString(test));

/* Task 2 */
/* Write a function which defines if a given value can be casted to a number. */

/* Supporting function from previous tasks. */

function isNumber(num) {
  return isFinite(num) && !isNaN(parseFloat(num));
}

function canParseToNumber(str) {
  return isNumber(parseFloat(str));
}

console.log("canParseToNumber?")
console.log(canParseToNumber(test));

/* Task 3 */
/* Write a function which returns a given string length. Do not forget to check if the given value is a string. */

function getStringLength(str) {
  return isString(str) ? str.length : "input is not string";
}

console.log("getStringLength");
console.log(getStringLength(test));

/* Task 4 */
/* Write a JavaScript function to convert a string into camel case. */

/* Supporting function converting first letter to uppercase. */

function firstLetterToUpperCase(str) {
  var firstLetter = str.charAt(0);

  return firstLetter.toUpperCase() + str.slice(1);
}

console.log(firstLetterToUpperCase(""));

function camelize(str) {
  var words = str.split(" ");
  var firstWord = words[0];
  var result = [];

  result.push(firstWord.toLowerCase());

  for (var i = 1; i < words.length; i++) {
    result.push(firstLetterToUpperCase(words[i]));
  }

  return result.join("");
}

console.log("camelize");
console.log(camelize(test));

/* Task 5 */
/* Write a JavaScript function to capitalize the first letter of a string. */

/* 1. Make array of words, cut out first word. */
/* 2. Make array of first word's letters, Uppercase first letter here and join it back together. */
/* 3. Put new uppercased word to the beginning of words array, join it back together. */

function capitalize(str) {
  var words = str.split(" ");
  var firstWord = words[0];
  var firstWordLetters = [];
  var result = "";

  words = words.splice(1, words.length);

  for (var i = 0; i < firstWord.length; i++) {
    firstWordLetters.push(firstWord[i]);
  }

  firstWordLetters[0] = firstWordLetters[0].toUpperCase();
  firstWord = firstWordLetters.join("");

  words.unshift(firstWord);
  result = words.join(" ");

  return result;
}

console.log(capitalize(test));

/* Task 6 */
/* Write a JavaScript function which return the number of occurrences of a given substring in a string. */

function findOccurences(str, occurrence) {
  var position = -1;
  var count = 0;

  while ((position = str.indexOf(occurrence, position + 1)) !== -1) {
    count++
  }

  return count;
}

console.log(findOccurences(test, "laughter"));