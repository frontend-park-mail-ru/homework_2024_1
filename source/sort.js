'use strict';

/**
 * Sorts words and letters.
 * @param {string} sentence - sentence or word you want to sort
 * @returns {string} - sorted sentence with sorted words
 */

const sort = (sentence) => {
  if (!isString(sentence) || sentence.length === 0) {
    return null;
  }

  return quickSort(sentence.split(' ').map(wordSort)).join(' ');
};

/**
 * Check if value is string.
 * @param {*} value - value to check
 * @returns {boolean}
 */

const isString = (value) =>
  typeof value === 'string' || value instanceof String;

/**
 * Sorts letters in word and changes letters case.
 * @param {string} word - word you want to sort
 * @returns {string} - word with sorted letters and first capital letter
 */

const wordSort = (word) => {
  word = quickSort(word.split('')).join('');
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

/**
 * Function to compare specific russian symbols (e.g. 'ё').
 * @param {string} a - first symbol
 * @param {string} b - another symbol
 * @returns {number} - comparison result
 */

const ruComparator = (a, b) => {
  const collator = new Intl.Collator('ru-RU');
  return collator.compare(a, b);
};

/**
 * Sorts array of elements.
 * @param {Array.<string>} arr - array you want to sort
 * @returns {Array.<string>} - sorted array
 */

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const leftArr = [];
  const rightArr = [];

  let pivot = arr[0];

  arr.slice(1).forEach((val) => {
    if (ruComparator(val, pivot) === -1) {
      leftArr.push(val);
    } else {
      rightArr.push(val);
    }
  });

  let sortLeft = quickSort(leftArr);
  let sortRight = quickSort(rightArr);

  return [...sortLeft, pivot, ...sortRight];
};
