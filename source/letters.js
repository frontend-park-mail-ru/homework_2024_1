'use strict';

/**
 * Deletes repeating letters from the sequence
 * @param {string} seq - sequence to proceed
 * @param {boolean} saveFirst - if true then saves only first occurrence of letter, if false - only the last one; if undefined then deletes all the repeating letters
 * @returns {string} - proceeded string
 */
const letters = (seq, saveFirst) => {
    if (typeof seq != 'string' && !(seq instanceof String)) {
        return null;
    }

    let seqArr = Array.from(seq)
    const seen = new Map();
    // Analyse sequence
    seqArr.forEach((letter, i) => {
        if (seen.has(letter)) {
            seen.get(letter).last = i;
            seen.get(letter).unique = false;
        } else {
            // first - index of the first letter occurrence, 
            // last - index of the last letter occurrence,
            // unique - is letter unique in sequence
            seen.set(letter, {first: i, last: i, unique: true});
        }
    })

    // Create new sequence
    let newSeq = '';
    seqArr.forEach((letter, i) => {
        let letterObj = seen.get(letter);
        if (letterObj.unique || saveFirst != undefined && ((saveFirst && i === letterObj.first) || (!saveFirst && i === letterObj.last))) {
            newSeq += letter;
        }
    })

    return newSeq;
}
