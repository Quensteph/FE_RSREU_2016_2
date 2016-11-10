"use strict";

var testObject = {
  "firstName": "Sample",
  "secondName": "Example",
  "age": 999,
  "isHuman": true,
  "luggage": {
    "item1": 1,
    "item2": 2,
    "item3": 3,
  }
}

/* Task 1 */
/* Write a JavaScript function to get the length of a JavaScript object. */

function getObjectLength(obj) {
  var length = Object.keys(obj).length;
  return Object.keys(obj).length;
}

console.log("getObjectLength");
console.log(getObjectLength(testObject));

/* Task 2 */
/* Write a JavaScript function to list the properties of a JavaScript object. */



function getObjectProperties(obj) {
  var result = 0;

  return (function _getObjectProperties(obj) {
    for (var key in obj) {
      if (typeof obj[key] === "object") {
        _getObjectProperties(obj[key]);
      } else {
        result++;
      }
    }

    return result;
  } (obj));
}

console.log("getObjectProperties");
console.log(getObjectProperties(testObject));