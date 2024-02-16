'use strict';

/**
 * Производит слияние 2 отсортированных частей массива в правильном порядке.
 * @param {Array} left - первый массив элементов
 * @param {Array} right - второй массив элементов
 * @param {string} prop - свойство, по которому происходит сортировка и сравнение
 * @returns {array} result - полученный отсортированный массив
 */
function merge(left, right, prop) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (!left[i] || !right[i] || typeof left[i] === Object && !(prop in left[i]) || typeof right[j] === Object && !(prop in right[j])) {
            return null;
        }
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

/**
 * Алгоритм сортировки слиянием.
 * @param {Array} array - входной массив данных
 * @param {string} prop - свойство, по которому происходит сортировка
 * @returns {Array} - отсортированный массив
 */
function mergeSort(array, prop) {
    let result = array;
    if (array.length > 1) {
        const halfLen = array.length / 2;
        const leftPart = mergeSort(array.slice(0, halfLen), prop);
        const rightPart = mergeSort(array.slice(halfLen), prop);
        result = merge(leftPart, rightPart, prop);
    }
    return (result) ? result : array;
}

/**
 * Принимает на вход массив plain-объектов и массив имён свойств,
 * по которым необходимо отсортировать массив объектов,
 * и реализует устойчивую сортировку этого массива в порядке возрастания
 * (строки сортируются лексикографически, числа в порядке возрастания).
 * @param {Array} array - входной массив значений
 * @param {Array} properties - набор свойств
 * @returns {Array} - отсортированный объект
 */
function sorting(array, properties) {
    let result = array;
    if (Array.isArray(properties) && Array.isArray(array) && properties.length && array.length) {
        result = properties.reduceRight((tmpSorted, prop) => mergeSort(tmpSorted, prop), array);
    }
    return result;
}
