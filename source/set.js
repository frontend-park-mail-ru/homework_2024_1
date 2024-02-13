'use strict';

/**
 * Получает путь к вложенному свойству объекта и устанавливает значение в это свойство
 *
 * @param {Object} object - Исходный объект
 * @param {string | Array<string>} path - Путь к свойству в виде строки или массива строк
 * @param {*} value - Значение, которое нужно установить
 * @returns {Object} - Исходный объект с установленным значением
 */
const set = (object, path, value) => {
  let currentObject = object;
  if (!object) {
    currentObject = {};
    object = currentObject;
  }

  if (typeof path === 'number' || path === null) {
    return;
  }

  let properties
   if (Array.isArray(path)) {
    
     properties = path;
   }
   else {
      properties = path.split('.');
      properties.shift();
      if (path.substring(0, 1) != '.'){
        return
      }
   };
   
  const lastProperty = properties.pop();

  /**
 * Создает или возвращает объект для указанного свойства внутри заданного объекта.
 *
 * @param {Object} object - Исходный объект, в котором нужно установить или получить свойство.
 * @param {string} property - Свойство, для которого нужно создать или получить объект.
 * @returns {Object} - Созданный или полученный объект для указанного свойства.
 */
  const setObject = (object, property) => {
    if (!object.hasOwnProperty(property)) {
      object[property] = {};
    }
    return object[property];
  };

  const finalObject = properties.reduce(setObject, object);
  finalObject[lastProperty] = value;

  return object;
};

