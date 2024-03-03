'use strict'
/**
 * форматирует массив чисел в строку состоющую из столбцов чисел, выравненных по правому краю
 * @param {Array.<number>} numbers - массив чисел
 * @param {number} columns - количество стобцов, на которое надо разделить массив
 * @returns {string|null} - строка содержащая столбцы чисел, возвращает null, если
 * @throws {TypeError} если `columns` не number.
 * @throws {RangeError} если `columns` меньше или равен 0.
 * @throws {TypeError} если `columns` бесконечность.
 * @throws {TypeError} если `columns` дробное число.
 * @throws {TypeError} если любой элемент массива `numbers` не тип number.
 */
const format = (numbers, columns) => {
    if (typeof columns !== 'number') {
        throw new TypeError('Parameter columns must be a number');
    }

    if (columns <= 0) {
        throw new RangeError('Parameter columns must be greater than 0');
    }

    if (!Number.isFinite(columns)) {
        throw new TypeError('Parameter columns must be a finite number');
    }

    if (!Number.isInteger(columns)) {
        throw new TypeError('Parameter columns must be an integer');
    }

    if (!numbers.every((item) => typeof item === 'number')) {
        throw new TypeError('All elements in numbers must be of type number');
    }
    const rows = Math.ceil(numbers.length / columns);
    const maxWidths = new Array(columns).fill(0);
    numbers.forEach(function(item,i, numbers) {
        const columnIndex = i % columns;
        const numberWidth = item.toString().length;
        maxWidths[columnIndex] = Math.max(maxWidths[columnIndex], numberWidth)
    });

    const lines = Array.from({ length: rows }, (_, rowIndex) =>
        numbers.slice(rowIndex * columns, (rowIndex + 1) * columns)
    );

    const formattedLines = lines.map((line) =>
        line
            .map((num, index) => num.toString().padStart(maxWidths[index], ' '))
            .join(' ')
    );

    return formattedLines.join('\n');
}