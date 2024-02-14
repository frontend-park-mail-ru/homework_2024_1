'use strict';

/**
 * Нахождение чисел из одного столбца
 * @param {number[]} numbers - Все числа
 * @param {number} columns - Кол-во колонок
 * @param {number} nCol - Номер нужной колонки
 * @returns {number[]} Числа из nCol-й колонки
 */
const column = (numbers, columns, nCol) =>
    numbers.reduce((columnNumbers, num, i) => {
        if (i % columns === nCol) {
            columnNumbers.push(num);
        }
        return columnNumbers;
    }, []);

/**
 * Форматирование строки
 * @param {number[]} numbers - Массив чисел
 * @param {number} col - Кол-во колонок для вывода чисел
 * @throws {TypeError} - Переданы невалидные параметры
 * @returns {string} Отформатированная строка с числами переданного массива
 */
const format = (numbers, col) => {
    if (!Array.isArray(numbers) || typeof col !== "number" || col <= 0) {
        throw new TypeError('wrong parameters');
    }

    return numbers.reduce((result, num, i) => {
        const columnId = i % col;
        const columnNumbers = column(numbers, col, columnId);
        const columnOfStrings = columnNumbers.map(n => String(n));
        const arrayOfLength = columnOfStrings.map(str => str.length);
        const maxLength = Math.max(...arrayOfLength);
        const spacesForAlign = maxLength - String(numbers[i]).length;
        const isFirstColumn = columnId === 0;
        const additionalSpaces = isFirstColumn ? 0 : 1;
        result += ' '.repeat(spacesForAlign + additionalSpaces) + numbers[i];
        const isLastRow = i == numbers.length - 1;
        if ((i + 1) % col === 0 && !isLastRow) {
            result += '\n';
        }
        return result;
    }, '');
};
