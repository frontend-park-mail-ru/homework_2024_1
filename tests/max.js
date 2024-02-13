'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('Возвращает максимальное из трёх положительных чисел', function (assert) {
		assert.strictEqual(max([ 1, 2, 3 ]), 3, 'max([1, 2, 3]) === 3');
		assert.strictEqual(max([ 3, 2, 1 ]), 3, 'max([3, 2, 1]) === 3');
	});

	QUnit.test('Возвращает максимальное из трёх отрицательных чисел', function (assert) {
		assert.strictEqual(max([ -1, -2, -3 ]), -1, 'max([-1, -2, -3]) === -1');
		assert.strictEqual(max([ -3, -2, -1 ]), -1, 'max([-3, -2, -1]) === -1');
	});

	QUnit.test('Возвращает максимальное из трёх чисел разных знаков', function (assert) {
		assert.strictEqual(max([ -1, 0, 1 ]), 1, 'max([-1, 0, 1]) === 1');
		assert.strictEqual(max([ 1, 0, -1 ]), 1, 'max([1, 0, -1]) === 1');
	});

	QUnit.test('Работает правильно с одинаковыми числами', function (assert) {
		assert.strictEqual(max([ 0, 0, 0 ]), 0, 'max([0, 0, 0]) === 0');
		assert.strictEqual(max([ 42, 42, 42 ]), 42, 'max([42, 42, 42]) === 42');
	});

	QUnit.test('Работает правильно со специальными константами', function (assert) {
		assert.strictEqual(max([ Infinity, 100000, 0 ]), Infinity);
		assert.strictEqual(max([ 0, -1000, -Infinity ]), 0);
	});

	QUnit.test('Работает правильно с двумя числами', function (assert) {
		assert.strictEqual(euclid(12, 18), 6, 'euclid(12, 18) === 6');
	});

	QUnit.test('Работает правильно с произвольным количеством чисел', function (assert) {
		assert.strictEqual(euclid(20, 30, 15, 70, 40), 5, 'euclid(20, 30, 15, 70, 40) === 5');
	});

	QUnit.test('Работает правильно с одинаковыми числами', function (assert) {
		assert.strictEqual(euclid(11, 11, 11), 11, 'euclid(11, 11, 11) === 11');
	});

	QUnit.test('Работает правильно при введение значений неправильного типа', function (assert) {
		assert.throws(() => euclid(a, b), Error, 'euclid(a, b) throws Error');
	});
});
