'use strict';

/**
 * Меняет порядок элементов в массике на противоположный
 * @param {Array} array - массив обьектов
 * @param {number} position - если есть, то переставляются все элементы массива 
 * кроме нескольких первых (количество зависит от числа). Если число отрицательное — то 
 * на месте остаются элементы в конце массива
 * @return {Array} Отсортированный массив
 */
const inverse = (array, position = 0) => {
    if (!Array.isArray(array)) {
        return null;
    }
    
    if (Number.isNaN(position) || typeof(position) !== 'number') {
        return null;
    }

    if (position === 0) {
        return array.reverse();
    }

    const partBeforePosition = array.slice(0, position);
    const partAfterPosition = array.slice(position, array.length);

    position > 0 ? partAfterPosition.reverse() : partBeforePosition.reverse();

    return partBeforePosition.concat(partAfterPosition);
};

