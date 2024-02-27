'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('format работает правильно c несколькими колонками мои тесты', function (assert) {
		const input = [ 203, 1, 10, -10, -100, -12300, 640, 1, -3 ];

		const expected2 =
			' 203      1\n' +
			'  10    -10\n' +
			'-100 -12300\n' +
			' 640      1\n' +
			'  -3';

		const expected3 =
			'203    1     10\n' +
			'-10 -100 -12300\n' +
			'640    1     -3';
		const expected4 =
			' 203      1  10 -10\n' +
			'-100 -12300 640   1\n' +
			'  -3';
		const expected10 =
			'203 1 10 -10 -100 -12300 640 1 -3';
		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
		assert.strictEqual(format(input, 4), expected4);
		assert.strictEqual(format(input, 10), expected10);

	});

	QUnit.test('format работает правильно c ошибками1', function (assert) {
		const input = [ 203, 1, "ab", -10, -100, -12300, 640, 1, -3 ];
		assert.strictEqual(format(input, 2), null);
	});
	QUnit.test('format работает правильно c ошибками2', function (assert) {
		const input = [ 203, 1, "10", -10, -100, -12300, 640, 1, -3 ];
		assert.strictEqual(format(input, 4), null);
	});
	QUnit.test('format работает правильно c отрицательным columns', function (assert) {
		const input = [ 203, 1, 2, -10, -100, -12300, 640, 1, -3 ];
		assert.strictEqual(format(input, -2), null);
	});
	QUnit.test('format работает правильно c пустым numbers', function (assert) {
		const input = [];
		assert.strictEqual(format(input, 2), "");
	});
	QUnit.test('format работает правильно c дробным  columns', function (assert) {
		const input = [2, 5, 8];
		assert.strictEqual(format(input, 2.4), null);
	});
	QUnit.test('format работает правильно c бесконечным  columns', function (assert) {
		const input = [2, 5, 8, 353];
		assert.strictEqual(format(input, NaN), null);
	});
	QUnit.test('format работает правильно c не тем типом  columns', function (assert) {
		const input = [2, 5, 8, 228];
		assert.strictEqual(format(input, null), null);
		assert.strictEqual(format(input, undefined), null);
	});
});
