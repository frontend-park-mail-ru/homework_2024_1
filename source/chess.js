'use strict'

/**
 * Print chess board with a current length
 * @param {number} dimension - length of chess board
 * @returns {string}
 */
const chess = (dimension) => {

    //если длина доски не является допустимым значением
    if (!Number(dimension) || dimension <= 1) {
        return null;
    }

    let board = "* ".repeat(dimension / 2),
        isOdd = Number(dimension % 2 === 1)

    board = (board + '*'.repeat(isOdd) + '\n' + board.split('').reverse().join('') +
            ' '.repeat(isOdd) + '\n').repeat(dimension / 2) + (board + '*\n').repeat(isOdd);

    return board;
};
