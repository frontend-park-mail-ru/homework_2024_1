"use strict"

const CHAR_AMOUNT_IN_STRING = 2;

const getStringWithSingleOccuranceOfRepeatedChars = (initialString, shouldLeaveFirstChar) => {
    
    const setWithUniqueStringChars = new Set();
    if (!shouldLeaveFirstChar) {
        for (let i = initialString.length - 1; i >= 0; i--) {
            setWithUniqueStringChars.add(initialString[i]);
        }
    } else {
        for (let char of initialString) {
            setWithUniqueStringChars.add(char);
        }
    }

    return shouldLeaveFirstChar ? Array.from(setWithUniqueStringChars).join('')
                : Array.from(setWithUniqueStringChars).reverse().join('');
}

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
    const isNotString = (typeof(initialString) !== 'string');
    const isNotBool = (typeof(shouldLeaveFirstChar) !== 'boolean');
    const isNotUndefined = (typeof(shouldLeaveFirstChar) !== 'undefined');

    if (isNotString || (isNotBool && isNotUndefined)) {
        return null;
    }
    
    switch (shouldLeaveFirstChar) { 
        case undefined: 
           return getStringWithOnlyUniqueLetters(initialString);
        case true:
        case false: 
            return getStringWithSingleOccuranceOfRepeatedChars(initialString, shouldLeaveFirstChar);
        default:
            return null;
    }
}
