// Долматов Фёдор WEB-21
'use strict';

let anagram = words => {
    return Object.values(words.sort().reduce((anagramDictionary, word) => {
        const wordKey = word.toLowerCase().split('').sort().join('');
        anagramDictionary[wordKey] = anagramDictionary[wordKey] || [];
        anagramDictionary[wordKey].push(word);
        return anagramDictionary;
    }, {})).filter(anagramGroup => anagramGroup.length > 1);
};