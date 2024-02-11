'use strict';

const PLUS = '+';
const MINUS = '-';
const MULTIPLY = '*';
const LEFT_PARENTH = '(';
const RIGHT_PARENTH = ')';

const OPERATORS_WITH_PRIORITY = {
    '+': 1,
    '-': 1,
    '*': 2,
};

// Преобразует строковое арифметическое выражение в массив операндов, операторов и скобок.
// Просто expression.split(' ') не подходит, так как есть случаи вида '(x + 1)', 
// где в качестве операнда будет записан, например, '1)'.
const parseOperandsFromExpression = (expression, x) => {
    const stringX = x.toString()
    let number = '';
    let operatorsCount = 0;
    let operandsCount = 0;
    let result = expression.split('').reduce((acc, curr) => {
        switch(curr) {
            case PLUS:
            case MINUS:
            case MULTIPLY:
                ++operatorsCount;
            case LEFT_PARENTH:
            case RIGHT_PARENTH:
                if (number) {
                    acc.push(number);
                    ++operandsCount;
                }
                number = '';
                acc.push(curr);
                break;
            case ' ':
                if (number) {
                    acc.push(number);
                    ++operandsCount;
                }
                number = '';
                break;
            case 'x':
                acc.push(stringX);
                ++operandsCount;
                break;
            default:
                number += curr;
                break;
        }
        return acc;
    }, []);

    if (number) {
        result.push(number);
        ++operandsCount;
    }

    if (operandsCount !== operatorsCount + 1)
        throw new Error(`invalid input expression ${expression}`);

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

    tokens.forEach(token => {
        if (token.match(/\d+$/)) { // Если токен - число
            queue.push(token);
        } else if (Object.keys(OPERATORS_WITH_PRIORITY).includes(token)) { // Если токен - оператор
            while (handleStackWhenParsingOperatorCondition(stack, token)) {
                queue.push(stack.pop());
            }
            stack.push(token);
        } else if (token === LEFT_PARENTH) {
            stack.push(token);
        } else if (token === RIGHT_PARENTH) {
            let lastLeftParenthIdx = stack.lastIndexOf(LEFT_PARENTH);
            if (stack.length === 0 || lastLeftParenthIdx === -1) 
                throw new Error(`invalid parentheses sequence in input expression ${expression}`);
            queue.push(...stack.splice(lastLeftParenthIdx + 1).reverse());
            stack.pop();
        } else {
            throw new Error(`invalid token ${token} while parsing rpn from expression`);
        }
    })

    if (stack.indexOf(LEFT_PARENTH) !== -1) 
        throw new Error(`invalid parentheses sequence in input expression ${expression}`);

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
            throw new Error(`invalid operator ${operator}`);
    }
}

const checkIfValidParamTypes = (expression, x) => (
    (typeof expression === 'string' || typeof expression === 'symbol') 
    && (typeof x === 'number' || typeof x === 'bigint')
);

const solve = (expression, x) => {
    try {
        if (!checkIfValidParamTypes(expression, x)) 
            throw new Error(`invalid type of some argument`);
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
            } else {
                throw new Error(`invalid token ${token} in rpn`);
            }
        });

        return stack[0];
    } catch (e) {
        console.log(e.message);
        return NaN;
    }
}
