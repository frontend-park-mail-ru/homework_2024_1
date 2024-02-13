'use strict';

/**
 * Объединяет свойства объектов массива в один объект
 * @param {array} objectsToZip - массив объектов
 * @returns {object} - результирующий объект
 */

const zip = (...objectsToZip) => {
  if (!objectsToZip.length || objectsToZip.some((objToZip) => objToZip === null || typeof objToZip !== 'object' )) {
    return null;
  }
  return Object.assign(...objectsToZip.reverse());
};
