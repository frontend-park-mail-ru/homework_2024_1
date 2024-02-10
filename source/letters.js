function letters(seq, saveFirst) {
    let seen = new Map();
    // Analyse sequence
    for (let i = 0; i < seq.length; i++) {
        let letter = seq[i];
        if (seen.has(letter)) {
            seen.get(letter).last = i;
            seen.get(letter).unique = false;
        } else {
            // first - index of the first letter occurrence, 
            // last - index of the last letter occurrence,
            // unique - is letter unique in sequence
            seen.set(letter, {first: i, last: i, unique: true});
        }
    }

    // Create new sequence
    newSeq = "";
    for (let i = 0; i < seq.length; i++) {
        let letter = seq[i];
        let letterObj = seen.get(letter);
        // "saveFirst == false" is due to there is an "saveFirst == undefined" option possible
        if (letterObj.unique || (saveFirst && i == letterObj.first) || (saveFirst == false && i == letterObj.last)) {
            newSeq += letter;
        }
    }

    return newSeq;
}