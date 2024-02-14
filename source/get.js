'use strict';

/**
 * Получает путь к вложенному свойству объекта и возвращает значение этого свойства (или undefined, если свойства не существует)
 * @param {Object} object - Объект.
 * @param {string} property - свойство объекта.
 * @return {Object|undefined} - Возвращает значение или undefined.
 */
const get = (object, property) => {
    let propertyArray = property.split('.').slice(1).filter(item => item.length > 0);
    let current = object;
    propertyArray.forEach((item) => {
        if (!current.hasOwnProperty(item)) {
            current = undefined;
            throw ReferenceError(`${item} property is undefined`);
        }
        current = current[item];
    })
    return current;
}

