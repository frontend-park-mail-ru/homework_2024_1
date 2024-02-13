'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('Работает правильно с двумя числами', function (assert) {
		assert.strictEqual(euclid(12, 18), 6, 'euclid(12, 18) === 6');
	});

	QUnit.test('Работает правильно с отрицательными числами', function (assert) {
		assert.throws(() => euclid(-12, -18), Error, 'euclid(-12, -18) throws Error');
	});

	QUnit.test('Работает правильно с числами разных знаков', function (assert) {
		assert.throws(() => euclid(-12, 18, -6), Error, 'euclid(-12, 18, -6) throws Error');
	});

	QUnit.test('Работает правильно с произвольным количеством чисел', function (assert) {
		assert.strictEqual(euclid(20, 30, 15, 70, 40), 5, 'euclid(20, 30, 15, 70, 40) === 5');
	});

	QUnit.test('Работает правильно с одинаковыми числами', function (assert) {
		assert.strictEqual(euclid(11, 11, 11), 11, 'euclid(11, 11, 11) === 11');
	});

	QUnit.test('Работает правильно при введение значений неправильного типа', function (assert) {
		assert.throws(() => euclid(a, b), Error, 'euclid(a, b) throws Error');
		assert.throws(() => euclid(NaN, 5, 'A'), Error, 'euclid(NaN, 5, \'A\') throws Error');
	});

	QUnit.test('Работает правильно со специальными константами', function (assert) {
		assert.throws(() => euclid(10, Infinity, 1000), Error, 'euclid(10, Infinity, 1000) throws Error');
		assert.throws(() => euclid(-Infinity, -1000, 0), Error, 'euclid(-Infinity, -1000, 0) throws Error');
	});
});
