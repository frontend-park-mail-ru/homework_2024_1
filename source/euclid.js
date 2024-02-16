'use strict';

/**
 * Функция вычисляет НОД для переданных натуральных чисел.
 * @param  {...number} args - Числа, для которых необходимо найти НОД. 
 * @throws {TypeError | RangeError | Error}
 * @returns {number|Error} - НОД переданных чисел или null, если переданы некорректные аргументы.
 */
const euclid = (...args) => {
    args.forEach((arg) => {
        if (typeof arg !== 'number' || !isFinite(arg)) {
            throw new TypeError('Недопустимый аргумент: все аргументы должны быть натуральными конечными числами');
        }

        if (arg < 0) {
            throw new RangeError('Недопустимый аргумент: все аргументы должны быть неотрицательными числами');
        }
    });

    switch (args.length) {
        case 1:
            return args[0];
        case 2: 
            const num1 = args[0];
            const num2 = args[1];
            if (num2 === 0) {
                return num1;
            }
            return euclid(num2, num1 % num2);
        default:
            return args.reduce((result, current) => euclid(result, current));
    }
}
