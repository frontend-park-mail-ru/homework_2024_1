'use strict';

const roman = (roman) => {
    const romanNumbers = [
        {num: 1, ch: "I"}, {num: 4, ch: "IV"}, {num: 5, ch: "V"},
        {num: 9, ch: "IX"}, {num: 10, ch: "X"}, {num: 40, ch: "XL"},
        {num: 50, ch: "L"}, {num: 90, ch: "XC"}, {num: 100, ch: "C"},
        {num: 400, ch: "CD"}, {num: 500, ch: "D"}, {num: 900, ch: "CM"},
        {num: 1000, ch: "M"},
    ];

    if (isNaN(roman)) {
        roman = roman.toUpperCase();
        let idx = 12;
        let pointer = 0;
        let result = 0;
        while (pointer < roman.length) {
            while (roman.substring(pointer, pointer + romanNumbers[idx].ch.length) !== romanNumbers[idx].ch) {
                idx--;
                if (idx === 0) break;
            }
            result += romanNumbers[idx].num;
            pointer += romanNumbers[idx].ch.length;
        }
        return result;
    } else {
        let pointer = 12;
        let result = "";
        let A = roman;
        while (A > 0) {
            while (romanNumbers[pointer].num > A) {
                pointer -= 1;
            }
            result += romanNumbers[pointer].ch;
            A -= romanNumbers[pointer].num;
        }
        return result;
    }
}
