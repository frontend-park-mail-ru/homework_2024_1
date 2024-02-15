"use strict";

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
// ? Решение 5. 👍
const inverse = (arr, num) => {
    if (!Array.isArray(arr)) {
        throw new TypeError("Первый аргумент не массив!");
    }

    if (!num) {
        return arr.reverse();
    }

    if (typeof num !== "number") {
        throw new TypeError('Второй аргумент не типа "number"!');
    }

    const leftSlice = arr.slice(0, num);
    const rightSlice = arr.slice(num, arr.length);

    return num >= 0 ? [...leftSlice, ...rightSlice.reverse()] : [...leftSlice.reverse(), ...rightSlice];
};
