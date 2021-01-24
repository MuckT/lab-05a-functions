'use strict';

// You should not modify anything in this file, but feel free to look through it!
// Test for adding positive integers
function testSumTc0000() { //eslint-disable-line
  if (sum(4,7)[0] === 11 && sum(4,7)[1] === 'The sum of 4 and 7 is 11.') {
    console.log('%c TEST CASE 0000 FOR sum() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0000 FOR sum() FAILS', 'color: red');
  }
}
// Test for adding negative integers
function testSumTc0001() { //eslint-disable-line
  if (sum(-10,-20)[0] === -30 && sum(-10,-20)[1] === 'The sum of -10 and -20 is -30.') {
    console.log('%c TEST CASE 0001 FOR sum() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0001 FOR sum() FAILS', 'color: red');
  }
}

// Test for multiplying positive integers
function testMultiplyTc0002() { //eslint-disable-line
  if (multiply(5,9)[0] === 45 && multiply(5,9)[1] === 'The product of 5 and 9 is 45.') {
    console.log('%c TEST CASE 0002 FOR multiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0002 FOR multiply() FAILS', 'color: red');
  }
}

// Test for multiplying positive floats
function testMultiplyTc0003() { //eslint-disable-line
  if (multiply(5.3,9.5)[0] === 50.35 && multiply(5.3,9.5)[1] === 'The product of 5.3 and 9.5 is 50.35.') {
    console.log('%c TEST CASE 0003 FOR multiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0003 FOR multiply() FAILS', 'color: red');
  }
}

// Test of sum and multiplying positive integers
function testSumAndMultiplyTc0004() { //eslint-disable-line
  if (sumAndMultiply(4, 7, 5)[0] === 16 && sumAndMultiply(4, 7, 5)[1] === 140 && sumAndMultiply(4, 7, 5)[2] === '4 and 7 and 5 sum to 16.' && sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.') {
    console.log('%c TEST CASE 0004 FOR sumAndMultiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0004 FOR sumAndMultiply() FAILS', 'color: red');
  }
}

// Test of sum and multiplying negative integers
function testSumAndMultiplyTc0005() { //eslint-disable-line
  if (sumAndMultiply(-4, -7, -5)[0] === -16 && sumAndMultiply(-4, -7, -5)[1] === -140 && sumAndMultiply(-4, -7, -5)[2] === '-4 and -7 and -5 sum to -16.' && sumAndMultiply(-4, -7, -5)[3] === 'The product of -4 and -7 and -5 is -140.') {
    console.log('%c TEST CASE 0005 FOR sumAndMultiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0005 FOR sumAndMultiply() FAILS', 'color: red');
  }
}

// Test of sum and multiplying mixed positive and negative floats
function testSumAndMultiplyTc0006() { //eslint-disable-line
  if (sumAndMultiply(-4.5, 7.5, -5.25)[0] === -2.25 && sumAndMultiply(-4.5, 7.5, -5.25)[1] === 177.1875 && sumAndMultiply(-4.5, 7.5, -5.25)[2] === '-4.5 and 7.5 and -5.25 sum to -2.25.' && sumAndMultiply(-4.5, 7.5, -5.25)[3] === 'The product of -4.5 and 7.5 and -5.25 is 177.1875.') {
    console.log('%c TEST CASE 0006 FOR sumAndMultiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0006 FOR sumAndMultiply() FAILS', 'color: red');
  }
}

// Test sum of array with three items
function testSumArrayTc0007() { //eslint-disable-line
  if (sumArray(testArray00)[0] === 9 && sumArray(testArray00)[1] === '2,3,4 was passed in as an array of numbers, and 9 is their sum.') {
    console.log('%c TEST CASE 0007 FOR sumArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0007 FOR sumArray() FAILS', 'color: red');
  }
}

// Test sum of array with 5 items mixed float, int, positive, and negative
function testSumArrayTc0008() { //eslint-disable-line
  if (sumArray(testArray01)[0] === -4.3 && sumArray(testArray01)[1] === '1,2.2,-3,-4.5,0 was passed in as an array of numbers, and -4.3 is their sum.') {
    console.log('%c TEST CASE 0008 FOR sumArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0008 FOR sumArray() FAILS', 'color: red');
  }
}

function testMultiplyArray() { //eslint-disable-line
  if (multiplyArray(testArray00)[0] === 24 && multiplyArray(testArray)[1] === 'The numbers 2,3,4 have a product of 24.') {
    console.log('%c TEST FOR multiplyArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyArray() FAILS', 'color: red');
  }
}

function testMultiplyAnyArray() { //eslint-disable-line
  if (multiplyAnyArray(testDynamicArray)[0] === 120 && multiplyAnyArray(testDynamicArray)[1] === 'The numbers 1,2,3,4,5 have a product of 120.') {
    console.log('%c TEST FOR multiplyAnyArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyAnyArray() FAILS', 'color: red');
  }
}