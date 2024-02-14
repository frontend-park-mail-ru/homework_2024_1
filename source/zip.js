'use strict';

/**
 * Объединяет свойства объектов массива в один объект
 * @param {array} objects - массив объектов
 * @returns {object} - результирующий объект
 */

const zip = (...objects) => {
  const isNotValidObjects = objects.some((object) => object === null || typeof object !== 'object');

  if (!objects.length || isNotValidObjects) {
    return null;
  }

  return Object.assign({}, ...objects.reverse());
};
