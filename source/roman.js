'use strict';

/**
 * Массив пар с эквивалентами Римской и Десятичной системы счисления
 * @type {Array.<[number, string]>}
 */
const listWithConvertRomToDec = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]

/**
 * Преобразует числа из римской системы счисления в десятичную.
 * @param {string} number - Аргумент содержащий число в Римской системе счисления.
 * @returns {number} - Возвращает преобразованное число в десятичной системе счисления.
 */
const convertFromRomToDec = number => {
    let regex = new RegExp(/^M{0,4}(CM|CD|D?C{0,4})(XC|XL|L?X{0,4})(IX|IV|V?I{0,4})$/);
    if (!regex.test(number.toUpperCase())) {
        return null;
    }
    
    let decimal = 0

    for (let convert of listWithConvertRomToDec) {
        while (number.toLowerCase().startsWith(convert[1].toLowerCase())) {
            decimal += convert[0];
            number = number.slice(convert[1].length);
        }
    }
    return decimal;
}

/**
 * Преобразует числа из десятичной системы счисления в римскую.
 * @param {number} number - Аргумент содержащий число в десятичной системе счисления.
 * @returns {string} - Возвращает преобразованное число в римской системе счисления.
 */
const convertFromDecToRom = number => {
    if (number > 3999 || number <= 0) {
        return null;
    }

    let roman = "";
    
    while (number > 0) {

        for (let convert of listWithConvertRomToDec) {
            while (number >= convert[0]) {
                roman += convert[1];
                number -= convert[0];
            }
        }
    }
    return roman;
}

/**
 * Преобразует числа из римской системы счисления в десятичную и наоборот.
 * @param {string|number} number - Аргумент содержащий число в системе счисления из которой надо перевести
 * @returns {string|number} - Возвращает преобразованное число в другую систему счисления.
 */
const roman = number => {
    if (typeof (number) !== "number" && typeof (number) !== "string") {
        return null;
    }
    if (isNaN(number)) {
        return convertFromRomToDec(number);
    }
    return convertFromDecToRom(Number(number));
}
