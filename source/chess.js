'use strict'

const EOL = '\n';
const ASTRA = '*';
const SPACE = ' ';
const ASTRA_EOL = `${ASTRA}${EOL}`;
const SPACE_EOL = `${SPACE}${EOL}`;
const ASTRA_SPACE = `${ASTRA}${SPACE}`;

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

    let lines = ASTRA_SPACE.repeat(dimension / 2);
    const reversedLine = lines.split('').reverse().join('');
    const isOdd = !!(dimension % 2);

    if (isOdd) {
        lines = (lines + ASTRA_EOL + reversedLine + SPACE_EOL).repeat(dimension / 2) + lines + ASTRA_EOL;
    } else {
        lines = (lines + EOL + reversedLine + EOL).repeat(dimension / 2);
    }

    return lines;
};
