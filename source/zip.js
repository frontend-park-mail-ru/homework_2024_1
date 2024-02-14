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
        // reverse() в чистом виде теперь нет, так как подаем sources в assign() в таком порядке,
        // чтобы в конце получить то, что нужно
        return Object.assign({}, obj, mergedObject);
    }, {});
}
