'use strict';

const plainify = (obj, parentKey = '', result = {}) => {
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            plainify(obj[key], parentKey + key + '.', result);
        } else {
            result[parentKey + key] = obj[key];
        }
    }
    return result;
}