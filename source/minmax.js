'use strict';

function updateMinMax(min, max, current) {
    if (!isNaN(current)) {
        if (max === undefined) {
            max = current;
        } else {
            if (current > max) {
                max = current;
            }
        }
        if (min === undefined) {
            min = current;
        } else {
            if (current < min) {
                min = current;
            }
        }
    }
    return [min, max];
}

function minmax(numbers) {
    let currentWord = "";
    let currentNumber;
    let minMaxNumbers = [undefined, undefined];
    for (let symbol of numbers) {
        if (symbol !== ' ') {
            currentWord += symbol;
        } else if (currentWord !== "") {
            currentNumber = Number(currentWord)
            minMaxNumbers = updateMinMax(minMaxNumbers[0], minMaxNumbers[1], currentNumber);
            currentWord = "";
        }
    }
    if (currentWord !== "") {
        currentNumber = Number(currentWord);
        minMaxNumbers = updateMinMax(minMaxNumbers[0], minMaxNumbers[1], currentNumber);
    }
    return minMaxNumbers;
}