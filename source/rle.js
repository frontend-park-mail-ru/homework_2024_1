const rle = (input) => {
    let result = '';
    let count = 1;
    let prev = input[0];
    for (let i = 1; i <= input.length; i++) {
	if (input[i] == prev) {
	    count++;
	} else {
	    result += prev;
	    if (count > 1) {
		result += count;
	    }
	    prev = input[i];
	    count = 1;
	}
    }
    return result;
}
