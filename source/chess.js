const chess = (dimension = 2) => {
    let board = '', invert = 0, i = 0//здесь invert - смещение для новой строки
    if (!Number.isInteger(dimension = +dimension) || dimension <= 1){//если длина доски не является допустимым значением
        return null
    }
    while (i < dimension ** 2){
        board += (((i++ + invert) % 2) == 0 ? '*' : ' ')//чередование символов
        if (i % dimension == 0){//если конец строки, то перейти на новую строку
            board += '\n'
            invert += dimension % 2 == 0//обновить смещение
        }
    }
    return board
};