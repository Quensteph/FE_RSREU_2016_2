var NumberUtils = (function () {
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

  var checkInput = function (num) {
    if (!NumberUtils.isNumber(num)) {
      throw new Error("Input is not a number!");
    }
  }

  function add(num) {
    checkInput(num);
    currentState += num;

    return add;
  }

  function subtract(num) {
    checkInput(num);
    currentState -= num;

    return subtract;
  }

  function multiply(num) {
    checkInput(num);
    currentState *= num;

    return multiply;
  }

  function divide(num) {
    checkInput(num);
    currentState = Math.floor(currentState / num);

    return divide;
  }

  function getResult () {
    return currentState;
  }

  function reset () {
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
  };

} ());