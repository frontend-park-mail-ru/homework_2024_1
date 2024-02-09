'use strict';

const buildLayer = (symbol, count, length) => {
    const symbolString = symbol.repeat(count);
    const formattedString = symbolString.padStart(Math.floor((length - count) / 2) + count, ' ').padEnd(length, ' ');
    return formattedString + '\n';
}

const tree = (size) => {
    if (size < 3) {
        return null;
    }

    const width = 2 * size - 3;
    let result = '';
    for (let layer = 0; layer < size - 1; ++layer) {
        result += buildLayer('*', 2 * layer + 1, width);
    }
    result += buildLayer('|', 1, width);
    return result;
}