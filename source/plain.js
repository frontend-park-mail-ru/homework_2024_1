'use strict';

/**
 * Accepts an array of arrays as input and creates one common array from them.
 * 
 * @param {array} arr - array of arrays
 * @returns {array} - the final array
 * @throws {Error} - If the function argument arr is not an array
 */

const plain = (arr) => {
    if (!Array.isArray(arr)){
        return new Error("The passed argument is not an array!");
    }
    if (arr.length === 0) {
        return []
    }
    let result = []
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            result = result.concat(plain(item))
        }
        else {
            result.push(item)
        }
    });
    return result
}
