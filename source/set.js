'use strict';

/**
 * Validates name of object
 * @function
 * @param {object} objName - reference to the object we need to modify.
 * @returns {boolean} - returns true if name is valid.
 */
const objValidation = (objName) => {
    if (typeof objName !== 'object' || !objName) {
        return false
    }
    return true
};

/**
 * Validates path of object
 * @function
 * @param {string} objName - reference to the path we need to go through.
 * @returns {boolean} - returns true if path is valid.
 */
const pathValidation = (path) => {
    if (typeof path !== 'string' || path.length === 1 || path[0] !== '.') {
        return false
    }
    return true
};

/**
 * @name set
 * @function
 * @param {object} objName - reference to the object we need to modify.
 * @param {string} path - string, that contains path of attributes of the object to the exact attribute we need to change.
 * @param {*} value - value, that we need to set.
 * @returns {object} - returns reference to the modified object.
 * @throws {TypeError} Throws an error if any input is incorrect.
 */
const set = (objName = {}, path, value) => {
    if (!objValidation(objName)) {
        throw new TypeError('objName must be an object type');
    }
    if (!pathValidation(path)) {
        throw new TypeError('path is incorrect');
    }
    let currentObj = objName;
    //let finalObj = currentObj;
    const finalPath = [];
    const attributes = path.slice(1).split('.');
    attributes.forEach((attribute,  pos) => {
        if (!(attribute in currentObj)){
            currentObj[attribute] = {};
        }
        finalPath[pos] = currentObj;
        currentObj = currentObj[attribute];
    });
    currentObj = value;

    attributes.reverse();
    finalPath.reverse().forEach((pathElement, pos) => {
        pathElement[attributes[pos]] = currentObj;
        currentObj = pathElement;
    });

    //изначально я пытался сделать без строчек 52, 57-61, аналогично работе с указателями, но возвращался неизмененный объект
    //Тогда пришлось добавить эти циклы, чтобы сначала дойти до нужного поля, а потом вернутся обратно.
    //return finalObj;
    return currentObj;
};
