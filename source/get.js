'use strict'

function get(obj, property){
    if (typeof(property) !== 'string') return undefined;
    const propertyQuery = property.split('.').filter(str => str.length > 0);

    let copy = obj;
    for (const curProp of propertyQuery){
        if (copy === undefined) return copy;
        copy = copy[curProp];
    }
    return copy;
}