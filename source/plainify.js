'use strict';

/*
 * Returns plained object by given object. Throws Error if argument is not an object.
 * @function
 * @throws {InvalidArgumentException} If argument is not an object-type.
 * @param {object} object: Object to plainify.
 * @returns {object} object: Plained object.
 */
const plainify = function (object) {
	if (typeof object != 'object') {
		throw new Error('InvalidArgumentException');
	}
	return plain_obj(object);
}

const plain_obj = function (object, parent_string="") {
	let result = [];
	if (parent_string != "") { parent_string += "."}
	for (let key in object) {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			console.log(key);
			console.log("KEY UP");
			name = parent_string + key;
			if (typeof object[key] != 'object' || object[key] === null) {
				result.push([name, object[key]]);
			} 
			else {
				result = result.concat(Object.entries(plain_obj(object[key], name)));
			}
		}
	}
	return Object.fromEntries(result);
}