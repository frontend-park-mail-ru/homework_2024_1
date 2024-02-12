'use strict';

/**
 * Нахождение чисел из одного столбца
 * @param {number[]} numbers - Все числа
 * @param {number} columns - Кол-во колонок
 * @param {number} nCol - Номер нужной колонки
 * @returns {number[]} Числа из nCol-й колонки
 */
const column = (numbers, columns, nCol) => {
    return numbers.reduce((columnNumbers, num, i) => {
        if (i % columns === nCol) {
            columnNumbers.push(num);
        }
        return columnNumbers;
    }, []);
};

/**
 * Форматирование строки
 * @param {number[]} numbers - Массив чисел
 * @param {number} col - Кол-во колонок для вывода чисел
 * @returns {string} Отформатированная строка с числами переданного массива
 */
const format = (numbers, col) => {
    if (!Array.isArray(numbers) || col <= 0) {
        return '';
    }
    return numbers.reduce((result, num, i) => {
        const columnNumbers = column(numbers, col, i % col);
        const columnOfStrings = columnNumbers.map(n => String(n));
        const arrayOfLength = columnOfStrings.map(str => str.length);
        const maxLength = Math.max(...arrayOfLength);
        const spacesForAlign = maxLength - String(numbers[i]).length;
        result += ' '.repeat(spacesForAlign + ((i % col) === 0 ? 0 : 1)) + numbers[i];
        let isLastRow;
        if ((i + 1) % col === 0 && (isLastRow = i) != numbers.length - 1) {
            result += '\n';
        }
        return result;
    }, []);
};
