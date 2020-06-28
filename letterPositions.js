
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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] !== " "){
      if (sentence[i] in results) {
        results[sentence[i]].push(i);
        // console.log(results[sentence[i]])
      } else if (!(sentence[i] in results)) {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};
// console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").l, [2, 3]);
//1. go through all the letters in sentence (elements in our argument)
//2. if the character is a space, don't count it (if letter !== " " then we do something)
//3. if the character is not in count yet, +1 from the previous lettter
//4. if the character does exist, go back to that existing letter and input its position

// We'll implement a new function letterPositions which will return all the indices 
//(zero-based positions) in the string where each character is found.

//For each letter, instead of returning just one number to represent its number of occurrences, 
//multiple numbers may be needed to represent all the places in the string that it shows up.

// assertEqual(eqArrays(letterPositions("hello"))); 