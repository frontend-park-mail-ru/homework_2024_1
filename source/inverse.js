'use strict';

const NOT_ARRAY_ERROR = 'Первый аргумент не массив!';
const NOT_A_NUMBER_ERROR = 'Второй аргумент не типа "number"!';

/**
 * Проверяет является ли значение числом
 * @param {any} value - Любые входные данные
 * @returns {boolean} `true` or `false`
 * @example
 * ```
 * isNumber(1) returns true;
 * isNumber(new Number(1)) true;
 * isNumber('') returns false;
 * ```
 */
const isNumber = (value) => typeof value === 'number' || value instanceof Number;

/**
 *
 * @param {Array} arr - Массив данных
 * @param {number} num - Число, показывающее какие элементы не нужно переставлять
 * @returns массив с противоположным порядком
 * @example
 * ```
 * inverse([1, 2, 3]) returns [3, 2, 1];
 * inverse([1, 2, 3], 1) returns [1, 3, 2];
 * inverse([1, 2, 3], -1) returns [2, 1, 3];
 * ```
 */
const inverse = (arr, num) => {
    if (!Array.isArray(arr)) {
        throw new TypeError(NOT_ARRAY_ERROR);
    }

    if (num !== undefined && !isNumber(num)) {
        throw new TypeError(NOT_A_NUMBER_ERROR);
    }

    if (!num) {
        return arr.reverse();
    }

    const leftSlice = arr.slice(0, num);
    const rightSlice = arr.slice(num, arr.length);

    return num >= 0 ? [...leftSlice, ...rightSlice.reverse()] : [...leftSlice.reverse(), ...rightSlice];
};
