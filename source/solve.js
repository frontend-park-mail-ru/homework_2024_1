'use strict';

const PLUS = '+';
const MINUS = '-';
const MULTIPLY = '*';
const LEFT_PARENTH = '(';
const RIGHT_PARENTH = ')';
const X = 'x';

const OPERATORS_WITH_PRIORITY = {
    '+': 1,
    '-': 1,
    '*': 2,
};

// Преобразует строковое арифметическое выражение в массив операндов, операторов и скобок.
// Просто expression.split(' ') не подходит, так как есть случаи вида '(x + 1)', 
// где в качестве операнда будет записан, например, '1)'.
const parseOperandsFromExpression = (expression, argument, argumentName=X) => {
    const stringArgument = argument.toString()
    let number = '';
    let operatorsCount = 0;
    let operandsCount = 0;
    const tokensArray = expression.split('').reduce((currTokens, currToken) => {
        switch(currToken) {
            case PLUS:
            case MINUS:
            case MULTIPLY:
                ++operatorsCount;
            case LEFT_PARENTH:
            case RIGHT_PARENTH:
                if (number) {
                    currTokens.push(number);
                    ++operandsCount;
                }
                number = '';
                currTokens.push(currToken);
                break;
            case ' ':
                if (number) {
                    currTokens.push(number);
                    ++operandsCount;
                }
                number = '';
                break;
            case argumentName:
                currTokens.push(stringArgument);
                ++operandsCount;
                break;
            default:
                number += currToken;
                break;
        }
        return currTokens;
    }, []);

    if (number) {
        tokensArray.push(number);
        ++operandsCount;
    }

    if (operandsCount !== operatorsCount + 1) {
        throw new Error(`invalid input expression ${expression}`);
    }

    return tokensArray;
}

const handleStackWhenParsingOperatorCondition = (stack, token) => (
    stack.length > 0 && 
    stack.at(-1) !== LEFT_PARENTH && 
    OPERATORS_WITH_PRIORITY[stack.at(-1)] >= OPERATORS_WITH_PRIORITY[token]
)

// Преобразует строковое арифметическое выражение в массив токенов формата reverse polish notation
const parseRPNFromExpression = (expression, argument, argumentName) => {
    const tokens = parseOperandsFromExpression(expression, argument, argumentName);
    const stack = [];
    const queue = [];

    tokens.forEach(token => {
        if (token.match(/\d+$/)) { // Если токен - число
            return queue.push(token);
        } 

        if (OPERATORS_WITH_PRIORITY[token]) { // Если токен - оператор
            while (handleStackWhenParsingOperatorCondition(stack, token)) {
                queue.push(stack.pop());
            }
            return stack.push(token);
        } 

        if (token === LEFT_PARENTH) {
            return stack.push(token);
        } 

        if (token === RIGHT_PARENTH) {
            let lastLeftParenthIdx = stack.lastIndexOf(LEFT_PARENTH);
            if (stack.length === 0 || lastLeftParenthIdx === -1) {
                throw new Error(`invalid parentheses sequence in input expression ${expression}`);
            }
            queue.push(...stack.splice(lastLeftParenthIdx + 1).reverse());
            return stack.pop();
        }

        throw new Error(`invalid token ${token} while parsing rpn from expression`);
    })

    if (stack.indexOf(LEFT_PARENTH) !== -1) {
        throw new Error(`invalid parentheses sequence in input expression ${expression}`);
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
            throw new Error(`invalid operator ${operator}`);
    }
}

const checkIfValidParamTypes = (expression, argument) => (
    typeof expression === 'string'
    && (typeof argument === 'number' || typeof argument === 'bigint')
);

const solve = (expression, argument, argumentName) => {
    try {
        if (!checkIfValidParamTypes(expression, argument)) {
            throw new Error(`invalid type of some argument`);
        }
        const queue = parseRPNFromExpression(expression, argument, argumentName);
        const stack = [];

        if (queue.length === 0) {
            return NaN;
        }

        queue.forEach((token) => {
            if (token.match(/\d+$/)) {
                return stack.push(token);
            } 
            
            if (OPERATORS_WITH_PRIORITY[token]) {
                const operand2 = stack.pop();
                const operand1 = stack.pop();
                return stack.push(evalToken(operand1, operand2, token));
            }
            
            throw new Error(`invalid token ${token} in rpn`);
        });

        return stack[0];
    } catch (e) {
        return NaN;
    }
}
