'use strict';
/** комментарий в формате JSdoc*/
let anagram = words => {
  if (!Array.isArray(words)) {
    throw new Error("Input should be an array!!!")
  }

  let groupsOfWords = {};

  groupsOfWords = words.reduce((accumulator, word) => {
    let wordSorted = word.split('').sort().join('');
    accumulator[wordSorted] = (accumulator[wordSorted] || []).concat(word);

    return accumulator;
  }, {});

  let filteredGroups = Object.values(groupsOfWords).filter(group => group.length > 1);
  filteredGroups.forEach(group => group.sort());
  filteredGroups.sort((a, b) => a[0].localeCompare(b[0]));

  return filteredGroups;

};