'use strict';

/**
 * Функция возвращает единственную строку, содержащую слова из переданной строки, отсортированные в алфавитном порядке. 
 * Буквы в каждом слове также отсортированы в алфавитном порядке. Первая буква - заглавная.
 * @param {string} sentence 
 * @returns {string}
 * @throws {TypeError}
 */
const sort = (sentence) => {
    //Проверка на валидность введенных данных
    if (typeof sentence !== 'string' || !sentence instanceof String) {
        throw new TypeError('На вход должна подаваться строка');
    }

    //Получаем массив слов из предложения
    const words = sentence.toLowerCase().split(' ');
    
    //Сортируем каждое слово по возрастанию
    words.forEach((word, i, arr) => {
        arr[i] = word.split('').sort((new Intl.Collator('ru')).compare).join('');
        //Переводим первую букву в верхний регистр
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    });
    //Теперь ставим сами слова в алфавитном порядке
    words.sort((new Intl.Collator('ru')).compare);

    //Возвращаем объединенную строку
    return words.join(' ');
}
