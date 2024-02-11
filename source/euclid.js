'use strict';

function gcd(num1, num2) {
    if (num2 == 0)
        return num1;

    return gcd(num2, num1 % num2);
}

function euclid(...numbers) {
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        result = gcd(result, numbers[i]);
    }

    return result;
}