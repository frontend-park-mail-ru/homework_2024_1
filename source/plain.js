'use strict';
/**
 * Turnes multidimensional array into a single dimension one
 * @param {Array} array Multidimensional array
 * @returns {Array} Single dimension array
 */
 const plain = (array) => {
	if (!Array.isArray(array)) {
		return null;
	}

	return array.reduce((res, item) => {
		if (Array.isArray(item)) {
			res.push(...plain(item));
		}
		else {
			res.push(item);
		}

		return res;
	}, [])
}

