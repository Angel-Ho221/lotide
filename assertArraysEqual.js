
function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}

function eqArrays(arrayOne, arrayTwo) {
  // test to see if arrayOne equals to arrayTwo
  let equal = true
  if (arrayOne.length !== arrayTwo.length) {
    equal = false 
    return equal;
  } 
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      equal = true
    } else {
      equal = false
    }
  }
  return equal;
}

module.exports = assertArraysEqual;