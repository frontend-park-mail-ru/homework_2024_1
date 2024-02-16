//делает код более безопасным, отслеживает некоторые ошибки, ex использование необъявленных переменных
'use strict';

/**
 * функция rle выполняет сжатие строки с использованием алгоритма RLE
 * @param {string} input - входная строка, которую нужно сжать
 * @returns {string} - сжатая строка
 */
let rle = (input) => {
    let objToStr = Object.prototype.toString;
    if (objToStr.call(input) !== "[object String]") {
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
    if(prev){
        resultArray.push(prev + (counter > 1 ? counter : ''));
    }
    return resultArray.join('');
}


/*

Код без slice(1) и join('')

function rle(input){
    if (typeof input !== 'string'){
        throw new Error("На вход должна подаваться строка");
    }
    let counter = 0;
    let prev = input[0];
    const resultArray = [...input].map((currentValue) => {
        if(currentValue ===prev){
            counter++;
            return '';
        }
        else{
            let result = prev + (counter > 1 ? counter : '');
            counter = 1;
            prev = currentValue;
            return result;
        }
    });
    // добавляет последний элемент в resultArray
    if (counter >0){
        resultArray.push(prev +(counter > 1 ? counter : ''));
    }
    // слияние accumulator и currentValue в одну строку
    return resultArray.reduce((accumulator, currentValue) => accumulator + currentValue, '');
}
 */