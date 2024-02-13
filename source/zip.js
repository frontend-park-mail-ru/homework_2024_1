'use strict';

/**
 * Объединяет свойства объектов массива в один объект
 * @param {array} objects - массив объектов
 * @returns {object} - результирующий объект
 */

const zip = (...objects) => {
  let is_vald_objects = objects.some((object) => object === null || typeof object !== 'object');

  if (!objects.length || is_vald_objects) {
    return null;
  }

  return Object.assign({}, ...objects.reverse());
};
