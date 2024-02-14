'use strict'

const JUST_EOL = '\n';
const ASTRA_EOL = '*\n';
const SPACE_EOL = ' \n';

/**
 * Print chess board with a current length
 * @param {number} dimension - length of chess board
 * @returns {string}
 */
const chess = (dimension) => {
    //если длина доски не является допустимым значением
    if (!Number.isInteger(+dimension) || dimension <= 1) {
        return null;
    }

    let lines = "* ".repeat(dimension / 2);
    let reverse_line = lines.split('').reverse().join('');
    const isOdd = dimension % 2 === 1;

    if (isOdd) {
        lines = (lines + ASTRA_EOL + reverse_line + SPACE_EOL).repeat(dimension / 2) + lines + ASTRA_EOL;
    } else {
        lines = (lines + JUST_EOL + reverse_line + JUST_EOL).repeat(dimension / 2);
    }

    return lines;
};

console.log(chess(3))
