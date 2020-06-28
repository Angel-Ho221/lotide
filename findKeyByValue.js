function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}

const pets = {
  firstDog: "Genji",
  secDog: "Tracer",
  thirdDog: "Wasabi",
  cat: "Hanzo",
  hedgehog: "Beefball",
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(pets, name) {
  for (const [key, value] of Object.entries(pets)) {
    if (value === name) {
      return key;
    } 
  }

  return undefined;
};

const findKeyByValue2 = function(pets, name) {
  for (const pet of Object.keys(pets)) {
    if (pets[pet] === name) {
      return pet;
    }
  }

  return undefined;
}
assertEqual(findKeyByValue(pets, "Genji"), "firstDog");
assertEqual(findKeyByValue2(pets, "Hanzo"), "cat");


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);