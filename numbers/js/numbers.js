"use strict";

var test = prompt("Enter whatever", "");

/* Task 1
	Write a function which defines if a given value is a number. Use this function in the next tasks to define if a given value is a number.
 */

/* Step 1: isFinite(num) returns true, unless num == (true/false) or null or "". */
/* Step 2: parseFloat(num) converts num to String, then parses Number, so (true/false) or null or "" to NaN. */
/* Step 3: !isNaN(num) returns true only if num is not NaN. */

function isNumber(num) {
  return isFinite(num) && !isNaN(parseFloat(num));
}

console.log("isNumber?");
console.log(isNumber(test));

/* Task 2
  Write a function which defines if a given number is negative or not. Do not forget to check if the given value is a number.
*/

/* Checks if argument is number AND less that 0*/

function isNegative(num) {
  return (isNumber(num) && (num < 0));
}

console.log("isNegative?");
console.log(isNegative(test));

/* Task 3
  Write a function which defines if a given number is positive or not. Do not forget to check if the given value is a number.
*/

/* Checks if argument is number AND greater that 0*/

function isPositive(num) {
  return (isNumber(num) && (num > 0));
}

console.log("isPositive?");
console.log(isPositive(test));

/* Task 4
  Write a function which calculates a factorial for a given number (use recursion in your algorithm).Do not forget to check if the given value is a number.
*/

/* Supporting function, that checks whether input is Integer */

function isInteger(num) {
  return num % 1 === 0;
}

/* Step 1: Checks if argument is positive integer OR 0, if not throws Error. */
/* Step 2: Checks if argument is number. */
/* Step 3: Recursive method of finding factorial. */

function factorial(num) {
  if (!isInteger(num) || isNegative(num)) {
    return "Works only with positive integers or 0!";
  }

  return (num == 0) ? 1 : num * factorial(num - 1);
}

console.log("Factorial");
console.log(factorial(test));

/* Task 5
  Write a function which returns if the number is prime or not.Do not forget to check if the given value is a number.
*/

function isPrime(num) {
  if (isNumber(num) && isInteger(num)) {
    var i = 2;
    while (i <= Math.sqrt(num)) {
        if (num % i++ < 1) return false;
    }
    return num > 1;
  } return false;
}

console.log("isPrime?");
console.log(isPrime(test));