'use strict';

/**
 * Функция для группироваки анаграмм из массива слов.
 * @param {Array.<string>} words - Массив слов, в котором нужно найти анаграммы.
 * @returns {Array.<Array.<string>>} - Массив массивов строк, где каждый внутренний массив является группой анаграмм.
 * @throws {Error} Если входной аргумент не является массивом.
 * @throws {Error} Если хотя бы один элемент входного массива не является строкой.
 */
const anagram = (words) => {
    if (!Array.isArray(words)) {
        throw new Error("Input must be an array");
    }

    if (!words.every(word => typeof word === 'string')) {
        throw new Error("All elements in the input array must be strings");
    }

    let groups = new Map();

    words.forEach(word => {
        let sorted = word.toLowerCase().split("").sort().join("");
        if (groups.has(sorted)) {
            groups.get(sorted).push(word);
        } else{
            groups.set(sorted, [word]);
        }
    });

    const anagramGroups = [...groups.values()].filter(group => group.length > 1);
    const sortedAnagramGroups = anagramGroups.map(group => group.sort()).sort();

    return sortedAnagramGroups;
};
