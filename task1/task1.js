"use strict";

// Function accepts two integers and displays the largest
function compareInt (int1, int2) {
  if (typeof int1 === 'number' && typeof int2 === 'number') {
    if (int1 > int2) {
      return int1
    } else {
      return int2
    } 
  } else {
    throw new Error ('One or both inputs are not integer!') 
  }
}

console.log(compareInt(1.3, 1.2));

// Write a JS for loop that will iterate from 0 to 9. For each iteration, it will check if the current number is odd or even, and display a message to the console
function oddEven () {
  var parityArray = [];

  for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
      parityArray.push("even")
    } else {
      parityArray.push("odd")
    }
  }

  return parityArray
}

console.log(oddEven());

/* Write a JavaScript function to check whether a string is blank or not
   Test Data: 
    * console.log(is_Blank(''));          == true
    * console.log(is_Blank('     '));     == true
    * console.log(is_Blank('  abc  '));   == false
*/

function isBlank (str) {
  if (typeof str === 'string') {
    var charArray = [];
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) !== ' ') {
       charArray.push(str.charAt(i));
      }
    }

    return charArray < 1;
  } else {
    throw new Error ("Input is not a string!")
  }
}

console.log(isBlank('                    '));