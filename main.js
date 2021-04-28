/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const calculator = {\n  displayValue: '0',\n  firstOperand: null,\n  waitingForSecondOperand: false,\n  operator: null\n};\n\nconst inputDigit = (digit) => {\n  if (calculator.waitingForSecondOperand === true) {\n    calculator.displayValue = digit;\n    calculator.waitingForSecondOperand = false;\n  } else {\n    if (calculator.displayValue === '0') {\n      calculator.displayValue = digit;\n    } else {\n      calculator.displayValue = calculator.displayValue + digit;\n    }\n  }\n}\n\nconst inputDecimal = (dot) => {\n  if (calculator.waitingForSecondOperand === true) {\n    calculator.displayValue = '0.';\n    calculator.waitingForSecondOperand = false;\n    return;\n  }\n\n  if (!calculator.displayValue.includes(dot)) {\n    calculator.displayValue += dot;\n  }\n}\n\nconst handleOperator = (nextOperator) => {\n  const inputValue = parseFloat(calculator.displayValue);\n\n  if (calculator.operator && calculator.waitingForSecondOperand) {\n    calculator.operator = nextOperator;\n    return;\n  }\n\n  if (calculator.firstOperand === null && !isNaN(inputValue)) {\n    calculator.firstOperand = inputValue;\n  } else if (calculator.operator) {\n    const result = calculate(calculator.firstOperand, inputValue, calculator.operator);\n    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;\n    calculator.firstOperand = result;\n  }\n\n  calculator.waitingForSecondOperand = true;\n  calculator.operator = nextOperator;\n}\n\nconst calculate = (firstOperand, secondOperand, operator) => {\n  switch(operator) {\n    case '+':\n      return firstOperand + secondOperand;\n    case '-':\n      return firstOperand - secondOperand;\n    case '*':\n      return firstOperand * secondOperand;\n    case '/':\n      return firstOperand / secondOperand;\n    default:\n      return secondOperand\n  }\n}\n\nconst resetCalculator = () => {\n  calculator.displayValue = '0';\n  calculator.firstOperand = null;\n  calculator.waitingForSecondOperand = false;\n  calculator.operator = null;\n}\n\nconst display = document.querySelector('.calculator-screen');\n\nconst updateDisplay = () => {\n  display.value = calculator.displayValue;\n}\n\nupdateDisplay();\n\nconst keys = document.querySelector('.calculator-keys');\nkeys.addEventListener('click', event => {\n  const { target } = event;\n  const { value } = target;\n  if (!target.matches('button')) {\n    return;\n  }\n\n  switch (value) {\n    case '+':\n    case '-':\n    case '*':\n    case '/':\n    case '=':\n      handleOperator(value);\n      break;\n    case '.':\n      inputDecimal(value);\n      break;\n    case 'all-clear':\n      resetCalculator();\n      break;\n    default:\n      // check if the key is an integer\n      if (Number.isInteger(parseFloat(value))) {\n        inputDigit(value);\n      }\n  }\n\n  updateDisplay();\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;