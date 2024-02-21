'use strict';

/**
 * Функция строит ёлочку
 * @param {number|string} height высота ёлочки (число или строка)
 * @return {string|null} построенная ёлочка, если height <= 2, возарвщает null
 */
const tree = (height) => {
  if (height <= 2 || height === Infinity || isNaN(height)) {
    return null;
  }

  height = Math.round(height); //округление при вводе нецелочисленного значения

  const result = [];
  let stars = 1; //количество зёзд в строке

  for (let i = 1; i < height; i++) {
    const spaces = ((height - 1) * 2 - (stars + 1)) / 2; //количество пробелов до и после звёзд
    result.push(' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces) + '\n'); //массив строк со звёздами
    stars += 2;
  }
  result.push(' '.repeat(height - 2) + '|' + ' '.repeat(height - 2) + '\n'); //итоговый массив строк

  return result.join('');
}
