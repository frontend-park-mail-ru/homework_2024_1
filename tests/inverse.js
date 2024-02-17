'use strict';

QUnit.module('Тестируем функцию inverse', function () {
    QUnit.test('Функция работает с пустым массивом', function (assert) {
        assert.deepEqual(inverse([]), []);
        assert.deepEqual(inverse([], 2), []);
    });

    QUnit.test('Функция работает с массивом длины один', function (assert) {
        assert.deepEqual(inverse([1]), [1]);
        assert.deepEqual(inverse(['a']), ['a']);
        assert.deepEqual(inverse([null]), [null]);
        assert.deepEqual(inverse([false]), [false]);
        assert.deepEqual(inverse([1], 0), [1]);
        assert.deepEqual(inverse(['a'], 1), ['a']);
        assert.deepEqual(inverse([null], -2), [null]);
        assert.deepEqual(inverse([false], -3), [false]);
    });
    QUnit.test('Функция работает с массивом длины два', function (assert) {
        assert.deepEqual(inverse([1, 2], 0), [2, 1]);
        assert.deepEqual(inverse([1, 2], 1), [1, 2]);
        assert.deepEqual(inverse([1, 2], -1), [1, 2]);
    });

    QUnit.test('Функция работает, если в неё передан только массив', function (assert) {
        assert.deepEqual(inverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
        assert.deepEqual(inverse(['a', 'b', 'c', 'd', 'e']), ['e', 'd', 'c', 'b', 'a']);
        assert.deepEqual(inverse([null, false, 0, Infinity, '', undefined]), [undefined, '', Infinity, 0, false, null]);
    });

    QUnit.test('Функция не переставляет первые элементы массива', function (assert) {
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 0), [5, 4, 3, 2, 1]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 1), [1, 5, 4, 3, 2]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 2), [1, 2, 5, 4, 3]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 15), [1, 2, 3, 4, 5]);
    });

    QUnit.test('Функция не переставляет последние элементы массива', function (assert) {
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 0), [5, 4, 3, 2, 1]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -1), [4, 3, 2, 1, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -2), [3, 2, 1, 4, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -5), [1, 2, 3, 4, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -15), [1, 2, 3, 4, 5]);
    });
    QUnit.test('Функция выбрасывает ошибку, если первым аргументом передан не массив', (assert) => {
        assert.throws(() => inverse(''), new TypeError(NOT_ARRAY_ERROR));
        assert.throws(() => inverse(), new TypeError(NOT_ARRAY_ERROR));
        assert.throws(() => inverse(null), new TypeError(NOT_ARRAY_ERROR));
        assert.throws(() => inverse(0), new TypeError(NOT_ARRAY_ERROR));
        assert.throws(() => inverse(false), new TypeError(NOT_ARRAY_ERROR));
        assert.throws(() => inverse(Infinity), new TypeError(NOT_ARRAY_ERROR));
    });
    QUnit.test('Функция работает с "new Number"', (assert) => {
        assert.deepEqual(inverse([1, 2, 3, 4, 5], new Number(2)), [1, 2, 5, 4, 3]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], new Number(-2)), [3, 2, 1, 4, 5]);
    });
    QUnit.test('Функция выбрасывает ошибку, если вторым аргументом передано не число', (assert) => {
        assert.throws(() => inverse([], ''), new TypeError(NOT_A_NUMBER_ERROR));
        assert.throws(() => inverse([], {}), new TypeError(NOT_A_NUMBER_ERROR));
        assert.throws(() => inverse([], null), new TypeError(NOT_A_NUMBER_ERROR));
        assert.throws(() => inverse([], []), new TypeError(NOT_A_NUMBER_ERROR));
        assert.throws(() => inverse([], false), new TypeError(NOT_A_NUMBER_ERROR));
    });
});
