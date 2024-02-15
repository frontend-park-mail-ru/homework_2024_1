'use strict'

/** 
 * Сортировка букв в слове
 * @param {string} word - слово, которое нужно отсортировать
 * @returns {string} - отсортированное слово
*/
const sortLetters = (word) => {
    const newWord = word
        .toLowerCase()
        .split('')
        .sort((letterA, letterB) => letterA.localeCompare(letterB))
        .join('');
    return newWord[0].toUpperCase() + newWord.slice(1);
}

/** Сортировка отдельных слов 
 * @param {string} sentence - неотсортированное предложение
 * @throws {TypeError}
 * @returns {string} - отсортированное предложение или null
*/
const sort = (sentence) => {
    if (typeof sentence !== "string") {
        return new TypeError("Необходимо ввести строку");
    }
    return sentence
        .trim()
        .split(' ')
        .filter((word) => word !== '') // удаляем лишние пробелы
        .map(sortLetters)
        .sort((wordA, wordB) => wordA.localeCompare(wordB))
        .join(' ');
}