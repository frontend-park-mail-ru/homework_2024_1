//делает код более безопасным, отслеживает некоторые ошибки, ex использование необъявленных переменных
'use strict';

/**
 * функция rle выполняет сжатие строки с использованием алгоритма RLE
 * @param {string} input - входная строка, которую нужно сжать
 * @returns {string} - сжатая строка
 */
function rle(input){
    if (typeof input !== 'string') {
        throw new Error("На вход должна подаваться строка");
    }
    let counter = 1;
    let prev = input[0];
    // .reduce((accumulator, currentValue) => {действия}, [нач.знач.])
    const resultArray = [...input].slice(1).reduce((accumulator, currentValue) => {
        // тк slice(1), то currentValue имеет индекс 1
        if(currentValue === prev){
            counter++;
        }
        else{
            accumulator.push(prev + (counter > 1 ? counter : ''));
            counter = 1;
        }
        prev = currentValue;
        return accumulator;
    }, []);
    if (prev !== undefined) {
        resultArray.push(prev + (counter > 1 ? counter : ''));
    }
    return resultArray.join('');
}
