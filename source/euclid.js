'use strict';

const euclid = (...args) => {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number' || !isFinite(args[i])) {
            throw new Error('Invalid argument: all arguments must be finite numbers');
        }
        if (args[i] < 0) {
            throw new Error('Invalid argument: all arguments must be non-negative numbers');
        }
    }
    
    if(args.length == 2) {
        if (args[1] == 0) return args[0];
        else return euclid(args[1], args[0] % args[1]);
    }   else if (args.length > 2) {
        var result = euclid(args[0], args[1]);
        for (var i = 2; i < args.length; i++)
            result = euclid(result, args[i]);
        return result;
    }
};