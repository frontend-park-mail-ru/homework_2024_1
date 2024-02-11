'use strict';

const roman = function (roman) {
    const romanNumbers = [
        {num: 1, ch: "I"}, {num: 4, ch: "IV"}, {num: 5, ch: "V"},
        {num: 9, ch: "IX"}, {num: 10, ch: "X"}, {num: 40, ch: "XL"},
        {num: 50, ch: "L"}, {num: 90, ch: "XC"}, {num: 100, ch: "C"},
        {num: 400, ch: "CD"}, {num: 500, ch: "D"}, {num: 900, ch: "CM"},
        {num: 1000, ch: "M"},
    ];

    if (containsDigits(roman)) {
        return arabToRoman(roman, romanNumbers);
    } else {
        return romanToArab(roman, romanNumbers);
    }
}

function arabToRoman(input, romanNumbers) {
    let pointer = 12;
    let res = "";
    let A = input;
    while (A > 0) {
        while (romanNumbers[pointer].num > A) {
            pointer -= 1;
        }
        res += romanNumbers[pointer].ch;
        A -= romanNumbers[pointer].num;
    }
    return res;
}

function romanToArab(input, romanNumbers) {
    input = input.toUpperCase();
    let i = 12;
    let pointer = 0;
    let res = 0;
    while (pointer < input.length) {
        while (input.substring(pointer, pointer + romanNumbers[i].ch.length) !== romanNumbers[i].ch) {
            i--;
            if (i === 0) break;
        }
        res += romanNumbers[i].num;
        pointer += romanNumbers[i].ch.length;
    }
    return res;
}

function containsDigits(input) {
    if (typeof(input) !== "string") {
        input = String(input);
    }
    return /\d/.test(input);
}

