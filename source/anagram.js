// Долматов Фёдор WEB-21
'use strict';

function anagram (words) {
    return Object.values(words.sort().reduce((anagramDictionary, word) => {
        if (typeof word !== 'string'){
            return anagramDictionary;
        }
        const wordKey = word.toLowerCase().split('').sort().join('');
        anagramDictionary[wordKey] = anagramDictionary[wordKey] ?? [];
        anagramDictionary[wordKey].push(word);
        return anagramDictionary;
    }, {})).filter(anagramGroup => anagramGroup.length > 1);
};