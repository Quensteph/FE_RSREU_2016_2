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
    this.currentState += num;

    return this;
  }

  var subtract = function subtract(num) {
    checkInput(num);
    this.currentState -= num;

    return this;
  }

  var multiply = function multiply(num) {
    checkInput(num);
    this.currentState *= num;

    return this;
  }

  var divide = function divide(num) {
    checkInput(num);
    this.currentState = Math.floor(this.currentState / num);

    return this;
  }

  var getResult = function () {
    return this.currentState;
  }

  var reset = function () {
    this.currentState = 0;

    return this.currentState;
  }

  return {
    currentState: currentState,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    getResult: getResult,
    reset: reset
  }

} ());