'use strict';

/**
 * Format array of Integer values into string with columns
 *
 * @param {number[]} intArray - array of integer values
 * @param {number} columns - number of columns
 * @returns {string} - formatted string
 * @throws {TypeError} - Will throw an error if arguments has wrong type
 */
const format = (intArray, columns) => {
    // type checking
    if (!Array.isArray(intArray) ||
        intArray.some(item => !Number.isInteger(item)) ||
        !Number.isInteger(columns)) {
        throw new TypeError();
    }

    const formatLenArray = [];

    intArray.forEach((value, index) => {
        const currColumn = index % columns;
        const currArrayValueLen = value.toString().length;

        if (!formatLenArray[currColumn] ||
            formatLenArray[currColumn] < currArrayValueLen) {
            formatLenArray[currColumn] = currArrayValueLen;
        }
    });

    return intArray.reduce((result, value, index) => {
        const currColumn = index % columns;
        const currArrayValueLen = value.toString().length;

        if (currColumn !== 0) {
            result += " ";
        }
        result += " ".repeat(formatLenArray[currColumn] - currArrayValueLen)
            + value.toString();

        const isLastRow = index === intArray.length - 1;

        if (currColumn === columns - 1 && !isLastRow) {
            result += "\n";
        }
        return result;
    }, '');
}
