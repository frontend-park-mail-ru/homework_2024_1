'use strict';

/**
 * Сравнивает переменные, если они строки, то лексиграфически, иначе переводит в тип Number
 * @param {number, string} a 
 * @param {number, string} b 
 * @returns {number} Если a > b возвращает положительное число, если a === b, то 0, иначе отрицательное число
 */
const comparator = (a, b) => {
    const instanceCheck = ((a instanceof String) && (b instanceof String));
    if ((typeof a === 'string' && typeof b === 'string') || instanceCheck) {
        return a.localeCompare(b);
    } else {
        return a - b;
    }
}

/**
 * Сортирует массив по убыванию
 * @param {Array} array - массив plain-объектов
 * @param {Array} keys - массив ключей, по которым нужно отсортировать
 * @returns {Array} отсортированный по убыванию массив
 */
const sorting = (array, keys) => {
    if (!Array.isArray(array)){
        return null;
    }
    for (let item of array){
        if (!(item instanceof Object)){
            return null;
        }
    }
    for (let key of keys.reverse()) {
        for (let [index, item] of array.entries()) {
            const instanceCheck = !(item[key] instanceof Number || item[key] instanceof String);
            if (typeof item[key] !== 'string' && typeof item[key] !== 'number' && instanceCheck){
                return null;
            }
            const insertIndex = array.findIndex((elem) => (comparator(elem[key], item[key]) > 0));
            if ((insertIndex >= 0) && (insertIndex < index)){
                array.splice(index, 1);
                array.splice(insertIndex, 0, item);
            }
        }
    }
    return array;
};
