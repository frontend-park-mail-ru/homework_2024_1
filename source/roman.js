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
        {num: 1000, ch: 'M'}, {num: 4000, ch: 'MIƆƆƆ'}, {num: 5000, ch: 'IƆƆƆ'},
    ];

    if (typeof(roman) === 'string' || typeof(roman.valueOf()) === 'string') {
        roman = roman.replace(' ', '').replace('.', '')
    }

    if (/^[IVXLCDMivxlcdm]+$/i.test(roman)) {
        roman = roman.toUpperCase();
        let idx = 14;
        let pointer = 0;
        let result = 0;
        while (pointer < roman.length && idx >= 0) {
            while (!roman.startsWith(romanNumbers[idx].ch, pointer)) {
                idx--;
                if (idx < 0) break;
            }
            result += romanNumbers[idx].num;
            pointer += romanNumbers[idx].ch.length;
        }
        return result;
    }

    if (!isNaN(parseInt(roman))) {
        roman = parseInt(roman);
        if (roman > 8999) {
            throw new RangeError('Число превышает максимально допустимое значение');
        }

        let pointer = 14;
        let result = '';
        let numLeft;
        if (typeof (roman) === 'string') {
            numLeft = roman.replace(' ', '').replace('.', '');
        } else {
            numLeft = roman;
        }
        while (subSum > 0) {
            while (romanNumbers[pointer].num > subSum) {
                pointer -= 1;
            }
            result += romanNumbers[pointer].ch;
            numLeft -= romanNumbers[pointer].num;
        }
        return result;
    }
    return null;
}


