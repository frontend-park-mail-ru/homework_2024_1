'use strict';

const inverse = (array, position = 0) => {
    if (!Array.isArray(array)) {
        return null;
    }

    console.log(position)
    console.log(typeof(position))
    console.log("\n")

    if (Number.isNaN(position) || typeof(position) !== 'number') {
        return null;
    }

    if (position === 0) {
        return array.reverse();
    }

    const partBeforePosition = array.slice(0, position);
    const partAfterPosition = array.slice(position, array.length);

    position > 0 ? partAfterPosition.reverse() : partBeforePosition.reverse();

    return partBeforePosition.concat(partAfterPosition);
};

