'use strict';

const euclid = (...args) => {
    args.forEach((arg) => {
        if (typeof arg != 'number' || !isFinite(arg)) {
            throw new Error('Недопустимый аргумент: все аргументы должны быть натуральными конечными числами');
        }
        if (arg < 0) {
            throw new Error('Недопустимый аргумент: все аргуметны должны быть неотрицательными числами');
        }
    });

    if (args.length === 1) {
        return args[0];
    }
    if (args.length === 2) {
        if (args[1] === 0) return args[0];
        else return euclid(args[1], args[0] % args[1]);
    }   else if (args.length > 2) {
        return args.reduce((result, current) => euclid(result, current));
    }
}
