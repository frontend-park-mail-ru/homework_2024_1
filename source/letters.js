'use strict';

/**
 * Функция удаляет из строки символы, которые встречаются в ней больше одного раза.
 * @param {string} text Строка.
 * @param {boolean} flag Если true, то оставляет первый символ среди повторяющихся. Если false, то последний. Если аргумент не указан, то удаляет все повторяющиеся символы.
 * @returns {string} Конечный результат.
 */
const letters = (text, flag) => {
    if (typeof text !== "string") {
        throw new Error("Аргумент text обязательно должен быть типа string")
    }

    // Map с частотным анализом
    const map = Array.from(text).reduce(
        (m, letter) => m.set(letter, (m.get(letter) || 0) + 1),
        new Map()
    );

    // Повторно обходим данную строку и выдаём результат
    return Array.from(text).reduce(
        (res, letter) => {
            if (map.get(letter) === 1 || (map.get(letter) !== 0 && flag)){
                map.set(letter, 0);
                return res + letter;
            } else if (flag === false) {
                map.set(letter, map.get(letter)-1);
            }
            return res;
        },
        ""
    );
};
