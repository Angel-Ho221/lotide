function assertEqual(actual, expected) {
  if (actual === expected) {
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

const pets = ["Genji", "Hanzo", "Tracer", "Beefball", "Wasabi"]
const lowerCasePets = ["genji", "hanzo", "tracer", "beefball", "wasabi"]

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
function sampleCallback(x) {
  return x + " after"
}
// map(pets, sampleCallback);

assertEqual(
  eqArrays(
    map([1,2,3], function(x) {return x + 1}), 
    [2,3,4]), 
  true
)


assertEqual(
  eqArrays(
    map([1,2,3], function(x) {return x + 1}), 
    [1,2,3]), 
  false
)

assertEqual(eqArrays(map(pets, function(name) {return name.toLowerCase()}), lowerCasePets), true)  

// Same as previous test, but broken up to be easier to read
const calculatedResult = map(pets, function(name) {return name.toLowerCase()})
const expectedResult = lowerCasePets
const isEqual = eqArrays(calculatedResult, expectedResult)
assertEqual(isEqual, true)