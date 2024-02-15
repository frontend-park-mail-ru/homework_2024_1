function isCorrect(input){
    return typeof input === 'string' && input !== '';
}

const rle = (input) => {
    if(!isCorrect(input))
        throw new Error("input parameter must be non empty string")

    let res = '';
    let counterNow = 1;
    for( let i  = 1; i <= input.length; i++){
        if(input[i - 1] === input[i]){
            counterNow++;
        } else{
            res += input[i - 1];
            res = (counterNow > 1) ? (res + counterNow) : res;
            counterNow = 1;
        }
    }

    return res;
}