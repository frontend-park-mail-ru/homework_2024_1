'use strict';

/**
 * Resolve expression by substituting x value.
 * @function
 * @param {string} expression - Expression with x variable.
 * @param {number} x - Value of x variable.
 * @returns {number} 
 */

function solve(expression, x) {

    const safeSymbols = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 
        '(', ')', '-', '*', '/', '+', ' ', 'x'])

    try {
        for (const symbol of expression){
            if (!safeSymbols.has(String(symbol))){
                throw new Error('ErrWrongSymbolsInExpression')
            }
        }
        if (typeof x !== 'number') {
            throw new Error('ErrNotNum');
        }

        if (expression.trim() === '') {
            throw new Error('ErrEmptyExpression');
        }

        return eval(expression.replace(/x/g, x));
    } catch (error) {
        return error.message;
    }
}
