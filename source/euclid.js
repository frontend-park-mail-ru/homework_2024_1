'use strict';

/**
 * Returns greatest common diviser of two numbers
 * @param {Number} num1
 * @param {Number} num2
 * @returns {Number} gcd
 */
const gcd = (num1, num2) => {
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
const euclid = (...numbers) => {
    if (!numbers.length) {
        return null;
    }

    let result = numbers[0];
    
    numbers.forEach((number) => {
        result = gcd(result, number);
    })

    return result;
}