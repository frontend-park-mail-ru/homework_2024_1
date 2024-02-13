'use strict';

const euclid = function () {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number' || !isFinite(arguments[i])) {
            throw new Error('Invalid argument: all arguments must be numbers');
        }
        arguments[i] = Math.abs(arguments[i]);
    }
    
    if(arguments.length == 2) {
        if (arguments[1] == 0) return arguments[0];
        else return euclid(arguments[1], arguments[0] % arguments[1]);
    }   else if (arguments.length > 2) {
        var result = euclid(arguments[0], arguments[1]);
        for (var i = 2; i < arguments.length; i++)
            result = euclid(result, arguments[i]);
        return result;
    }
};