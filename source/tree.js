'use strict';

const ENDLINE_SYMBOL = '\n';
const SPACE_SYMBOL = ' ';
const TREE_SYMBOL = '*';
const TRUNK_SYMBOL = '|';

/**
 * Builds layer of tree picture by symbols.
 * @param {number} width - Width of picture.
 * @param {number} layerWidth - Width of tree layer.
 * @param {string} layerSymbol - Symbol which will used to build a layer.
 * @returns {string} - Layer of picture.
 */
const buildLayer = (width, layerWidth, layerSymbol) => {
    const emptySpace = SPACE_SYMBOL.repeat(Math.floor((width - layerWidth) / 2));
    const layerSpace = layerSymbol.repeat(layerWidth);

    return emptySpace + layerSpace + emptySpace + ENDLINE_SYMBOL;
}

/**
 * Builds a tree picture by symbols.
 * @param {number|string} size - Height of tree.
 * @returns {string} - Picture of tree.
 */
const tree = (size) => {
    if (!["number", "string"].includes(typeof size) || Number.isNaN(parseInt(size, 10)) || size < 3) {
        return null;
    }

    const width = 2 * size - 3;

    let result = '';

    for (let layer = 1; layer < size; ++layer) {
        const treeLayerWidth = 2 * layer - 1;
        result += buildLayer(width, treeLayerWidth, TREE_SYMBOL);
    }

    result += buildLayer(width, 1, TRUNK_SYMBOL);

    return result;
}
