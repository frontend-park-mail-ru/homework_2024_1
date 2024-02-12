'use strict';

const set = function(object, path, value) {
  const properties = Array.isArray(path) ? path : path.split('.');
  let i = Array.isArray(path) ? 0 : 1;

  let current_object = object;
  if (object === null) {
    current_object = {};
    object = current_object;
  }

  for (i; i < properties.length - 1; i++) {
    const property = properties[i];
    if (!current_object.hasOwnProperty(property)) {
      current_object[property] = {};
    }
    current_object = current_object[property];
  }
  current_object[properties[properties.length - 1]] = value;
  return object;
};


