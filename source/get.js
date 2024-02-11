'use strict'

const get = (obj, property) => {
    if (typeof(property) !== 'string' && !(property instanceof String)) return undefined;
    const propertyQuery = property.split('.').filter(str => str.length > 0);

    let copy = obj;
    for (const curProp of propertyQuery){
        if (copy === undefined) return copy;
        copy = copy[curProp];
    }
    return copy;
}
