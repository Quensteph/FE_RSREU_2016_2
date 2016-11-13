"use strict";

var isNumber = function isNumber(num) {
  return isFinite(num) && !isNaN(parseFloat(num));
}

var Calculator = (function () {
  var currentState = 0;

  var checkInput = function (num) {
    if (!isNumber(num)) {
      throw new Error("Input is not a number!");
    }
  }

  var add = function add(num) {
    checkInput(num);
    currentState += num;

    return add;
  }

  var subtract = function subtract(num) {
    checkInput(num);
    currentState -= num;

    return subtract;
  }

  var multiply = function multiply(num) {
    checkInput(num);
    currentState *= num;

    return multiply;
  }

  var divide = function divide(num) {
    checkInput(num);
    currentState = Math.floor(currentState / num);

    return divide;
  }

  var getResult = function () {
    return currentState;
  }

  var reset = function () {
    currentState = 0;

    return currentState;
  }

  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    getResult: getResult,
    reset: reset
  }

} ());