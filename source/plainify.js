'use strict';

const plainify = function plainify(obj, parentKey = '', result = {}) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            plainify(obj[key], parentKey + key + '.', result);
        } else {
            result[parentKey + key] = obj[key];
        }
    }
    return result;
}