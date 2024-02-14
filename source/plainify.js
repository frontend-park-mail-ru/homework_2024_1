'use strict';

/*
 * Returns true if argument is object, false otherwise.
 * @function
 * @name isObject
 * @param {object} Object to check.
 * @returns {Boolean}
 */
const isObject = (object) => Object.prototype.toString.call(object) === '[object Object]';

/*
 * Returns plained object by given object. Throws TypeError if argument is not an object.
 * @function
 * @name plainify
 * @throws {InvalidArgumentException} If argument is not an object-type.
 * @param {object} Object to plainify.
 * @returns {object} Plained object.
 */
const plainify = (object) => {
	if (!isObject(object)) {
		throw new TypeError('InvalidArgumentException');
	}
	return plain_obj(object);
}

/*
 * Recursive function that converts an object to plain form.
 * @function
 * @name plain_obj
 * @param {object} Object to plainify
 * @param {parent_string} An argument that stores the description of the location of the property
 * @returns {plained} Resultant plain object
 */
const plain_obj = (object, parent_string='') => {
	parent_string += parent_string ? '.' : '';
	if (Object.keys(object).length === 0) { return {}; }
	return Object.fromEntries(Object.keys(object).reduce((result, key) => {
		const name = parent_string + key;
		if (isObject(object[key])) {
			result = result.concat(Object.entries(plain_obj(object[key], name)));
		} 
		else {
			result.push([name, object[key]]);
		}
		return result;
	}, []));
}
