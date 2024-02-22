'use strict';
/**
 * Группирует слова по анаграммам из массива слов.
 *
 * @param {string[]} words Массив слов для группировки по анаграммам.
 * @return {string[][]} Выходной массив слов-анаграмм.
 */
const anagram = (words) => {
  if (!Array.isArray(words)) {
    try {
      throw new TypeError('Input should be an array!!!');
    } catch (e) {
      console.log(e instanceof TypeError); // true
      console.log(e.message); // "Привет"
      console.log(e.name); // "TypeError"
      console.log(e.stack); // Стек ошибок
    }
  }

  const groupsOfWords = words.reduce((groups, word) => {
    if (typeof word !== 'string' && !(word instanceof String)) {
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
