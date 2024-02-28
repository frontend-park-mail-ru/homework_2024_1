'use strict';

/**
 * Resolve expression by substituting x value.
 * Expression might contains only digits, letter x, dot or comma for fractional numbers and math operation symbols (+, -, *, /).
 * Any other symbols will be considered as unacceptable.
 * @function
 * @param {string} expression - Expression with x variable.
 * @param {number} x - Value of x variable.
 * @returns {number} 
 * @throws {ErrNotString} Throw an error if expression is not a string.
 * @throws {ErrNotNum} Throw an error if x variable is not a number.
 * @throws {ErrWrongSymbolsInExpression} Throw an error if there are some wrong symbols in expression.
 * @throws {ErrEmptyExpression} Throw an error if expression doesn't contain any meaningful symbols.
 */

function solve(expression, x) {

    const safeSymbols = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 
        '(', ')', '-', '*', '/', '+', ' ', 'x', '.']);

        if (typeof expression !== 'string') {
            throw new Error('ErrNotString');
        }
        if (typeof x !== 'number' || isNaN(x)) {
            throw new Error('ErrNotNum');
        }

        if (Array.from(expression).some(symbol => !safeSymbols.has(symbol))){
            throw new Error('ErrWrongSymbolsInExpression');
        }

        if (expression.trim() === '') {
            throw new Error('ErrEmptyExpression');
        }

        return eval(expression.replace(/x/g, x));
}
