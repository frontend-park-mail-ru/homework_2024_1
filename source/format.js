/**
 * форматирует массив чисел в строку состоющую из столбцов чисел, выравненных по правому краю
 * @param {Array.<number>} numbers - массив чисел
 * @param {number} columns - количество стобцов, на которое надо разделить массив
 * @returns {string|null} - строка содержащая столбцы чисел, возвращает null, если
 */
const format = (numbers, columns) => {
    if (typeof columns !== 'number' || columns <= 0 || !Number.isFinite(columns) || !Number.isInteger(columns)) {
        throw "format params error"
    }
        numbers.forEach(function(item,j, numbers) {
        if (typeof item !== 'number') {
            throw "format numbers is not type number"
        }
    });
    const rows = Math.ceil(numbers.length / columns);
    const maxWidths = new Array(columns).fill(0);
    numbers.forEach(function(item,i, numbers) {
        const columnIndex = i % columns;
        const numberWidth = item.toString().length;
        maxWidths[columnIndex] = Math.max(maxWidths[columnIndex], numberWidth)
    });

    const result = [];
    for (let row = 0; row < rows; row++) {
        const line = [];
        for (let col = 0; col < columns; col++) {
            const index = row * columns + col;
            if (index < numbers.length) {
                const num = numbers[index].toString();
                const paddedNum = num.padStart(maxWidths[col], ' ');
                line.push(paddedNum);
            }
        }
        result.push(line.join(' '));
    }
    return result.join('\n');
}
