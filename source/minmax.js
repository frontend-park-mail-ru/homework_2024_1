'use strict';

const minmax = str => {
    if (str === '') { 
        return [ undefined, undefined ];
    }
    let numbers = str.split(' ').map(Number).filter(element => !isNaN(element));  
    if (numbers.length == 0) { 
        return [ undefined, undefined ];
    }
    return [Math.min(...numbers), Math.max(...numbers)];
}
