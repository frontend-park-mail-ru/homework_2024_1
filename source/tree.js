'use strict';

const tree = function (height) {
  if (height <= 2)
    return null;
  const result = [];
  let stars = 1;//количество зёзд в строке
  for (let i = 1; i < height; i++) {
    let spaces = ((height - 1) * 2 - (stars + 1)) / 2;//количество пробелов до и после звёзд
    result.push(' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces) + '\n');//массив строк со звёздами
    stars += 2;
  }
  result.push(' '.repeat(height - 2) + '|' + ' '.repeat(height - 2) + '\n');//итоговый массив строк
  return result.join('');
}
