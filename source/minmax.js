'use strict';

/** @function minmax
 * @description Finds minimum and maximum numbers from a string.
 * @param {string} numbersStr - The string, that contains numbers.
 * @returns {Array} - Array, that contains minimum and maximum numbers. If such numbers are not found, returns [undefined, undefined].
 */
const minmax = numbersStr => {
    const numbersStrArr = numbersStr.split(' ')
        .filter(Boolean)
        .map(numberStr => {
            if (numberStr === 'Infinity' || numberStr === '-Infinity') {
                return numberStr;
            }
            return numberStr.replace(/\D$/, '')
        });

    const numbersArr = numbersStrArr.map(Number)
        .filter(number => !isNaN(number));

    return numbersArr.length === 0 ?
        [undefined, undefined] :
        [Math.min(...numbersArr), Math.max(...numbersArr)];
}
