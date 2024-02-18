`use strict`;

/** Returns new string that represents RLE compression
 * @param {string} input - input string to compress
 * @returns {string} res - compressed string
 * */
const rle = (input) => {
    if(!(typeof input === 'string' && input))
        throw new TypeError("input parameter must be non empty string")

    let res = '';
    let counterNow = 1;
    for( let i  = 1; i <= input.length; i++){
        if(input[i - 1] === input[i]){
            counterNow++;
        } else{
            res += input[i - 1];
            res += (counterNow > 1) ? counterNow : '';
            counterNow = 1;
        }
    }

    return res;
}
