'use strict'

function sortLetters(word) {
    word = word.toLowerCase().split('').sort((letter, bukva) => letter.localeCompare(bukva)).join(''); // сортируем буквы в слове
    return word[0].toUpperCase() + word.slice(1);
}

function sort(sentence) {
    sentence = sentence.trim().split(' ').filter(word => word !== ''); // удаляем лишние пробелы
    return sentence.map(sortLetters).sort((word, slovo) => word.localeCompare(slovo)).join(' ');
}