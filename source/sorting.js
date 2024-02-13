'use strict';


function merge(left, right, prop) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i][prop] > right[j][prop]) {
            result.push(right[j]);
            ++j;
        } else {
            result.push(left[i]);
            ++i;
        }
    }
    if (i < left.length) {
        result = result.concat(left.slice(i));
    } else if (j < right.length) {
        result = result.concat(right.slice(j));
    }
    return result;
}


function mergeSort(array, prop) {
    if (array.length > 1) {
        let halfLen = array.length / 2;
        let leftPart = mergeSort(array.slice(0, halfLen), prop);
        let rightPart = mergeSort(array.slice(halfLen), prop);
        array = merge(leftPart, rightPart, prop);
    }
    return array;
}


function sorting(array, properties) {
    if (Array.isArray(properties) && Array.isArray(array) && properties.length && array.length) {
        for (let prop of properties.reverse()) {
            array = mergeSort(array, prop);
        }
    }
    return array;
}