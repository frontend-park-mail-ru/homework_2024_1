'use strict';

/**
 * Массив пар с эквивалентами Римской и Десятичной системы счисления
 * @constant
 * @type {Array.<{decimalValue: number, romanValue: string}>}
 */
const LIST_WITH_CONVERTION_ROMAN_AND_DECIMAL = [
  /**
   * @type {Object}
   * @property {number} decimalValue - Значение в десятичной системе счисления.
   * @property {string} romanValue - Значение в римской системе счисления.
   */
  { decimalValue: 1000, romanValue: 'M' },
  { decimalValue: 900, romanValue: 'CM' },
  { decimalValue: 500, romanValue: 'D' },
  { decimalValue: 400, romanValue: 'CD' },
  { decimalValue: 100, romanValue: 'C' },
  { decimalValue: 90, romanValue: 'XC' },
  { decimalValue: 50, romanValue: 'L' },
  { decimalValue: 40, romanValue: 'XL' },
  { decimalValue: 10, romanValue: 'X' },
  { decimalValue: 9, romanValue: 'IX' },
  { decimalValue: 5, romanValue: 'V' },
  { decimalValue: 4, romanValue: 'IV' },
  { decimalValue: 1, romanValue: 'I' },
];
const ROMAN_CORRECT_REGEX = new RegExp(
  /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
);

/**
 * Преобразует числа из римской системы счисления в десятичную.
 * @param {string} romanNumber - Аргумент содержащий число в Римской системе счисления.
 * @returns {number} - Возвращает преобразованное число в десятичной системе счисления.
 */
const convertFromRomanToDecimal = (romanNumber) => {
  let upperRomanNumber = romanNumber.toUpperCase();

  if (!ROMAN_CORRECT_REGEX.test(upperRomanNumber) || !upperRomanNumber.length) {
    throw new RangeError('Неправильная запись римского числа');
  }

  return LIST_WITH_CONVERTION_ROMAN_AND_DECIMAL.reduce(
    (currentSum, currentPair) => {
      const checkOnStartWithGivenRomanLetter = new RegExp(
        '^' + currentPair.romanValue + '{0,4}',
        'g'
      );

      if (checkOnStartWithGivenRomanLetter.test(upperRomanNumber)) {
        const matchedRomanLetters = upperRomanNumber.match(checkOnStartWithGivenRomanLetter);
        const countMatchedRomanLetters = matchedRomanLetters
          ? matchedRomanLetters[0].split(currentPair.romanValue).length - 1
          : 0;
        currentSum += currentPair.decimalValue * countMatchedRomanLetters;
        upperRomanNumber = upperRomanNumber.slice(
          currentPair.romanValue.length * countMatchedRomanLetters
        );
      }

      return currentSum;
    },
    0
  );
};

/**
 * Преобразует числа из десятичной системы счисления в римскую.
 * @param {number} number - Аргумент содержащий число в десятичной системе счисления.
 * @returns {string} - Возвращает преобразованное число в римской системе счисления.
 */
const convertFromDecimalToRoman = (decimalNumber) => {
  let convertedDecimalNumber = Number(decimalNumber);

  if (!Number.isInteger(convertedDecimalNumber)) {
    throw new TypeError('Число должно быть целым');
  }

  if (convertedDecimalNumber > 3999 || convertedDecimalNumber <= 0) {
    throw new RangeError('Число должно быть больше 0 и меньше 4000');
  }

  return LIST_WITH_CONVERTION_ROMAN_AND_DECIMAL.reduce(
    (resultRomanNumber, currentPair) => {
      while (convertedDecimalNumber >= currentPair.decimalValue) {
        convertedDecimalNumber -= currentPair.decimalValue;
        resultRomanNumber += currentPair.romanValue;
      }

      return resultRomanNumber;
    },
    ''
  );
};

/**
 * Преобразует числа из римской системы счисления в десятичную и наоборот.
 * @param {string|number} number - Аргумент содержащий число в системе счисления из которой надо перевести
 * @returns {string|number} - Возвращает преобразованное число в другую систему счисления.
 */
const roman = (number) => {
  if (!['number', 'string'].includes(typeof number)) {
    throw new TypeError('Тип данных не поддерживается');
  }

  if (isNaN(number)) {
    return convertFromRomanToDecimal(number);
  }

  return convertFromDecimalToRoman(number);
};
