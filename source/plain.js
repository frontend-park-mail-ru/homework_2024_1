'use strict';
 const plain = (array) => {
	if (!Array.isArray(array)) {
		return undefined;
	}
	let result = array.reduce((res, item) => {
		if (Array.isArray(item)) {
			res.push(...plain(item));
		}
		else {
			res.push(item);
		}
		return res;
	}, [])
	return result;
}
