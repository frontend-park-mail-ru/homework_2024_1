'using strict';

/**
 * Сравнивает переменные, если они строки, то лексиграфически, иначе переводит в тип Number
 * @constructor
 * @param {any} a 
 * @param {any} b 
 * @returns {number} Если a > b возвращает положительное число, если a === b, то 0, иначе отрицательное число
 */
function comporator(a, b){
    if ((typeof a === 'string') && (typeof b === 'string')) {
        return a.localeCompare(b);
    } else {
        return a - b;
    }
}

/**
 * Сортирует массив по убыванию
 * @constructor
 * @param {Array} array - массив plain-объектов
 * @param {Array} keys - массив ключей, по которым нужно отсортировать
 * @returns {Array} отсортированный по убыванию массив
 */
let sorting = (array, keys) => {
    for (let key of keys.reverse()) {
        for (let [index, item] of array.entries()) {
            let insertIndex = array.findIndex((elem) => (comporator(elem[key], item[key]) > 0));
            if ((insertIndex >= 0) && (insertIndex < index)){
                array.splice(index, 1);
                array.splice(insertIndex, 0, item);
            }
        }
    }
    return array;
};