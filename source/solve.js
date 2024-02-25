'use strict';

function solve(expression, x) {
    if (isNaN(x)) {
        return 'ErrNotNum';
    }

    if (expression.trim() === '') {
        return 'ErrEmptyExpression';
    }

    try {
        return eval(expression.replace(/x/g, x));
    } catch (error) {
        return 'ErrExpression';
    }
}