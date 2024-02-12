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

/**
 * Parses valid tokens such as operators, integer numbers and parentheses from mathematical expression,
 * throws error if expression is invalid in that regard
 * @param {string} expression - mathematical expression
 * @param {number | bigint} argument - integer value of an argument
 * @param {string} argumentName - name of the argument of the expression, defaults to 'x'
 * @returns {string[]} array of tokens in expression
 */
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

/**
 * Shows whether we can continue parsing values from stack when token is operator
 * @param {string[]} stack - stack of tokens that is currently being iterated through
 * @param {string} parsedToken - current token from array of parsed tokens
 * @param {number} stackTokenIndex - index of the current token in the stack
 * @returns {boolean}
 */
const shouldParseStack = (stack, parsedToken, stackTokenIndex) => (
    stackTokenIndex >= 0 && 
    stackTokenIndex < stack.length &&
    stack.at(stackTokenIndex) !== LEFT_PARENTH && 
    OPERATORS_WITH_PRIORITY[stack.at(stackTokenIndex)] >= OPERATORS_WITH_PRIORITY[parsedToken]
)

/**
 * Converts mathematical expression into the Reverse Polish Notation format
 * @param {string} expression - mathematical expression
 * @param {number | bigint} argument - integer value of an argument
 * @param {string} argumentName - name of the argument of the expression
 * @returns {string[]} array of tokens in RPN
 */
const parseRPNFromExpression = (expression, argument, argumentName) => {
    const tokens = parseOperandsFromExpression(expression, argument, argumentName);
    const stack = [];
    const queue = [];

    tokens.forEach(token => {
        if (token.match(/\d+$/)) { // Token is a number
            return queue.push(token);
        } 

        if (OPERATORS_WITH_PRIORITY[token]) { // Token is an operator
            while (shouldParseStack(stack, token, stack.length - 1)) {
                queue.push(stack.pop());
            }
            return stack.push(token);
        } 

        if (token === LEFT_PARENTH) {
            return stack.push(token);
        } 

        if (token === RIGHT_PARENTH) {
            const lastLeftParenthIdx = stack.lastIndexOf(LEFT_PARENTH);
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

    return [...queue, ...stack.reverse()];
}

/**
 * Counts value of expression which contains two operands and an operator '+', '-' or '*', 
 * throws error if invalid operator specified
 * @param {number} operand1
 * @param {number} operand2 
 * @param {'+' | '-' | '*'} operator
 * @returns {number}
 */
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

/**
 * Checks whether user-provided parameters are of valid type
 * @param {string} expression - mathematical expression
 * @param {number | bigint} argument - integer value of an argument
 * @returns {boolean}
 */
const isValidParamTypes = (expression, argument) => (
    typeof expression === 'string'
    && (typeof argument === 'number' || typeof argument === 'bigint')
);

/**
 * Counts value of mathematical expression which contains 
 * characters '+', '-', '*', '(', ')', spaces and an argument of custom name
 * @param {string} expression - mathematical expression
 * @param {number | bigint} argument - integer value of an argument
 * @param {string} argumentName - name of the argument of the expression
 * @returns {number} value of expression or NaN if expression is invalid 
 */
const solve = (expression, argument, argumentName) => {
    try {
        if (!isValidParamTypes(expression, argument)) {
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
