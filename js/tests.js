'use strict';

// You should not modify anything in this file, but feel free to look through it!
// Test sum with positive integers
function testSumTc0000() { //eslint-disable-line
  if (sum(4,7)[0] === 11 && sum(4,7)[1] === 'The sum of 4 and 7 is 11.') {
    console.log('%c TEST CASE 0000 FOR sum() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0000 FOR sum() FAILS', 'color: red');
  }
}
// Test sum with negative integers
function testSumTc0001() { //eslint-disable-line
  if (sum(-10,-20)[0] === -30 && sum(-10,-20)[1] === 'The sum of -10 and -20 is -30.') {
    console.log('%c TEST CASE 0001 FOR sum() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0001 FOR sum() FAILS', 'color: red');
  }
}

// Test multiply with positive integers
function testMultiplyTc0002() { //eslint-disable-line
  if (multiply(5,9)[0] === 45 && multiply(5,9)[1] === 'The product of 5 and 9 is 45.') {
    console.log('%c TEST CASE 0002 FOR multiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0002 FOR multiply() FAILS', 'color: red');
  }
}

// Test multiply with positive floats
function testMultiplyTc0003() { //eslint-disable-line
  if (multiply(5.3,9.5)[0] === 50.35 && multiply(5.3,9.5)[1] === 'The product of 5.3 and 9.5 is 50.35.') {
    console.log('%c TEST CASE 0003 FOR multiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0003 FOR multiply() FAILS', 'color: red');
  }
}

// Test sumAndMultiply with positive integers
function testSumAndMultiplyTc0004() { //eslint-disable-line
  if (sumAndMultiply(4, 7, 5)[0] === 16 && sumAndMultiply(4, 7, 5)[1] === 140 && sumAndMultiply(4, 7, 5)[2] === '4 and 7 and 5 sum to 16.' && sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.') {
    console.log('%c TEST CASE 0004 FOR sumAndMultiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0004 FOR sumAndMultiply() FAILS', 'color: red');
  }
}

// Test sumAndMultiply with negative integers
function testSumAndMultiplyTc0005() { //eslint-disable-line
  if (sumAndMultiply(-4, -7, -5)[0] === -16 && sumAndMultiply(-4, -7, -5)[1] === -140 && sumAndMultiply(-4, -7, -5)[2] === '-4 and -7 and -5 sum to -16.' && sumAndMultiply(-4, -7, -5)[3] === 'The product of -4 and -7 and -5 is -140.') {
    console.log('%c TEST CASE 0005 FOR sumAndMultiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0005 FOR sumAndMultiply() FAILS', 'color: red');
  }
}

// Test sumAndMultiply with mixed positive and negative floats
function testSumAndMultiplyTc0006() { //eslint-disable-line
  if (sumAndMultiply(-4.5, 7.5, -5.25)[0] === -2.25 && sumAndMultiply(-4.5, 7.5, -5.25)[1] === 177.1875 && sumAndMultiply(-4.5, 7.5, -5.25)[2] === '-4.5 and 7.5 and -5.25 sum to -2.25.' && sumAndMultiply(-4.5, 7.5, -5.25)[3] === 'The product of -4.5 and 7.5 and -5.25 is 177.1875.') {
    console.log('%c TEST CASE 0006 FOR sumAndMultiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0006 FOR sumAndMultiply() FAILS', 'color: red');
  }
}

// Test sumArray with positive integers
function testSumArrayTc0007() { //eslint-disable-line
  if (sumArray(testArray00)[0] === 9 && sumArray(testArray00)[1] === '2,3,4 was passed in as an array of numbers, and 9 is their sum.') {
    console.log('%c TEST CASE 0007 FOR sumArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0007 FOR sumArray() FAILS', 'color: red');
  }
}

// Test sumArray with mixed: float, int, positive, and negative
function testSumArrayTc0008() { //eslint-disable-line
  if (sumArray(testArray01)[0] === -4.3 && sumArray(testArray01)[1] === '1,2.2,-3,-4.5,0 was passed in as an array of numbers, and -4.3 is their sum.') {
    console.log('%c TEST CASE 0008 FOR sumArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0008 FOR sumArray() FAILS', 'color: red');
  }
}

// Test sumArray with a random number of characters, between zero and forty, with a value, between zero and twenty
function testSumArrayTc0009() { //eslint-disable-line
  if (sumArray(testArray02)[0] === testArray02.reduce((a, b) => a + b) && sumArray(testArray02)[1] === `${testArray02.toString()} was passed in as an array of numbers, and ${testArray02.reduce((a, b) => a + b)} is their sum.`) {
    console.log('%c TEST CASE 0009 FOR sumArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0009 FOR sumArray() FAILS', 'color: red');
  }
}


// Test productArray with positive integers
function testMultiplyArrayTc0010() { //eslint-disable-line
  if (productArray(testArray00)[0] === 24 && productArray(testArray00)[1] === 'The numbers 2,3,4 have a product of 24.') {
    console.log('%c TEST CASE 0010 FOR productArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0010 FOR productArray() FAILS', 'color: red');
  }
}

// Test productArray of an array with mixed: floats and integers both positive, and negative
function testMultiplyArrayTc0011() { //eslint-disable-line
  if (productArray(testArray01)[0] === 0 && productArray(testArray01)[1] === 'The numbers 1,2.2,-3,-4.5,0 have a product of 0.') {
    console.log('%c TEST CASE 0011 FOR productArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0011 FOR productArray() FAILS', 'color: red');
  }
}

// Test productArray with positive integers
function testMultiplyAnyArrayTc0012() { //eslint-disable-line
  if (productArray(testDynamicArray00)[0] === 120 && productArray(testDynamicArray00)[1] === 'The numbers 1,2,3,4,5 have a product of 120.') {
    console.log('%c TEST CASE 0012 FOR productArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0012 FOR productArray() FAILS', 'color: red');
  }
}

// Test productArray with a random number of characters, between one and five, with a value, between 1 and 10
function testMultiplyAnyArrayTc0013() { //eslint-disable-line
  if (productArray(testDynamicArray01)[0] === testDynamicArray01.reduce((a, b) => a * b) && productArray(testDynamicArray01)[1] === `The numbers ${testDynamicArray01.toString()} have a product of ${testDynamicArray01.reduce((a, b) => a * b)}.`) {
    console.log('%c TEST CASE 0013 FOR productArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0013 FOR productArray() FAILS', 'color: red');
  }
}

// Test multiplyAnyArray with a random number of characters, between one and five, with a value, between 1 and 10
function testMultiplyAnyArrayTC0014() { //eslint-disable-line
  if (multiplyAnyArray(testDynamicArray01)[0] === testDynamicArray01.reduce((a, b) => a * b) && multiplyAnyArray(testDynamicArray01)[1] === `The numbers ${testDynamicArray01.toString()} have a product of ${testDynamicArray01.reduce((a, b) => a * b)}.`) {
    console.log('%c TEST CASE 0014 FOR multiplyAnyArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST CASE 0014 FOR multiplyAnyArray() FAILS', 'color: red');
  }
}