'use strict'

/* Сортировка букв в слове */
const sortLetters = (word) => {
    const newWord = word
        .toLowerCase()
        .split('')
        .sort((letter, char) => letter.localeCompare(char))
        .join('');
    return newWord[0].toUpperCase() + newWord.slice(1);
}

/* Сортировка отдельных слов */
const sort = (sentence) => {
    if (typeof (sentence) !== "string") {
        return "Необходимо ввести строку"
    }
    return sentence
        .trim()
        .split(' ')
        .filter((word) => word !== '') // удаляем лишние пробелы
        .map(sortLetters)
        .sort((word, ans) => word.localeCompare(ans))
        .join(' ');
}