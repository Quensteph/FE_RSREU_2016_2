"use strict";

var test = [1, 2, 1, 2, 1, 2, 1, 4, 3, 4, 3, 3, 5, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3];
var testString = "You cannot spell slaughter without laughter";
var testArrayOfStrings = ["Mike", "Jessie", "Mike", "Mike", "Jessie", "Jessie", "Sam", "Sam", "Bob", "Bob", "Bob", "Mike"];

/* Task 1 */
/* Write a function which defines if a given value is an array. Use this function in the next tasks to define if a given value is an array. */

function isArray(arr) {
  return Array.isArray(arr);
}

console.log("isArray?");
console.log(isArray(test));

/* Task 2 */
/* Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. */

function removeSpecialValuesFromArray(arr) {
  if (isArray(arr)) {
    var cleared = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) cleared.push(arr[i]);
    }

    return cleared;
  } else {
    return "Input is not an array!";
  }
}

console.log("removeSpecialValuesFromArray");
console.log(removeSpecialValuesFromArray(test));

/* Task 3 */
/* Write a JavaScript function to find the highest value in an array. */

function getMaxValue(arr) {
  if (isArray(arr)) {
    var currentMax = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > currentMax) currentMax = arr[i];
    }

    return currentMax;
  } else {
    return "Input is not an array!";
  }
}

console.log("getMaxValue");
console.log(getMaxValue(test));

/* Task 4 */
/* Write a JavaScript function to find the lowest value in an array. */

function getMinValue(arr) {
  if (isArray(arr)) {
    var currentMin = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < currentMin) currentMin = arr[i];
    }

    return currentMin;
  } else {
    return "Input is not an array!";
  }
}

console.log("getMinValue");
console.log(getMinValue(test));

/* Task 5 */
/* Write a JavaScript function to split a string and convert it into an array of words. */

function stringToArray(str) {
  var words = str.split(" ");
  return words;
}

console.log("stringToArray");
console.log(stringToArray(testString));

/* Task 6 */
/* Write a JavaScript function to find the most frequent item of an array. */

function getMostFrequent(arr) {
  var sorted = arr.sort();
  var frequency = 0;
  var currentMax = 0;
  var result;

  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      frequency++;
    } else {
      frequency = 0;
    }

    if (frequency > currentMax) {
      result = sorted[i];
      currentMax = frequency;
    }
  }

  return result;
}

console.log("getMostFrequent");
console.log(getMostFrequent(test));

/* Task 7 */
/* Write a JavaScript function to clone an array. */

function cloneArray(arr) {
  var clone = arr.slice();

  return clone;
}

console.log("cloneArray");
console.log(cloneArray(test));

/* Task 8 */
/* Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity). */

function removeDuplicateStrings(arr) {
  var temp = {};
  for (var i = 0; i < arr.length; i++) temp[arr[i]] = true;

  var unique = [];
  for (var key in temp)
    unique.push(key);
  return unique;
}

console.log("removeDuplicateStrings");
console.log(removeDuplicateStrings(testArrayOfStrings));

/* Task 9 */
/* Write a JavaScript function to merge two arrays and removes all duplicates elements. */

function mergeArraysWithoutDuplicates(arr1, arr2) {
  var merged = arr1.concat(arr2);
  return removeDuplicateStrings(merged);
}

console.log("mergeArraysWithoutDuplicates");
console.log(mergeArraysWithoutDuplicates(testArrayOfStrings, ["Jessie", "Sam", "Richard", "Richard", "Sam", "Mike", "Ashley"]));

/* Task 10 */
/* Write a JavaScript function to remove a specific element from an array. */

function removeElementFromArray(arr, elem) {
  for (var i = arr.length - 1; i--;) {
    if (arr[i] === elem) arr.splice(i, 1);
  }

  return arr;
}

console.log("removeElementFromArray");
console.log(removeElementFromArray(testArrayOfStrings, "Jessie"));

/* Task 11 */
/* Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method. */

function sortByTitle(arr) {
  var sortedCopy = arr.slice(0);
  return sortedCopy.sort(function (a, b) {
    var x = a.title.toLowerCase();
    var y = b.title.toLowerCase();
    if (x > y) return 1;
    if (x < y) return -1;
    return 0;
  });
}

console.log("sortByTitle");
console.log(sortByTitle([
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
]));