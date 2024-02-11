//делает код более безопасным, отслеживает некоторые ошибки, ex использование необъявленных переменных
'use strict';

/**
 * функция rle выполняет сжатие строки с использованием алгоритма RLE
 * @param {string} input - входная строка, которую нужно сжать
 * @returns {string} - сжатая строка
 */
function rle(input){
    if (typeof input !== 'string') {
        return "введите строку";
    }
    // === проверяет равенство значений и типов, а == может преобразовывать типы (это неудобно)
    if(input === ""){
        return "";
    }
    let resultArray = [];
    let counter = 1;
    for (let i = 0; i < input.length; i++){
        if( input[i] === input[i + 1] ){
            counter++;
        }
        else{
            // += могут быть медленными, особенно для больших строк, тк каждый раз создается новая строка,
            // строки в JS неизменяемые. массивы являются изменяемыми
            resultArray.push(input[i] + (counter > 1 ? counter : ''));
            counter = 1;
        }
    }
    return resultArray.join('');
}
