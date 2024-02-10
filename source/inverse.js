'use strict';

const inverse = (array, position = 0) => {
    if (!Array.isArray(array)) {
        return false;
    }

    if (position === 0) {
        return array.reverse();
    }

    const array1 = array.slice(0, position);
    const array2 = array.slice(position, array.length);

    position >= 0 ? array2.reverse() : array1.reverse();

    return array1.concat(array2);
};
