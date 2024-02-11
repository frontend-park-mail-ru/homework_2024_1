// Макаров Никита WEB-22

'use strict';

const greatestCommonDivisor = (a, b) => (b === 0 ? a : greatestCommonDivisor(b, a % b));

const validateNaturalNumbers = numbers => {
    return numbers.every(number => Number.isInteger(number) && number > 0) && !(numbers.length === 0);
}

const euclid = (...numbers) => {
    if (!validateNaturalNumbers(numbers)) {
        throw new Error("Все числа должны быть натуральными.");
    }

    if (numbers.length === 1) {
        return numbers[0];
    }

    return numbers.reduce(greatestCommonDivisor);
};
