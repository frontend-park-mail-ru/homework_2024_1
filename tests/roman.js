'use strict';

QUnit.module('Тестируем функцию roman', function () {
        QUnit.test('roman правильно переводит из римской системы счисления', function (assert) {
                assert.strictEqual(roman('I'), 1);
                assert.strictEqual(roman('V'), 5);
                assert.strictEqual(roman('M'), 1000);
                assert.strictEqual(roman('l'), 50);
                assert.strictEqual(roman('d'), 500);

                assert.strictEqual(roman('iv'), 4);
                assert.strictEqual(roman('iiii'), 4);
                assert.strictEqual(roman('CM'), 900);

                assert.strictEqual(roman('MCMIV'), 1904);
                assert.strictEqual(roman('MCMXC'), 1990);
                assert.strictEqual(roman('mmxvii'), 2017);
        });

        QUnit.test('roman правильно переводит из десятичной системы счисления', function (assert) {
                assert.strictEqual(roman(1), 'I');
                assert.strictEqual(roman(5), 'V');
                assert.strictEqual(roman(1000), 'M');
                assert.strictEqual(roman(50), 'L');
                assert.strictEqual(roman(500), 'D');

                assert.strictEqual(roman(4), 'IV');
                assert.strictEqual(roman(900), 'CM');

                assert.strictEqual(roman(1904), 'MCMIV');
                assert.strictEqual(roman(1990), 'MCMXC');
                assert.strictEqual(roman(2017), 'MMXVII');
        });

        QUnit.test('roman правильно определяет, что было передано на вход', function (assert) {
                assert.strictEqual(roman('1904'), 'MCMIV');
                assert.strictEqual(roman('1990'), 'MCMXC');
                assert.strictEqual(roman('2017'), 'MMXVII');
        });

        QUnit.test('roman правильно определяет, что было передано на вход', function (assert) {
                assert.strictEqual(roman('1.904'), 'MCMIV');
                assert.strictEqual(roman('1.990'), 'MCMXC');
                assert.strictEqual(roman('2.017'), 'MMXVII');
        });

        QUnit.test('roman правильно определяет, что было передано на вход', function (assert) {
                assert.strictEqual(roman(new String('1.904')), 'MCMIV');
                assert.strictEqual(roman(new String('1.990')), 'MCMXC');
                assert.strictEqual(roman(new String('2.017')), 'MMXVII');
        });

        QUnit.test('roman валидирует данные', function (assert) {
                assert.strictEqual(roman('VHBVbBVYBSUYIHBVohivbhjxbhdvVIIIIIAAAAA'), null);
                assert.strictEqual(roman([1, 12, 4124]), 'I');
        });

        QUnit.test('roman правильно обрабатывает объект string', function (assert) {
                assert.strictEqual(roman(new String('V')), 5);
                assert.strictEqual(roman(new String('2')), 'II');
        });

        QUnit.test('roman правильно обрабатывает большие числа', function (assert) {
                assert.throws(function () {roman(9001);}, 'Число превышает максимально допустимое значение');
        });


        QUnit.test('roman правильно обрабатывает бесконечность', function (assert) {
                assert.strictEqual(roman(Infinity), null);
        });

        QUnit.test('roman правильно обрабатывает NaN', function (assert) {
                assert.strictEqual(roman(NaN), null);
    });
});
