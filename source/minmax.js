'use strict';

/**
 * Finds minimum and maximum numbers from a string.
 * @param {string} numbersStr - The string, that contains numbers.
 * @returns {Array} - Array, that contains minimum and maximum numbers. If such numbers are not found, returns
 * [undefined, undefined].
 */
function minmax(numbersStr) {
    const numbersStrArr = numbersStr.replace(/[,!?]/g, '').split(' ');
    let numbersArr = numbersStrArr.map((number) => number ? Number(number) : NaN);
    numbersArr = numbersArr.filter(number => !isNaN(number));
    return numbersArr.length === 0 ? [undefined, undefined] : [Math.min(...numbersArr), Math.max(...numbersArr)];
}
