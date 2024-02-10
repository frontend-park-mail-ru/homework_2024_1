// Макаров Никита WEB-22

'use strict';

const greatestCommonDivisor = (a, b) => (b === 0 ? a : greatestCommonDivisor(b, a % b));

const euclid = (...numbers) => {
    if (numbers.some(isNaN)) {
        return 'Все элементы должны быть натуральными числами.';
    }

    if (numbers.some(number => !Number.isInteger(number) || number <= 0)) {
        return 'Все числа должны быть натуральными.';
    }

    if (numbers.length < 2) {
        return numbers[0];
    }

    let result = numbers[0];
    numbers.forEach(number => {
        result = greatestCommonDivisor(result, number);
    });

    return result;
};
