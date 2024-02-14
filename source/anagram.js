// Долматов Фёдор WEB-21
'use strict';

function anagram (words) {
    words = words ?? [];
    return Object.values(words.reduce((anagramDictionary, word) => {
        if (typeof word !== 'string'){
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
