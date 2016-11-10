"use strict";

var testObject = {
  "firstName": "Sample",
  "secondName": "Example",
  "age": 999,
  "isHuman": true,
}

/* Task 1 */
/* Write a JavaScript function to get the length of a JavaScript object. */

function getObjectLength(obj) {
  return Object.keys(obj).length;
}

console.log("getObjectLength");
console.log(getObjectLength(testObject));

/* Task 2 */
/* Write a JavaScript function to list the properties of a JavaScript object. */

function getObjectProperties(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }

  return keys;
}

console.log("getObjectProperties");
console.log(getObjectProperties(testObject));