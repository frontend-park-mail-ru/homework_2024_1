"use strict";

function letters(seq, saveFirst) {
    if (seq == undefined)
        return undefined

    let seqArr = Array.from(seq)
    let seen = new Map();
    // Analyse sequence
    seqArr.forEach(function(letter, i) {
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
    let newSeq = "";
    seqArr.forEach(function(letter, i) {
        let letterObj = seen.get(letter);
        // "saveFirst == false" is due to there is an "saveFirst == undefined" option possible
        if (letterObj.unique || (saveFirst && i == letterObj.first) || (saveFirst == false && i == letterObj.last)) {
            newSeq += letter;
        }
    })

    return newSeq;
}
