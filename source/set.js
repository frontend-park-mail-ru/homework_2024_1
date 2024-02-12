'use strict';

/**
 * Function, that sets value for given attribute. Returns modified object.
 * @param {object} objName - reference to the object we need to modify.
 * @param {string} path - string, that contains path of attributes of the object to the exact attribute we need to change.
 * @param {*} value - value, that we need to set.
 */
const set = (objName = {}, path, value) => {
    let currentPos = objName;
    const currentPath = [];
    const attributes = path.slice(1).split('.');
    attributes.forEach((attribute, i) => {
        if (Object.keys(currentPos).length === 0){
            currentPos[attribute] = {};
        }
        currentPath[i] = currentPos;
        currentPos = currentPos[attribute];
    });
    currentPos = value;
    attributes.reverse();
    currentPath.reverse().forEach((pathElement, i) => {
        pathElement[attributes[i]] = currentPos;
        currentPos = pathElement;
    });
    return currentPos;
}
