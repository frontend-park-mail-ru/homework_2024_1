'use strict';

function get(object, property){
    property = property.split('.');
    property.splice(0,1);
    var current = object;
    for (var i = 0; i < property.length && property[i] != "" && current !== undefined; i++){
        current = current[property[i]];
    }
    return current;
}
