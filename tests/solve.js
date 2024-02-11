'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
	});

	QUnit.test('solve возвращает NaN при вводе некорректного выражения', function (assert) {
		assert.true(isNaN(solve('x / 0', 1)));
		assert.true(isNaN(solve('a * 1', 2)));
		assert.true(isNaN(solve('x + 1)', 1)));
		assert.true(isNaN(solve('(x + 1', 1)));
		assert.true(isNaN(solve('x a 1', 1)));
		assert.true(isNaN(solve('x123 + 1', 1)));
		assert.true(isNaN(solve('123 1', 1)));
		assert.true(isNaN(solve('', 1)));
	});

	QUnit.test('solve возвращает NaN при неверном типе хотя бы одного аргумента', function (assert) {
		assert.true(isNaN(solve([], 1)));
		assert.true(isNaN(solve('x', '')));
	})
});
