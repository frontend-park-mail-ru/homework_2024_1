'use strict';

/*
 * Returns plained object by given object. Throws Error if argument is not an object.
 * @function
 * @name plainify
 * @throws {InvalidArgumentException} If argument is not an object-type.
 * @param {object} object: Object to plainify.
 * @returns {object} object: Plained object.
 */
const plainify = (object) => {
	if (typeof object !== 'object' || object === null) {
		throw new Error('InvalidArgumentException');
	}
	return plain_obj(object);
}

const plain_obj = (object, parent_string='') => {
	let result = [];
	parent_string += parent_string !== '' ? '.' : '';
	Object.keys(object).forEach((key) => {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			const name = parent_string + key;
			if (typeof object[key] !== 'object' || object[key] === null) {
				result.push([name, object[key]]);
			} 
			else {
				result = result.concat(Object.entries(plain_obj(object[key], name)));
			}
		}
	});
	return Object.fromEntries(result);
}
