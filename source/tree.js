'use strict';
/**
 * Функция, рисующая елку.
 * @param {number} number - Число, определяющее высоту елки.
 * @returns {string} treepicture - Изображение елки.
 */
const tree = (number) => {
    if (number<3 || number!=Math. trunc(number) || !isFinite(number)){
        return null;
    }

    let treepicture = '';
    let star = 1;
    for (let i = 0; i < number-1; i++) {
        treepicture+=' '.repeat(number-2-i) +  '*'.repeat(star) + ' '.repeat(number-2-i) + '\n';
        star+=2;
    }
    treepicture+=' '.repeat(star/2-1) + '|' + ' '.repeat(star/2-1) + '\n';

    return treepicture;
}

