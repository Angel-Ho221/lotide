const assertArraysEqual = require('./assertArraysEqual');

function middle(array) {
  let arrLength = array.length
  // console.log(arrLength);
  let midpoint = null;
  let midElements = [];

  if (arrLength > 2) {
    if (arrLength % 2 === 0) {
      midpoint = arrLength / 2;
      // console.log(midpoint);

      let midIndex = midpoint - 1;
      let midIndex2 = midpoint;
      // console.log(midIndex);
      // console.log(midIndex2);
      
      midElements.push(array[midIndex], array[midIndex2]);
      return midElements;
    } else if (arrLength % 2 === 1) {
      midpoint = Math.ceil(arrLength / 2);
      // console.log(midpoint);

      let midIndex = midpoint - 1;
      // console.log(array[midIndex])
      midElements.push(array[midIndex]);
      return midElements;
    }
  } else {
    return midElements;
  }
  
}
module.exports = middle;



//Implement middle which will take in an array and return the middle-most element(s) of the given array.
//should return an array with only the middle element(s)

//1. find out the length of the array
//2. divide the last index of the array by two
//3. this will give us the index of where the middle number is
//4. if the number has a remainder, round it up (Math.ceiling)
//4. if there is a remainder to the division, return the index of number and the index + 1 (the index next to it as well)
//5. if there's less than two elements, return an empty array
// reutrn empty array if there's only one or two elements
// return the middle one element for arrays with odd numbers
// return the middle two elements for ararys with even numbers