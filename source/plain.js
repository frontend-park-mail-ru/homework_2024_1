"use strict";

/**
 * Создаёт общий массив из подмассивов 
 * @example
 * // returns [ 42, 0 ]
 * plain([ [ 42 ], 0 ]);
 * @example
 * // returns []
 * plain([ [], [] ]);
 */
const plain = (arr) => {
    if (!Array.isArray(arr)){
        return new Error("The passed argument is not an array!");
    }
    if (arr === undefined || arr.length == 0) {
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