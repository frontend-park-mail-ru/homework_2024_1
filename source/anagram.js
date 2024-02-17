// Долматов Фёдор WEB-21

'use strict';
/**
 * Returns groups of anagrams found within input data.
 * @author roflanpotsan
 * @function
 * @param {string[]} words - input data consisting of any number of words
 * @returns {string[][]}  - output data consisting of identified groups of anagrams
 */
const anagram = (words) => {
    if (!Array.isArray(words)) {
        return [];
    }
    return Object.values(words.reduce((anagramDictionary, word) => {
        if (typeof word !== 'string' && !(word instanceof String)){
            return anagramDictionary;
        }
        const wordKey = word.toLowerCase().split('').sort().join('');
        anagramDictionary[wordKey] = anagramDictionary[wordKey] ?? [];
        let idx = anagramDictionary[wordKey].findIndex(x => x > word);
        idx = idx !== -1 ? idx : anagramDictionary[wordKey].length;
        anagramDictionary[wordKey].splice(idx, 0, word);
        return anagramDictionary;
    }, {})).filter(anagramGroup => anagramGroup.length > 1).sort();
};
