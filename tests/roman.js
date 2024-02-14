'use strict';

QUnit.module('Тестируем функцию roman', function () {
	QUnit.test('roman правильно переводит из римской системы счисления', function (assert) {
		assert.strictEqual(roman('I'), 1);
		assert.strictEqual(roman('V'), 5);
		assert.strictEqual(roman('M'), 1000);
		assert.strictEqual(roman('l'), 50);
		assert.strictEqual(roman('d'), 500);

		assert.strictEqual(roman('iv'), 4);
		assert.strictEqual(roman('iii'), 3);
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

    QUnit.test('roman не заходит за границы допустимых значений', function (assert) {
		let error = RangeError();
		error.message = "Число должно быть больше 0 и меньше 4000"
		assert.throws(() => {roman(0)}, error);
		assert.throws(() => {roman(4000)}, error);
    });

	QUnit.test('roman не обрабатывает числа с плавающей точкой', function (assert) {
		let error = TypeError();
		error.message = "Число должно быть целым"
		assert.throws(() => {roman(0.3)}, error);
		assert.throws(() => {roman(99.1223)}, error);
    });

    QUnit.test('roman проверяет корректность римского числа', function (assert) {
		let error = RangeError();
		error.message = "Неправильная запись римского числа"
		assert.throws(() => {roman('MMaboba')}, error);
        assert.throws(() => {roman('MAN')}, error);
        assert.throws(() => {roman('XO')}, error);

    });

    QUnit.test('roman проверяет, что передан корректный тип данных', function (assert) {
		let error = TypeError();
		error.message = "Тип данных не поддерживается";
		assert.throws(() => {roman({})}, error);
		assert.throws(() => {roman([])}, error);
		assert.throws(() => {roman(true)}, error);
		assert.throws(() => {roman(undefined)}, error);
    });
});
