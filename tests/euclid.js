'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
		assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
		assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
		assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

		const n = 17;
		assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [ 80325, 55275, 8746650, 3000000, 45672375, 225, 54675 ];
		assert.strictEqual(euclid(...[ ...temp, ...temp, ...temp, ...temp, ...temp ]), euclid(...temp));
	});
	
	QUnit.test('Работает правильно с двумя числами', function (assert) {
		assert.strictEqual(euclid(12, 18), 6, 'euclid(12, 18) === 6');
		assert.strictEqual(euclid(10, 5), 5, 'euclid(10, 5) === 5');
		assert.strictEqual(euclid(1040, 260), 260, 'euclid(1040, 260) === 260');
	});

	QUnit.test('Работает правильно с отрицательными числами', function (assert) {
		assert.throws(() => euclid(-12, -18), Error, 'euclid(-12, -18) throws Error');
		assert.throws(() => euclid(-4, -11, -10, -32, -9), Error, 'euclid(-4, -11, 10, 32, -9) throws Error');
	});

	QUnit.test('Работает правильно с числами разных знаков', function (assert) {
		assert.throws(() => euclid(-12, 18, -6), Error, 'euclid(-12, 18, -6) throws Error');
		assert.throws(() => euclid(90, -80, 100, -77, -8), Error, 'euclid(90, -80, 100, -77, -8) throws Error');
	});	

	QUnit.test('Работает правильно с произвольным количеством чисел', function (assert) {
		assert.strictEqual(euclid(20, 30, 15, 70, 40), 5, 'euclid(20, 30, 15, 70, 40) === 5');
		assert.strictEqual(euclid(1, 2, 1, 1, 1, 3, 1, 4, 1, 1, 1011, 1, 1), 1, 'euclid(1, 2, 1, 1, 1, 3, 1, 4, 1, 1, 1011, 1, 1) === 1');
	});

	QUnit.test('Работает правильно с одинаковыми числами', function (assert) {
		assert.strictEqual(euclid(11, 11, 11, 11, 11, 11), 11, 'euclid(11, 11, 11, 11, 11, 11) === 11');
	});

	QUnit.test('Работает правильно со значениями неправильного типа', function (assert) {
		assert.throws(() => euclid(a, b), Error, 'euclid(a, b) throws Error');
		assert.throws(() => euclid(NaN, 5, 'A'), Error, 'euclid(NaN, 5, \'A\') throws Error');
	});

	QUnit.test('Работает правильно со специальными константами', function (assert) {
		assert.throws(() => euclid(10, Infinity, 1000), Error, 'euclid(10, Infinity, 1000) throws Error');
		assert.throws(() => euclid(-Infinity, -1000, 0), Error, 'euclid(-Infinity, -1000, 0) throws Error');
	});
});
