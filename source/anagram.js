'use strict';

const anagram = function (words) {
    const groupsOfWords = {};
    words.forEach(word => {
        const wordAfterSortChars = word.split('').sort().join('');

        if (!groupsOfWords[wordAfterSortChars]) {
            groupsOfWords[wordAfterSortChars] = [];
        }

        groupsOfWords[wordAfterSortChars].push(word);
    });

    const filteredGroups = Object.values(groupsOfWords).filter(group => group.length > 1);

    filteredGroups.forEach(group => group.sort());
    filteredGroups.sort((a, b) => a[0].localeCompare(b[0]));

    return filteredGroups;
}