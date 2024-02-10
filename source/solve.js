'use strict';

// Преобразует строковое арифметическое выражение в массив операндов, операторов и скобок.
// Просто expression.split(' ') не подходит, так как есть случаи вида '(x + 1)', 
// где в качестве операнда будет записан, например, '1)'.
const parseOperandsFromExpression = (expression, x) => {
    const filledExpression = expression.replaceAll('x', x.toString());
    const result = [];
    let number = '';

    for (let i = 0; i < filledExpression.length; ++i) {
        switch(filledExpression[i]) {
            case '+':
            case '-':
            case '*':
            case '(':
            case ')':
                if (number) result.push(number);
                number = '';
                result.push(filledExpression[i]);
                break;
            case ' ':
                if (number) result.push(number);
                number = '';
                break;
            default:
                number += filledExpression[i];
                break;
        }
    }

    if (number) result.push(number);

    return result;
}

// Преобразует строковое арифметическое выражение в массив токенов формата reverse polish notation
const parseRPNFromExpression = (expression, x) => {
    const tokens = parseOperandsFromExpression(expression, x);
    const operators = ['+', '-', '*'];
    const stack = [];
    const queue = [];

    for (let i = 0; i < tokens.length; ++i) {
        const token = tokens[i];

        if (token.match(/\d+$/)) { // Если токен - число
            queue.push(token);
        } else if (operators.includes(token)) { // Если токен - оператор
            while (
                stack.length > 0 && 
                stack[stack.length - 1] !== '(' && 
                operators.indexOf(stack[stack.length - 1]) >= operators.indexOf(token) //  Приоритет оператора из конца стека больше или равен приоритету текущего оператора
            ) {
                queue.push(stack.pop());
            }
            stack.push(token);
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')' && stack.length > 0) {
            let tokenFromStack = stack.pop();
            while (stack.length > 0 && tokenFromStack !== '(') {
                queue.push(tokenFromStack);
                tokenFromStack = stack.pop();
            }
        } else {
            return [];
        }
    }

    while (stack.length > 0) {
        queue.push(stack.pop());
    }

    return queue;
}

const solve = (expression, x) => {
    const operators = ['+', '-', '*'];
    const queue = parseRPNFromExpression(expression, x);
    const stack = [];

    if (queue.length === 0) {
        return NaN;
    }

    for (let i = 0; i < queue.length; ++i) {
        const token = queue[i];
        if (token.match(/\d+$/)) {
            stack.push(token);
        } else if (operators.includes(token)) {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            stack.push(eval(operand1 + token + operand2));
        }
    }

    return stack[0];
}
