function assertArraysEqual(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}

function eqArrays(arrayOne, arrayTwo) {
  
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

function without(source, itemsToRemove) {
const result = source.filter(elm => !itemsToRemove.includes(elm));
// console.log(result);
return result;
}
// console.log(result);
without(["a", "b", "c"], ["b"]) 
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);


  // take in source and itemsToRemove array
  // return a new array with those elements from source that are not present in the itemsToRemove

// // for (let i = 0; i < source.length; i++){
//   if (source[i] !== itemsToRemove[i]) {
//    result.push(source[i]);
//   } 
