"use strict";

// ? Решение 1. Красивое и короткое, но не лучшее,
// ? т.к. происходит изменение аргумента arr.
/**
const inverse = (arr, num = 0) => {
    const slice = arr.splice(num);

    return num >= 0
        ? [...arr, ...slice.reverse()]
        : [...arr.reverse(), ...slice];
};
 */

// ? Решение 2. Самое безопасное. Можно передавать все, что угодно.
// ? Но это не всегда хорошо, т.к. может быть непонятно, в чем проблема, если она есть
/**
const inverse = (arr, num) => {
    if (!Array.isArray(arr)) {
        return undefined;
    }

    if (!num || typeof num !== "number") {
        return arr.reverse();
    }

    return num >= 0
        ? [...arr.slice(0, num), ...arr.slice(num, arr.length).reverse()]
        : [...arr.slice(0, num).reverse(), ...arr.slice(num, arr.length)];
};
 */

// ? Решение 3. Самое короткое, но не лучшее,
// ? т.к. происходит много действий с массивом при отсутствии num.
/**
const inverse = (arr, num = 0) =>
    num >= 0
        ? [...arr.slice(0, num), ...arr.slice(num, arr.length).reverse()]
        : [...arr.slice(0, num).reverse(), ...arr.slice(num, arr.length)];
 */

// ? Решение 4. Имеет место быть.
/**
const inverse = (arr, num) => {
    if (!num) {
        return arr.reverse();
    }

    return num > 0
        ? [...arr.slice(0, num), ...arr.slice(num, arr.length).reverse()]
        : [...arr.slice(0, num).reverse(), ...arr.slice(num, arr.length)];
};
*/

// ? Решение 5. 👍
const inverse = (arr, num) => {
    if (!Array.isArray(arr)) {
        throw new TypeError("Первый аргумент не массив!");
    }

    if (typeof num !== "number") {
        throw new TypeError('Второй аргумент не типа "number"!');
    }

    if (!num) {
        return arr.reverse();
    }

    return num >= 0
        ? [...arr.slice(0, num), ...arr.slice(num, arr.length).reverse()]
        : [...arr.slice(0, num).reverse(), ...arr.slice(num, arr.length)];
};
