'use strict';

/**
 * Sorts words and letters.
 * @param {string} sentence - sentence or word you want to sort
 * @returns {string} - sorted sentence with sorted words
 */

const sort = (sentence) =>
  quickSort(sentence.split(' ').map(wordSort)).join(' ');

const wordSort = (word) => {
  word = quickSort(word.split('')).join('');
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

const ruComparator = (a, b) => {
  const collator = new Intl.Collator('ru-RU');
  return collator.compare(a, b);
};

const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  let leftArr = [];
  let rightArr = [];
  
  let pivot = arr[0];

  arr.slice(1).forEach((val) => {
    if (ruComparator(val, pivot) === -1) leftArr.push(val);
    else rightArr.push(val);
  });

  let sortLeft = quickSort(leftArr);
  let sortRight = quickSort(rightArr);

  return [...sortLeft, pivot, ...sortRight];
};
