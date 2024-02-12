'use strict';

/**
* Получает путь к вложенному свойству объекта и возвращает значение этого свойства (или undefined, если свойства не существует)
* @param {object} object - Объект.
* @param {string} property - свойство объекта.
* @return {object|undefined} - Возвращает значение или undefined.
*/
function get(object, property){
    property = property.split('.');
    property.splice(0,1);
    let current = object;
    for (let i = 0; i < property.length && property[i] != "" && current !== undefined; i++){
        current = current[property[i]];
    }
    return current;
}
