function assertObjectsEqual(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let arrLength1 = Object.entries(object1).length;
  let arrLength2 = Object.entries(object2).length;

  if (arrLength1 !== arrLength2) {
    return false;
  }

  for (const [key, value] of Object.entries(object1)) {
    if (!(key in object2)) {
      return false;
    } else if (key in object2) {
      if (Array.isArray(value)) {
        if (!(eqArrays(value, object2[key]))) {
          return false;
        }
      } else {
        if (object2[key] !== value) {
          return false;
        }
      }
    }
  }

  return true;
}


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false