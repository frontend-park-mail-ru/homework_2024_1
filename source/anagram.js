'use strict';
/**
 * Группирует слова по анаграммам из массива слов.
 *
 * @param {string[]} words Массив слов для группировки по анаграммам.
 * @return {string[][]} Выходной массив слов-анаграмм.
 */
const anagram = (words) => {
  if (!Array.isArray(words)) {
    throw new Error("Input should be an array!!!")
  }

  const groupsOfWords = words.reduce((groups, word) => {
    if (typeof word !== 'string') {
      return groups;
    }

    const wordSorted = word.split('').sort().join('');
    groups[wordSorted] = [...(groups[wordSorted] || []), word];

    return groups;
  }, {});

  const filteredGroups = Object.values(groupsOfWords).filter(group => group.length > 1);
  filteredGroups.forEach(group => group.sort());
  filteredGroups.sort((a, b) => a[0].localeCompare(b[0]));

  return filteredGroups;

};
