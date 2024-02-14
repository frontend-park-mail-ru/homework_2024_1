'use strict'

/**
 * Return value of property by given property name, return undefined in any error case.
 * @function
 * @param {object} obj - Object where function searches value of property.
 * @param {string} property - Property name, starts with dot.
 * @returns {object} 
 */
const get = (obj, property) => {
    if (typeof(property) !== 'string' && !(property instanceof String)) {
        return undefined;
    }

    if (property[0] !== '.') return undefined;
    
    const propertyQuery = property.split('.').filter(str => str.length > 0);

    let copy = obj;
    for (const curProp of propertyQuery){
        if (!copy) return copy;
        copy = copy[curProp];
    }
    return copy;
}

