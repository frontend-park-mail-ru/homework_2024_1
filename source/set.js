'use strict';

/**
 * Получает путь к вложенному свойству объекта и устанавливает значение в это свойство
 *
 * @param {Object} object - Исходный объект
 * @param {string | Array<string>} path - Путь к свойству в виде строки или массива строк
 * @param {*} value - Значение, которое нужно установить
 * @returns {Object} - Исходный объект с установленным значением
 * @throws {TypeError} - Если тип `path` некорректный (не является строкой или массивом строк)
 */
const set = (object, path, value) => {
  /**
   * Разбирает путь к свойству и возвращает массив строк
   *
   * @param {string | Array<string>} path - Путь к свойству в виде строки или массива строк
   * @returns {Array<string>} - Массив строк, представляющих путь к свойству
   * @throws {TypeError} - Если тип `path` некорректный (не является строкой или массивом строк)
   */
  const parsePath = (path) => {
    if (typeof path === 'number' || !path || typeof path === 'function' || (path instanceof Object && !Array.isArray(path))) {
      throw new TypeError('Invalid path type');
    };
    if (Array.isArray(path)) {
      return path;
    } else {
      if (path.startsWith('.')) {
      path = path.substring(1);
    }
    return path.split('.');
    };
  };

  let currentObject = object;
  if (!object) {
    currentObject = {};
    object = currentObject;
  };

  const properties = parsePath(path);
  const lastProperty = properties.pop();

  /**
 * Создает или возвращает объект для указанного свойства внутри заданного объекта.
 *
 * @param {Object} object - Исходный объект, в котором нужно установить или получить свойство.
 * @param {string} property - Свойство, для которого нужно создать или получить объект.
 * @returns {Object} - Созданный или полученный объект для указанного свойства.
 */
  const finalObject = properties.reduce((object, property) => {
    if (!object.hasOwnProperty(property)) {
      object[property] = {};
    }
    return object[property];
  }, object);
  finalObject[lastProperty] = value;

  return object;
};





