'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно с точки зрения вычислений', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
	});
	QUnit.test('solve работает правильно с точки зрения обработки некорректно введенных данных', function (assert) {
		assert.throws(() => solve('x + 1' ), new Error('ErrNotNum'));
		assert.throws(() => solve('2 + x - 1', 'tik'), new Error('ErrNotNum'));
		assert.throws(() => solve('2 + x - 1', ''), new Error('ErrNotNum'));
		assert.throws(() => solve('2 + x - 1', NaN), new Error('ErrNotNum'));
		assert.throws(() => solve('hi', 5), new Error('ErrWrongSymbolsInExpression'));
		assert.throws(() => solve('', 5), new Error('ErrEmptyExpression'));
		assert.throws(() => solve(123, 3), new Error('ErrNotString'));
		assert.throws(() => solve('alert("aa") || 1 + x', 5), new Error('ErrWrongSymbolsInExpression'));
	});
});
