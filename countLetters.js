function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}

const countLetters = function (sentence) {
  let countingLetter = {}

  for (let letter of sentence) {
    if (letter !== " ") {
      // if letter is already in countingLetter, then just add one to countingLetter[letter]
      if (letter in countingLetter) {
        console.log(countingLetter);
        countingLetter[letter] += 1;
        console.log(countingLetter);
      // if letter is NOT in countingLetter, then we create the property for that letter by doing countingLetter[letter] = 1
      // it is equal to 1 because this is the first time we encounter this letter
      } else if (!(letter in countingLetter)) {
        console.log(countingLetter);
        countingLetter[letter] = 1;
        console.log(countingLetter);
      }
    }
  }
  return countingLetter;
}

console.log(countLetters("hello"));
