'use strict';

/**
 * Find minimum and maximum numbers in string.
 * @param {string} str - The input string.
 * @returns {[number, number]} - An array in which the first element 
 * is the minimum and the second is the maximum
*/

const minmax = (str) => {
    if (typeof(str) === 'string') {
        if (str === '') { 
            return [ undefined, undefined ];
        }
        let numbers = str.split(' ').map(Number).filter(element => !isNaN(element));  
        if (numbers.length === 0) { 
            return [ undefined, undefined ];
        }
        return [Math.min(...numbers), Math.max(...numbers)];
    }
    else {
        return [ undefined, undefined ];
    }
}
