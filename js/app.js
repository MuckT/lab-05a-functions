"use strict";
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) {
  let sum = a + b;
  let message = `The sum of ${a} and ${b} is ${sum}.`;
  return [sum, message];
}

// Here is the test for sum(); uncomment it to run it
/* eslint-disable no-undef */
testSum(4, 7);
// testSumTc0000(4, 7);
// testSumTc0001(-10, -20);
/* eslint-enable no-undef */

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) {
  let product = a * b;
  let message = `The product of ${a} and ${b} is ${product}.`;
  return [product, message];
}

// Here is the test for multiply(); uncomment it to run it
/* eslint-disable no-undef */
testMultiply(5,9);
// testMultiplyTc0002(5, 9);
// testMultiplyTc0003(5.3, 9.5);
/* eslint-enable no-undef */

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
  //eslint-disable-line
  let localSum = sum(sum(a, b)[0], c)[0];
  let product = multiply(multiply(a, b)[0], c)[0];
  let sumMessage = `${a} and ${b} and ${c} sum to ${localSum}.`;
  let productMessage = `The product of ${a} and ${b} and ${c} is ${product}.`;
  return [localSum, product, sumMessage, productMessage];
}

// Here is the test for sumAndMultiply(); uncomment it to run it
/* eslint-disable no-undef */
testSumAndMultiply(4,7,5);
// testSumAndMultiplyTc0004(4,7,5);
// testSumAndMultiplyTc0005(-4,-7,-5);
// testSumAndMultiplyTc0006(-4.5, 7.5, -5.25);
/* eslint-enable no-undef */

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4];
let testArray01 = [1, 2.2, -3, -4.5, 0];
let testArray02 = Array.from({length: Math.floor(Math.random() * 40)}, () => Math.floor(Math.random() * 20));

function addArray(total, num) {
  return sum(total, num)[0];
}

function sumArray(sumArr) { //eslint-disable-line
  let localSum = sumArr.reduce(addArray);
  let message = `${sumArr.toString()} was passed in as an array of numbers, and ${localSum} is their sum.`;
  return [localSum, message];
}

// Here is the test for sumArray(); uncomment it to run it
/* eslint-disable no-undef */
testSumArray(testArray);
// testSumArrayTc0007(testArray);
// testSumArrayTc0008(testArray01);
// testSumArrayTc0009(testArray02);
/* eslint-enable no-undef */
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function reduceFunction(total, num) { //eslint-disable-line
  return multiply(total, num)[0];
}

function multiplyArray(productArray) { //eslint-disable-line
  let localProduct = productArray.reduce(reduceFunction);
  let message = `The numbers ${productArray} have a product of ${localProduct}.`;
  return [localProduct, message];
}

// Here is the test for multiplyArray(); uncomment it to run it
/* eslint-disable no-undef */
testMultiplyArray(testArray);
// testMultiplyArrayTc0010(testArray);
// testMultiplyArrayTc0011(testArray01);
/* eslint-enable no-undef */

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here - Made answer to #4 and #5, sumArray() & productArray(), dynamic
// Also written with a for loop below
// This Function uses a for loop to get a dynamic list
function multiplyAnyArray(arry) { //eslint-disable-line
  let localProduct = 1;
  for (let i = 0; i < arry.length; i++) {
    localProduct = multiply(localProduct,arry[i])[0];
  }
  let message = `The numbers ${arry} have a product of ${localProduct}.`;
  return [localProduct, message];
}

// Make a random Array
let testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line
let testDynamicArray01 = Array.from({length: Math.ceil(Math.random() * 5)}, () => Math.ceil(Math.random() * 10)); // use Math.ceil to avoid zeros

// Here is the test for multiplyArray(); uncomment it to run it
/* eslint-disable no-undef */
testMultiplyAnyArray(testDynamicArray);
// testMultiplyAnyArrayTc0012(testDynamicArray00);
// testMultiplyAnyArrayTc0013(testDynamicArray01);
// testMultiplyAnyArrayTC0014(testDynamicArray01);
/* eslint-disable no-undef */
