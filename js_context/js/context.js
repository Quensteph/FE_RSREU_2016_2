var numberUtils = (function () {
  "use strict";

  function isNumber(num) {
    return isFinite(num) && !isNaN(parseFloat(num));
  }

  return {
    isNumber: isNumber
  };

} ());

var calculator = (function () {
  "use strict";

  var currentState = 0;

  function checkInput(num) {
    if (!numberUtils.isNumber(num)) {
      throw new Error("Input is not a number!");
    }
  }

  function add(num) {
    checkInput(num);
    this.currentState += num;

    return this;
  }

  function subtract(num) {
    checkInput(num);
    this.currentState -= num;

    return this;
  }

  function multiply(num) {
    checkInput(num);
    this.currentState *= num;

    return this;
  }

  function divide(num) {
    checkInput(num);
    this.currentState = Math.floor(this.currentState / num);

    return this;
  }

  function getResult() {
    return this.currentState;
  }

  function reset() {
    this.currentState = 0;

    return this;
  }

  return {
    // currentState: currentState,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    getResult: getResult,
    reset: reset
  }

} ());