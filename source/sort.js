'use strict';

const sort = function (sentence) {
    //Проверка на валидность введенных данных
    if (typeof(sentence) != 'string') {
        console.log('На вход должна подаваться строка');
        return null;
    }

    //Получаем массив слов из предложения
    let words = sentence.toLowerCase().split(' ');
    
    //Сортируем каждое слово по возрастанию
    for (let i = 0; i < words.length; ++i) {
        words[i] = words[i].split('').sort((new Intl.Collator('ru')).compare).join('');
        //Переводим первую букву в верхний регистр
        words[i] = words[i][0].toUpperCase() + words[i].slice(1, words[i].length);
    }
    //Теперь ставим сами слова в алфавитном порядке
    words.sort((new Intl.Collator('ru')).compare);

    //Возвращаем объединенную строку
    return words.join(' ');
}