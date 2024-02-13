'use strict';

/**
 * Объединяет свойства нескольких объектов в один объект
 *
 * @param {...object} objects - Объекты, свойства которых нужно объединить
 * @throws {Error} Если хотя бы один из переданных параметров не является объектом (или же является массивом)
 * @returns {object} Объединенный объект
 */
function zip(...objects) {
    for (let obj of objects) {
        if (typeof obj !== 'object' || !obj || Array.isArray(obj)) {
            throw new Error('The function only accepts objects');
        }
    }

    return Object.assign({}, ...objects.reverse());
}
