function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}
function head(array) {
  return array[0];
}

function tail(array) {
  let arguments = array.slice(1);
  return arguments;
}

module.exports = tail;


