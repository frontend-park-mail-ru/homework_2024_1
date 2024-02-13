'use strict';

/**
 * @param {number[]} intArray - array of integer values
 * @param {number} columns - number of columns
 * @returns {undefined|string} - formatted string or undefined if wrong arguments
 */
const format = (intArray, columns) => {
    // type checking
    if (!Array.isArray(intArray) ||
        intArray.some(item => !Number.isInteger(item)) ||
        !Number.isInteger(columns)) {
        return undefined;
    }

    const formatLenArray = [];

    intArray.forEach((value, index) => {
        const currColumn = index % columns
        const currArrayValueLen = value.toString().length;

        if (!formatLenArray[currColumn] ||
            formatLenArray[currColumn] < currArrayValueLen) {
            formatLenArray[currColumn] = currArrayValueLen;
        }
    });

    let strResult = "";

    intArray.forEach((value, index) => {
        const currColumn = index % columns;
        const currArrayValueLen = value.toString().length;

        if (currColumn !== 0) {
            strResult += " ";
        }
        strResult +=
            " ".repeat(formatLenArray[currColumn] - currArrayValueLen)
            + value.toString();

        const isLastRow = index === intArray.length - 1;

        if(currColumn === columns - 1 && !isLastRow){
            strResult += "\n";
        }
    });

    return strResult;
}