'use strict';

const sort = (sentence) => sentence.split(' ').map(wordSort).sort(ruComparator).join(' ');

const wordSort = (word) => {
  word = word.split('').sort(ruComparator).join('');
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

const ruComparator = (a, b) => {
  const collator = new Intl.Collator('ru-RU');
  return collator.compare(a, b);
};
