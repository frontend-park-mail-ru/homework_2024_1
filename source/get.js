'use strict'

function get(obj, property){
    const propertyQuery = property.split('.').filter(str => str.length > 0);
    // return propertyQuery;

    let copy = obj;
    for (const curProp of propertyQuery){
        if (copy === undefined) return copy;
        copy = copy[curProp];
    }
    return copy;
}