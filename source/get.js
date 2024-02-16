'use strict';

/**
 * Получает путь к вложенному свойству объекта и возвращает значение этого свойства
 * @param {Object} object - объект
 * @param {string} property - свойство объекта
 * @throws {ReferenceError} - указанное свойство не существует
 * @throws {TypeError} - параметер property не является строкой
 * @return {any} - Возвращает свойство
 */
const get = (object, property) => {
    if (typeof property !== 'string'){
        throw TypeError('Property is not a string')
    }
    const propertyArray = property.split('.').slice(1).filter(item => item.length > 0);
    let current = object;
    propertyArray.forEach((item) => {
        if (!current.hasOwnProperty(item)) {
            throw ReferenceError(`${item} property is undefined`);
        }
        current = current[item];
    })
    return current;
}

