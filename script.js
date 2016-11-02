/* JS Basics - Task 1 */
// Declaring two variables
var a;
var b;

// Function that finds triangle's area using Heron's Formula
function triangleArea(a, b, c) {
  var semiPerimeter = (a + b + c) / 2;
  var area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));

  return area;
}

var triangle = triangleArea(4, 5, 6);
console.log(triangle);

// Function that reverse the given array using three kinds of loops
var givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// The while loop
function reverseWhile(array) {
  var i = 0;
  var reversedArray = [];

  while (reversedArray.length < array.length) {
    ++i;
    reversedArray.push(array[array.length - i])
  }

  return reversedArray;
}

console.log(reverseWhile(givenArray));

// The do-while loop
function reverseDoWhile(array) {
  var i = 0;
  var reversedArray = [];

  do {
    ++i;
    reversedArray.push(array[array.length - i]);
  } while (reversedArray.length < array.length)

  return reversedArray;
}

console.log(reverseDoWhile(givenArray));

// The for loop
function reverseFor(array) {
  var reversedArray = [];

  for (var i = 1; reversedArray.length < array.length; i++) {
    reversedArray.push(array[array.length - i]);
  }

  return reversedArray;
}

console.log(reverseFor(givenArray));

// Difference between ++i and i++
var c = 1;
console.log(c++);
console.log(c);

var d = 1;
console.log(++d);
console.log(d);

// Function that checks if the given argument is positive number or negative number or is 0
// Checks if input number is typeof 'Number' then returns:
//                                                          * if positive - true
//                                                          * if zero - null
//                                                          * if negative - false

function isPositive(num) {
  if (typeof num === 'number') {
    if (num == 0) {
      return 'zero';
    } else {
      return (num > 0)
    }
  } else {
    throw new Error("Input is not a number!")
  }
}

var check = isPositive(1);
console.log(check);

// Ask user a name, then alert it
var name = prompt("What's your name?", "Mr. Incognito");
alert("Your name is " + name + ".");

// Function that calculates factorial
function factorial(num) {
  return (num != 1) ? (num * factorial(num - 1)) : num;
}



console.log(factorial(5));