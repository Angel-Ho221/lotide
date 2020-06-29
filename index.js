const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters'); 
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const without = require('./without');
const takeUntil = require('./takeUntil');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countOnly: countOnly,
  countLetters: countLetters,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  without: without,
  takeUntil: takeUntil
};