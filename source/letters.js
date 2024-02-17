"use strict"

const CHAR_AMOUNT_IN_STRING = 2;


/**
 * Функция возвращает строку такую, что каждый из исходных символов строки будет входить в нее не более 1 раза.
 * @param {string} initialString - входная строка
 * @param {boolean} shouldLeaveFirstChar true - оставит первое вхождение, false - последнее каждого повторяющегося символа. 
 * @returns {string} Новая строка с удаленными символами
 */
const getStringWithSingleOccuranceOfRepeatedChars = (initialString, shouldLeaveFirstChar) => {
    
    let setWithUniqueStringChars = new Set();
    if (!shouldLeaveFirstChar) {
        setWithUniqueStringChars = initialString.split('').reduceRight((set, char) => {set.add(char); return set}, new Set());
    } else {
        initialString.split('').forEach((char) => setWithUniqueStringChars.add(char));
    }

    return shouldLeaveFirstChar ? Array.from(setWithUniqueStringChars).join('')
                : Array.from(setWithUniqueStringChars).reverse().join('');
}


/**
 * Функция возвращает строку с символами, входившими в неё изначально не более одного раза.
 * @param {string} initialString - входная строка
 * @returns {string} Новая строка с символами, входившими изначально в неё не более одного раза.
 */
const getStringWithOnlyUniqueLetters = (initialString) => {
    const charArray = initialString.split(''); 
    const charToCharCountMap = charArray.reduce((countMap, char) => {
        countMap.set(char, (countMap.get(char) ?? 0) + 1);
        return countMap;
    }, new Map());
    
    const newLettersArray = charArray.filter(char => 
        charToCharCountMap.get(char) < CHAR_AMOUNT_IN_STRING); 
    
    return newLettersArray.join(''); 
}

/**
 * Функция удаляет символы, которые есть в строке более одного раза.
 * @param {string} initialString - входная строка
 * @param {boolean} shouldLeaveFirstChar true - оставит первое вхождение, false - последнее каждого повторяющегося символа. Без параметра - удалит все символы с частотой > 1
 * @returns {string} Новая строка с удаленными символами
 */
const letters = (initialString, shouldLeaveFirstChar) => {
    const isString = (initialString instanceof String) || typeof(initialString) === 'string';
    const isBool = typeof(shouldLeaveFirstChar) === 'boolean' || shouldLeaveFirstChar instanceof Boolean;
    const isUndefined = shouldLeaveFirstChar === undefined;
    
    if (!isString) {
        throw new TypeError("Invalid first parameter!");
    }

    if (!isUndefined) {
        if (!isBool) {
            throw new TypeError("Invalid second parameter!");
        }
        shouldLeaveFirstChar = shouldLeaveFirstChar.valueOf();
    }
    
    switch (shouldLeaveFirstChar) { 
        case undefined: 
           return getStringWithOnlyUniqueLetters(initialString);
        case true:
        case false: 
            return getStringWithSingleOccuranceOfRepeatedChars(initialString, shouldLeaveFirstChar);
        default:
            return getStringWithSingleOccuranceOfRepeatedChars(initialString, !!shouldLeaveFirstChar);
    }
}
