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
		assert.strictEqual(solve('x + 1', ), 'ErrNotNum');
		assert.strictEqual(solve('2 + x - 1', 'tik'), 'ErrNotNum');
		assert.strictEqual(solve('2 + x - 1', ''), 'ErrNotNum');
		assert.strictEqual(solve('hi', 5), 'ErrWrongSymbolsInExpression');
		assert.strictEqual(solve('', 5), 'ErrEmptyExpression');
		assert.strictEqual(solve('alert("aa") || 1 + x', 5), 'ErrWrongSymbolsInExpression');
	});
});
