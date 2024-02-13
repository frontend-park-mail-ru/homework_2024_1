'use strict';

/**
 * Получает путь к вложенному свойству объекта и возвращает значение этого свойства (или undefined, если свойства не существует)
 * @param {Object} object - Объект.
 * @param {string} property - свойство объекта.
 * @return {Object|undefined} - Возвращает значение или undefined.
 */
const get = (object, property) => {
    let propertyArray = property.split('.');
    propertyArray = propertyArray.splice(0, 1).filter((item) => item.length > 0);
    let current = object;
    for (let i = 0; i < propertyArray.length; i++) {
        if (!current.hasOwnProperty(propertyArray[i])) {
            current = undefined;
            break;
        }
        current = current[propertyArray[i]];
    }
    return current;
}
