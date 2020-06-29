const assertEqual = require('./assertEqual');

// function eqArrays takes in two arrays and returns true or false based on a perfect match
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
module.exports = eqArrays; 