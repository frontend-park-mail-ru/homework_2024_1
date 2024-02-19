"use strict";

/**
 * Returns true if arguement is a String
 */
const isString = (obj) => {
    return typeof obj === 'string' || obj instanceof String; 
}

/**
 * Applies RLE data compression algorithm to argument and returns resulting string.
 * Throw TypeError if argument is not a string or missing.
 */
const rle = (input) => {
    if (!isString(input)) {
	throw new TypeError('Argument is not a string or missing!');
    }
    let result = '';
    let count = 1;
    for (let i = 1; i <= input.length; i++) {
	if (input[i] === input[i - 1]) {
	    count++;
	} else {
	    result += input[i-1];
	    if (count > 1) {
		result += count;
	    }
	    count = 1;
	}
    }

    return result;
}
