'use strict';

/**
 * Объединяет свойства объектов массива в один объект
 * @param {array} objects - массив объектов
 * @returns {object} - результирующий объект
 */

const zip = (...objects) => {
  if (!objects.length || objects.some((obj) => obj === null || typeof obj !== 'object' )) {
    return null;
  }
  return Object.assign(...objects.reverse());
};
