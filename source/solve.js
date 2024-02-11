'use strict';

const PLUS = '+'
const MINUS = '-'
const MULTIPLY = '*'
const LEFT_PARENTH = '('
const RIGHT_PARENTH = ')'

const OPERATORS_WITH_PRIORITY = {
    '+': 1,
    '-': 1,
    '*': 2,
}

// Преобразует строковое арифметическое выражение в массив операндов, операторов и скобок.
// Просто expression.split(' ') не подходит, так как есть случаи вида '(x + 1)', 
// где в качестве операнда будет записан, например, '1)'.
const parseOperandsFromExpression = (expression, x) => {
    const stringX = x.toString()
    let number = '';
    let result = expression.split('').reduce((acc, curr) => {
        switch(curr) {
            case PLUS:
            case MINUS:
            case MULTIPLY:
            case LEFT_PARENTH:
            case RIGHT_PARENTH:
                if (number) acc.push(number);
                number = '';
                acc.push(curr);
                break;
            case ' ':
                if (number) acc.push(number);
                number = '';
                break;
            case 'x':
                acc.push(stringX);
                break;
            default:
                number += curr;
                break;
        }
        return acc;
    }, []);

    if (number) result.push(number);

    return result;
}

const handleStackWhenParsingOperatorCondition = (stack, token) => (
    stack.length > 0 && 
    stack[stack.length - 1] !== LEFT_PARENTH && 
    OPERATORS_WITH_PRIORITY[stack[stack.length - 1]] >= OPERATORS_WITH_PRIORITY[token]
)

// Преобразует строковое арифметическое выражение в массив токенов формата reverse polish notation
const parseRPNFromExpression = (expression, x) => {
    const tokens = parseOperandsFromExpression(expression, x);
    const stack = [];
    const queue = [];

    for (let i = 0; i < tokens.length; ++i) {
        const token = tokens[i];
        
        if (token.match(/\d+$/)) { // Если токен - число
            queue.push(token);
        } else if (Object.keys(OPERATORS_WITH_PRIORITY).includes(token)) { // Если токен - оператор
            while (handleStackWhenParsingOperatorCondition(stack, token)) {
                queue.push(stack.pop());
            }
            stack.push(token);
        } else if (token === LEFT_PARENTH) {
            stack.push(token);
        } else if (token === RIGHT_PARENTH && stack.length > 0) {
            let lastLeftParenthIdx = stack.lastIndexOf(LEFT_PARENTH);
            if (lastLeftParenthIdx === -1) throw new Error(`no left parenth in stack while parsing rpn from expression`);
            queue.push(...stack.slice(lastLeftParenthIdx + 1).reverse());
            stack.pop();
        } else {
            throw new Error(`invalid token ${token} while parsing rpn from expression`);
        }
    }
    
    queue.push(...stack.reverse());

    return queue;
}

const evalToken = (operand1, operand2, operator) => {
    const intOperand1 = parseInt(operand1);
    const intOperand2 = parseInt(operand2);
    switch(operator) {
        case PLUS:
            return intOperand1 + intOperand2;
        case MINUS:
            return intOperand1 - intOperand2;
        case MULTIPLY:
            return intOperand1 * intOperand2;
        default:
            return NaN;
    }
}

const solve = (expression, x) => {
    try {
        const queue = parseRPNFromExpression(expression, x);
        const stack = [];

        if (queue.length === 0) {
            return NaN;
        }

        queue.forEach((token) => {
            if (token.match(/\d+$/)) {
                stack.push(token);
            } else if (Object.keys(OPERATORS_WITH_PRIORITY).includes(token)) {
                const operand2 = stack.pop();
                const operand1 = stack.pop();
                stack.push(evalToken(operand1, operand2, token));
            }
        });

        return stack[0];
    } catch (e) {
        console.log(e.message);
        return NaN;
    }
}
