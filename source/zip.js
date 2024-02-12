'use strict';

/**
 * Объединяет свойства объектов массива в один объект
 * @param {array} args - массив объектов
 * @returns {object} - результирующий объект
 */

const zip = (...args) => {
  if (!args.length) return null;

  for (let arg of args) {
    if (typeof arg !== 'object') return null;
  }

  return Object.assign({}, ...args.reverse());
};
