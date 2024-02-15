'use strict';

/**
 * Объединяет свойства нескольких объектов в один объект
 *
 * @param {...object} objects - Объекты, свойства которых нужно объединить
 * @throws {Error} Если хотя бы один из переданных параметров не является объектом (или же является массивом)
 * @returns {object} Объединенный объект
 */
const zip = (...objects) => {
    return objects.reduce((mergedObject, obj) => {
        if (typeof obj !== 'object' || !obj || Array.isArray(obj)) {
            throw new Error('The function only accepts objects');
        }
        // цитата из условия задания: "...необходимо оставить значение, которое встретилось раньше..."
        // это достигается за счет порядка передачи аргументов obj и mergedObject в метод Object.assign()
        return Object.assign({}, obj, mergedObject);
    }, {});
}
