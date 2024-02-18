'use strict';

/**
 * Функция, возвращающая единственный объект, содержащий все поля из всех переданных объектов
 * @param  {...object} objects 
 * @returns {object}
 */
const zip = (...objects) => {
    const resultObj = {};

    for (const object of objects) {
        // не обрабатывает если передано что-то кроме объекта
        if (typeof object !== 'object') {
            continue;
        }

        for (const property in object) {
            // добавляет свойство, если его не было
            if (!resultObj.hasOwnProperty(property)) {
                resultObj[property] = object[property];
            }
        }
    }

    return resultObj;
}
