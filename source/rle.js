const rle = (input) => {
    if (!(typeof input === 'string' || input instanceof String)) {
	throw new Error('Parameter is not a string or missing!');
    }
    let result = '';
    let count = 1;
    for (let i = 1; i <= input.length; i++) {
	if (input[i] === input[i-1]) {
	    count++;
	} else {
	    result += input[i-1];
	    if (count > 1) {
		result += count;
	    }
	    count = 1;
	}
    }
    return result;
}
