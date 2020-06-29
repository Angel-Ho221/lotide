const assertArraysEqual = require('../assertArraysEqual')
const head = require('../head');

assertArraysEqual(head([5,6,7]), 5);
assertArraysEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
