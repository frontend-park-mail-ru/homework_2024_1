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

	QUnit.test('format работает правильно одним числом', function (assert) {
		const input = [1];
		
		const expected =
			'1';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c кол-вом колонок, превышающим или равным кол-ву чисел', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];
		
		const expected =
			'0 1 2 10 100 -100 1000 10000 -10000';

		assert.strictEqual(format(input, 9), expected);
		assert.strictEqual(format(input, 23), expected);
	});

	QUnit.test('format обрабатывает некорректные входные параметры', function (assert) {
		const validInput = [1, 2]
		const input1 = "not array";
		const input2 = 3.7;
		const input3 = -1;
		const input4 = () => 1 + 3;
		
		const expected = '';

		assert.throws(() => {
			format(input1, 2);
		}, TypeError);
		assert.throws(() => {
			format(input2, 1);
		}, TypeError);
		assert.throws(() => {
			format([1, 2, 3], input3);
		}, TypeError);
		assert.throws(() => {
			format(input4, 2);
		}, TypeError);
		assert.throws(() => {
			format(validInput, input4);
		}, TypeError);
		assert.throws(() => {
			format(null, 2);
		}, TypeError);
		assert.throws(() => {
			format(undefined, 2);
		}, TypeError);
		assert.throws(() => {
			format(Infinity, 2);
		}, TypeError);
	});
});
