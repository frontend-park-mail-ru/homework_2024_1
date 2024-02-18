'use strict';
/**
 * Преобразует римские числа в арабские и наоборот.
 * @param {string|number} roman - Если передается строка, то она рассматривается как римское число, если число, то как арабское.
 * @returns {string|number} - Возвращает строку  римское число, если вход был арабским числом, или число, если вход был римским числом.
 */
const roman = (roman) => {
    /**
     * Массив объектов, содержащий пары римских чисел и их соответствующих арабских значений.
     * @type {Array<{num: number, ch: string}>}
     */
    const romanNumbers = [
        {num: 1, ch: 'I'}, {num: 4, ch: 'IV'}, {num: 5, ch: 'V'},
        {num: 9, ch: 'IX'}, {num: 10, ch: 'X'}, {num: 40, ch: 'XL'},
        {num: 50, ch: 'L'}, {num: 90, ch: 'XC'}, {num: 100, ch: 'C'},
        {num: 400, ch: 'CD'}, {num: 500, ch: 'D'}, {num: 900, ch: 'CM'},
        {num: 1000, ch: 'M'},
    ];

    if (typeof (roman) === 'string' || typeof (roman.valueOf()) === 'string') {
        roman = roman.replace(' ', '').replace('.', '')
    }

    if (/^[IVXLCDMivxlcdm]+$/i.test(roman)) {
        roman = roman.toUpperCase().split('').reverse()
        let result = 0
        for (let idx = 0; idx < roman.length; idx++) {
            let curr = roman[idx]
            let currentPair = curr + (idx + 1 < roman.length ? roman[idx + 1] : '');
            let romanNumber = romanNumbers.find(pair =>
                pair.ch === currentPair.split("").reverse().join("") || pair.ch === curr.split("").reverse().join(""));

            if (currentPair.split("").reverse().join("") === romanNumber.ch) {
                idx += 1
            } else if (curr.split("").reverse().join("") === romanNumber.ch) {
                idx += 0
            }
            result += romanNumber.num;
        }
        return result
    }

    if (!Number.isNaN(parseInt(roman))) {
        roman = parseInt(roman);
        if (roman > 3999) {
            throw new RangeError('Число превышает максимально допустимое значение');
        }

        let pointer = 12;
        let result = '';
        let numLeft;
        if (typeof roman === 'string' || typeof roman.valueOf() === 'string') {
            numLeft = roman.replace(' ', '').replace('.', '');
        } else {
            numLeft = roman;
        }
        while (numLeft > 0) {
            while (romanNumbers[pointer].num > numLeft) {
                pointer -= 1;
            }
            result += romanNumbers[pointer].ch;
            numLeft -= romanNumbers[pointer].num;
        }
        return result;
    }
    return null;
}

