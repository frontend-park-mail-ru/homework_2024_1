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
        {num: 1, ch: "I"}, {num: 4, ch: "IV"}, {num: 5, ch: "V"},
        {num: 9, ch: "IX"}, {num: 10, ch: "X"}, {num: 40, ch: "XL"},
        {num: 50, ch: "L"}, {num: 90, ch: "XC"}, {num: 100, ch: "C"},
        {num: 400, ch: "CD"}, {num: 500, ch: "D"}, {num: 900, ch: "CM"},
        {num: 1000, ch: "M"}, {num: 4000, ch: "MIƆƆƆ"}, {num: 5000, ch: "IƆƆƆ"},
    ];

    if (!/^(string|number)$/.test(typeof roman) && !(roman instanceof String)) {
        return null;
    }

    if (isNaN(roman)) {
        roman = roman.toUpperCase();
        if (/^[IVXLCDM]+$/i.test(roman)) {
            let idx = 14;
            let pointer = 0;
            let result = 0;
            while (pointer < roman.length) {
                while (roman.substring(pointer, pointer + romanNumbers[idx].ch.length) !== romanNumbers[idx].ch) {
                    idx--;
                    if (idx === 0) break;
                }
                result += romanNumbers[idx].num;
                pointer += romanNumbers[idx].ch.length;
            }
            return result;
        } else {
            return null;
        }
    } else {
        if (roman > 8999) {
            return null;
        }
        let pointer = 14;
        let result = "";
        let A;
        if (typeof (roman) === "string") {
            A = roman.replace(" ", "").replace(".", "");
        } else {
            A = roman;
        }
        while (A > 0) {
            while (romanNumbers[pointer].num > A) {
                pointer -= 1;
            }
            result += romanNumbers[pointer].ch;
            A -= romanNumbers[pointer].num;
        }
        return result;
    }
}


