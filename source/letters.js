'use strict'; // typescript на минималках

/**
 * Функция удаляет из строки символы, которые встречаются в ней больше одного раза.
 * @param {string} text Строка.
 * @param {boolean} flag Если true, то оставляет первый символ среди повторяющихся. Если false, то последний. Если аргумент не указан, то удаляет все повторяющиеся символы.
 * @returns {string} Конечный результат.
 */
const letters = (text, flag) => {
    // Map с частотным анализом
    const map = new Map();
    for (const letter of text)
        if (map.has(letter))
            map.set(letter, map.get(letter)+1);
        else
            map.set(letter, 1);

    // Повторно обходим данную строку и выдаём результат
    let res = "";
    for (const letter of text)
        if (map.get(letter) === 1 || map.get(letter) !== 0 && flag){
            res += letter;
            map.set(letter, 0);
        }
        else if (flag === false)
            map.set(letter, map.get(letter)-1);

    return res;
};
