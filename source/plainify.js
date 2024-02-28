'use strict';

/**
 * Converts nested objects into a flat object.
 * @param {Object|Array} obj - The source object.
 * @param {string} [parentKey=''] - The parent key..
 * @param {Object} [result={}] - The resulting object.
 * @returns {Object} - The result of the transformation..
 */
const plainify = (obj, parentKey = '', result = {}) => {
    if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
        for (const key in obj) {
            plainify(obj[key], parentKey ? parentKey + '.' + key : key, result);
        }
    } else {
        result[parentKey] = obj;
    }
    return result;
}