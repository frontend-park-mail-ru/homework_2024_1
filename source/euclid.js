// Макаров Никита WEB-22

'use strict';

/**
 * Calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
 *
 * @param {number} a - The first integer.
 * @param {number} b - The second integer.
 * @returns {number} The greatest common divisor of the given integers.
 */
const greatestCommonDivisor = (a, b) => (b === 0 ? a : greatestCommonDivisor(b, a % b));

/**
 * Validates an array of natural numbers.
 *
 * @param {number[]} numbers - An array of natural numbers to be validated.
 * @returns {boolean} True if the input is a non-empty array of positive integers, false otherwise.
 */
const validateNaturalNumbers = numbers => {
    return numbers && numbers.length && numbers.every(number => Number.isInteger(number) && number > 0);
}

/**
 * Calculates the greatest common divisor (GCD) of multiple natural numbers using the Euclidean algorithm.
 *
 * @param {...number} numbers - Natural numbers for which the GCD needs to be calculated.
 * @throws {TypeError} Throws an error if any input is not a natural number or the input array is empty.
 * @returns {number} The greatest common divisor of the given natural numbers.
 */
const euclid = (...numbers) => {
    if (!validateNaturalNumbers(numbers)) {
        throw new TypeError("Все числа должны быть натуральными.");
    }

    if (!numbers.length) {
        return numbers[0];
    }

    return numbers.reduce(greatestCommonDivisor);
};
