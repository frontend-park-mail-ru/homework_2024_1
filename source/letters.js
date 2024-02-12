'use strict';

/**
 * Функция составляет Map с частотным анализом каждого элемента входного массива.
 * @param {Array} arr Входной массив.
 * @returns {Map} Map, где ключ - элемент, значение - его частота.
 */
const freqMap = (arr) => {
    // в рамках этой задачи вместо array можно юзать string, но пускай функция будет более универсальной
    if (!(arr instanceof Array)) {
        throw new Error("Функция работает только с массивами");
    }
    return arr.reduce(
        (m, elem) => m.set(elem, (m.get(elem) || 0) + 1),
        new Map()
    );
}

/**
 * Функция удаляет из массива элементы, которые встречаются более одного раза.
 * @param {Array} arr Входной массив.
 * @param {Map} freq Map с частотным анализом элементов.
 * @param {boolean} flag Если true, то оставляет первый элемент среди повторяющихся. Если false, то последний. Если аргумент не указан, то удаляет все повторяющиеся элементы.
 * @returns {Array} Конечный результат.
 */
const arrayByFreq = (arr, freq, flag) => {
    if (!(arr instanceof Array)) {
        throw new Error("Функция работает только с массивами");
    }
    return arr.reduce(
        (acc, elem) => {
            if (freq.get(elem) === 1 || (freq.get(elem) !== 0 && flag)){
                freq.set(elem, 0);
                return acc + [elem];
            }
            if (flag === false) {
                freq.set(elem, freq.get(elem)-1);
            }
            return acc;
        },
        []
    );
}

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
    return arrayByFreq(Array.from(text), freqMap(Array.from(text)), flag).toString();
};
