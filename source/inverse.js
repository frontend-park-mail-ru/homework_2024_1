'use strict';

const inverse = (numbers, pos=0) => {
    let arr1 = numbers.slice(0, pos)
    let arr2 = numbers.slice(pos, numbers.length)
    return pos >= 0 ? [...arr1, ...arr2.reverse()] : [...arr1.reverse(), ...arr2]
};
