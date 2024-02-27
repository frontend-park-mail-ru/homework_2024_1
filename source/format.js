/**
 * форматирует массив чисел в строку состоющую из столбцов чисел, выравненных по правому краю
 * @param {Array.<Number>} numbers - массив чисел
 * @param {Number} columns - количество стобцов, на которое надо разделить массив
 * @returns {string|null} - строка содержащая столбцы чисел, возвращает null, если
 */
let format = (numbers, columns) => {
    for (let j = 0; j < numbers.length; j++) {
        if (typeof numbers[j] !== 'number' || typeof columns !== 'number' || columns <= 0) {
            return null;
        }
    }
    const rows = Math.ceil(numbers.length / columns);
    const maxWidths = new Array(columns).fill(0);
    for (let i = 0; i < numbers.length; i++) {
        const columnIndex = i % columns;
        const numberWidth = numbers[i].toString().length;
        maxWidths[columnIndex] = Math.max(maxWidths[columnIndex], numberWidth)
    }
    result = [];
    for (let row = 0; row < rows; row++) {
        line = [];
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
