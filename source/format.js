'use strict'

const column = function (numbers, columns, nCol) {
    let numbersInColumn = []
    for (let i = 0; i < numbers.length; i++) {
        if (i % columns === nCol) {
            numbersInColumn.push(numbers[i])
        }
    }
    return numbersInColumn
}
  
const format = function (numbers, col) {
    let result = ''
    for (let i = 0; i < numbers.length; i++) {
        const maxLength = Math.max(...column(numbers, col, i % col).map(num => String(num)).map(str => str.length));
        result += ' '.repeat(maxLength - String(numbers[i]).length + 1) + numbers[i]
        if ((i + 1) % col === 0 && i != numbers.length - 1) {
            result += '\n'
        }
    }
    return result
} ;
