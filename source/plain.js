"use strict";

// Функция plain принимает на вход массив массивов и создаёт из них один общий массив. Массивы могут быть любой вложенности.
const plain = (arr) => {
    if ( !(Array.isArray(arr) === true) || arr === undefined || arr.length == 0){
        return []
    }
    var result = []
    arr.forEach((item) => {
        if (Array.isArray(item) === true) {
            result = result.concat(plain(item))
        }
        else {
            result = result.concat(item)
        }
    });
    return result
}