'use strict';

const format = (array, columns) => {
    // type checking
    if (    !Array.isArray(array) ||
            array.some(item => !Number.isInteger(item)) ||
            !Number.isInteger(columns)) {
        return undefined
    }

    const formatLenArray = []

    for (let i = 0, col = 0; i < array.length; ++i, ++col) {
        if (col >= columns) {
            col = 0
        }

        if (    formatLenArray[col] === undefined ||
                formatLenArray[col] < array[i].toString().length) {
            formatLenArray[col] = array[i].toString().length
        }
    }

    let strResult = ""

    for (let i = 0, col = 0; i < array.length; ++i, ++col) {
        if (col >= columns) {
            col = 0
        }

        if (col !== 0) {
            strResult += " "
        }

        strResult +=
            " ".repeat(formatLenArray[col] - array[i].toString().length)
            + array[i].toString()

        if(col === columns - 1 && i !== array.length - 1){
            strResult += "\n"
        }
    }

    return strResult
}