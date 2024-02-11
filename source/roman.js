'use strict'; // строгий режим

/**
 * Преобразует число десятичной позиционной системы в римскую и обратно.
 * @param {(string|number)} input - Входное значение для преобразования.
 * @returns {(number|string|null)} - Преобразованное значение или null, если входные данные не поддерживаются.
 */

const roman = (input) => {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    input = preprocessInput(input);

    switch (typeof input) {
        case 'string':
            let decimalValue = 0;
            let index = 0;

            romanNumerals.forEach(({ value, numeral }) => {
                while (index < input.length && input.startsWith(numeral, index)) {
                    decimalValue += value;
                    index += numeral.length;
                }
            });

            return decimalValue;
        case 'number':
            let romanNumeral = '';

            romanNumerals.forEach(({ value, numeral }) => {
                while (input >= value) {
                    romanNumeral += numeral;
                    input -= value;
                }
            });

            return romanNumeral;
        default:
            return null;
    }
};

/**
 * Предобрабатывает входное значение.
 * @param {(string|number)} input - Входное значение для обработки.
 * @returns {(string|number|null)} - Обработанное значение или null, если входные данные не поддерживаются.
 */

function preprocessInput(input) {
    if (typeof input !== 'number' && typeof input !== 'string') {
        return null;
    }
    const romanRegexp = /^[IVXLCDM]+$/;

    const numericInput = parseInt(input, 10);
    if (!isNaN(numericInput)) {
        return numericInput;
    }

    input = input.toUpperCase();

    if (!romanRegexp.test(input)) {
        return null;
    }

    return input;
}
