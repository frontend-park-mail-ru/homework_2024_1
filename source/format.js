/**
 * форматирует массив чисел в строку состоющую из столбцов чисел, выравненных по правому краю
 * @param {Array.<number>} numbers - массив чисел
 * @param {number} columns - количество стобцов, на которое надо разделить массив
 * @returns {string|null} - строка содержащая столбцы чисел, возвращает null, если
 */
const format = (numbers, columns) => {
    if (typeof columns !== 'number' || columns <= 0 || !Number.isFinite(columns) || !Number.isInteger(columns)) {
        throw Error("format params error")
    }

    if (!numbers.every((item) => typeof item === 'number')) {
        throw Error("format numbers is not type number");
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