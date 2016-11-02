"use strict";

// Function that checks whether a passed string is palindrome or not
function isPalindrome(str) {
  var palindrome = '';

  for (var i = 0; i < str.length; i++) {
    palindrome += str.charAt(str.length - i - 1);
  }

  return palindrome === str;
}

console.log(isPalindrome('gigaagig') ? 'is palindrome' : 'is not palindrome');

/* Write a JavaScript function that generates all combinations of a string.
   Example string : 'dog' 
   Expected Output : d,do,dog,o,og,g */

function letterCombo(str) {
  var fn = function (active, rest, a) {
    if (!active && !rest)
      return;
    if (!rest) {
      a.push(active);
    } else {
      fn(active + rest[0], rest.slice(1), a);
      fn(active, rest.slice(1), a);
    }
    return a;
  }
  return fn("", str, []);
}

console.log(letterCombo('tom'));

/* Write a JavaScript function that returns a passed string with letters
   in alphabetical order using "Bubble Sort algorithm" */
var letters = [];

function strToArr(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) !== ' ') {
      letters.push(str.charAt(i))
    }
  }
  return letters
}

function swap(arr, item, nextItem) {
  var temp = arr[item];
  arr[item] = arr[nextItem];
  arr[nextItem] = temp;
}

function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1)
    }
  }

  return arr;
}

function alphabetize(str) {

  strToArr(str);

  return bubbleSort(letters).toString();
}

console.log(alphabetize('bam nux'));

/* Write a JavaScript function that accepts a string as a parameter and find the longest word within the string */

function longWord(str) {
  var stringSplit = str.split(' ');
  var letterCount = 0;
  var word = '';

  for (var i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i].length > letterCount) {
      letterCount = stringSplit[i].length;
      word = stringSplit[i]
    }
  }

  return word;
}

console.log(longWord("Awesomeness awesome awe awesss aweash"));

/* Write a JavaScript function to extract unique characters from a string.

    Example string : "thequickbrownfoxjumpsoverthelazydog"
    Expected Output : "thequickbrownfxjmpsvlazydg"
*/

function uniqueChar(str) {
  var unique = '';

  for (var i = 0; i < str.length; i++) {
    var repeated = false;
    for (var j = 0; j < unique.length; j++) {
      if (str[i] == unique[j]) {
        repeated = true;
        break;
      }
    }

    if (!repeated) {
      unique += str[i];
    }
  }

  return unique;
}

console.log(uniqueChar('Example sentence is so example xcuiwgfcno oiUFGNC OEFGBOGFNCOQWGXBXZCVZXCjcbisuvbd'));