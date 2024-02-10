// Макаров Никита WEB-22

'use strict';

const nod = (...numbers) => {
    const nod2 = (a, b) => (b === 0 ? a : nod2(b, a % b));

    if (numbers.length < 2) {
        return Math.abs(numbers[0]);
    }

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = nod2(result, numbers[i]);
    }

    return Math.abs(result);
};

const euclid = (...numbers) => nod(...numbers);