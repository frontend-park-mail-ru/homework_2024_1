const minmax = numbers => {
    numbers = numbers.match(/-?\.?\d+\e-?\d+|-?\d*\.?\d+|-?\bInfinity\b/g); //-?\.?\d+\e-?\d+ парсит 1е4 и всё что с этим связано
    //-?\d*\.?\d+ парсит целые числа и числа с плавающей точкой ... \b-?Infinity\b парсит Infinity, причём оно должно быть отделено
    // от остального текста.  /g - для поиска по всей строке, а не первого встреченного числа
    if (numbers !== null){
        const min = Math.min(...numbers);
        const max = Math.max(...numbers);
        return [min, max];
    }
    return [undefined, undefined];
};