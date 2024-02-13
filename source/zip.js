'use strict';

/**
 * Функция, возвращающая единственный объект, содержащий все поля из всех переданных объектов
 * @param  {...object} objects 
 * @returns {object}
 */
const zip = (...objects) => {
    let resultObj = {};

    for (const object of objects) {
        for (const property in object) {
            if (!resultObj.hasOwnProperty(property)) {
                resultObj[property] = object[property];
            }
        }
    }

    return resultObj;
}
