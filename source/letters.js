'use strict';


/**
 * Функция проверяет, что аргумент является строка (будь то примитивная строка или String).
 * Если аргумент не является строкой, то выбрасывает TypeError.
 * @param {string|String} str Входная строка.
 * @returns {string} Та же строка.
 */
const checkStr = (str) => str instanceof String || typeof str == "string" ? str : (() => {throw new TypeError("Функция работает только со строками");})();


/**
 * Функция составляет Map с частотным анализом каждого символа входной строки.
 * @param {string|String} str Входная строка.
 * @returns {Map} Map, где ключ - символ, значение - его частота.
 */
const freqMap = (str) =>
    Array.from(checkStr(str)).reduce(
        (m, elem) => m.set(elem, (m.get(elem) || 0) + 1),
        new Map()
    );


/**
 * Функция удаляет из строки символы, которые встречаются более одного раза.
 * @param {string|String} str Входная строка.
 * @param {Map} freq Map с частотным анализом символов.
 * @param {boolean} [flag] Если true, то оставляет первый элемент среди повторяющихся. Если false, то последний. Если аргумент не указан, то удаляет все повторяющиеся элементы.
 * @returns {string} Конечный результат.
 */
const strByFreq = (str, freq, flag) =>
    Array.from(checkStr(str)).reduce(
        (acc, elem) => {
            if (freq.get(elem) === 1 || (freq.get(elem) && flag)) {
                freq.set(elem, 0);
                return acc + elem;
            }
            if (flag === false) {
                freq.set(elem, freq.get(elem) - 1);
            }
            return acc;
        },
        ""
    );


/**
 * Функция удаляет из строки символы, которые встречаются в ней больше одного раза.
 * @param {string|String} text Строка.
 * @param {boolean} [flag] Если true, то оставляет первый символ среди повторяющихся. Если false, то последний. Если аргумент не указан, то удаляет все повторяющиеся символы.
 * @returns {string} Конечный результат.
 */
// проверки на тип нет, т.к. в функциях strByFreq и freqMap она и так есть
const letters = (text, flag) => strByFreq(text, freqMap(text), flag);
