"use strict";

/**
 * Returns greatest common diviser of two numbers
 * @param {Number} num1
 * @param {Number} num2
 * @returns {Number} gcd
 */
function gcd(num1, num2) {
    if (!num1 && !num2) {
        throw new Error("numbers shouldn't be 0");
    }
    if (Math.floor(num1) !== num1 || Math.floor(num2) !== num2) {
        throw new RangeError("numbers should be natural");
    }

    if (!num2) {
        return num1;
    }

    return gcd(num2, num1 % num2);
}

/**
 * Returns greatest common diviser of many numbers
 * @param  {...Number} numbers
 * @returns {Number} gcd of all numbers
 */
function euclid(...numbers) {
    if (!numbers.length) {
        return null;
    }

    const result = numbers.reduce(function (result, current) {
        return gcd(result, current);
    }, 0);

    return Math.abs(result);
}
