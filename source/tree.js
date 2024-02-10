'use strict';

const buildLayer = (width, layerWidth, layerSymbol, spaceSymbol, endlineSymbol) => {
    const emptySpace = spaceSymbol.repeat(Math.floor((width - layerWidth) / 2));
    return emptySpace + layerSymbol.repeat(layerWidth) + emptySpace + endlineSymbol;
}

const tree = (size) => {
    if (typeof size != "number" && !(typeof size == "string" && parseInt(size)) || size < 3) {
        return null;
    }

    const width = 2 * size - 3;

    const endlineSymbol = '\n';
    const spaceSymbol = ' ';
    const treeSymbol = '*';
    const trunkSymbol = '|';

    let result = '';
    for (let layer = 0; layer < size - 1; ++layer) {
        const treeLayerWidth = 2 * layer + 1;
        result += buildLayer(width, treeLayerWidth, treeSymbol, spaceSymbol, endlineSymbol);
    }

    const trunkWidth = 1;
    result += buildLayer(width, trunkWidth, trunkSymbol, spaceSymbol, endlineSymbol);

    return result;
}
