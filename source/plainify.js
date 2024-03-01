'use strict';

/**
 * Converts nested objects into a flat object.
 * @param {Object} srcObj - The source object.
 * @returns {Object} - The result of the transformation..
 */
const plainify = (srcObj) => {
    const result = {};

    const helpFunc = (obj, parentKey) => {
        if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
            for (const key in obj) {
                helpFunc(obj[key], parentKey ? parentKey + '.' + key : key);
            }
        } else {
            result[parentKey] = obj;
        }
    }

    if (typeof srcObj !== 'object') {
        throw new TypeError('Not an object!')
    } else if (Array.isArray(srcObj)) {
        throw new TypeError('It is an array!')
    }

    helpFunc(srcObj, '');

    return result;
}
