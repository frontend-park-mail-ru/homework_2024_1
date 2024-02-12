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
		const input1 = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const input2 = [1];

		const expected1 =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';
		
		const expected2 =
			'1';

		assert.strictEqual(format(input1, 1), expected1);
		assert.strictEqual(format(input2, 1), expected2);
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
		
		const expected4 =
			'0 1 2 10 100 -100 1000 10000 -10000';

		const expected5 =
			'    0      1 2 10 100 -100 1000\n' +
			'10000 -10000';
		
		const expected6 =
			'1 2'

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
		assert.strictEqual(format(input, 9), expected4);
		assert.strictEqual(format(input, 7), expected5);
		assert.strictEqual(format([1, 2], 2), expected6);
		assert.strictEqual(format([1, 2], 6), expected6);
	});

	QUnit.test('format обрабатывает некорректные входные параметры', function (assert) {
		const input1 = "not array";
		const input2 = 3.7;
		const input3 = -1;
		
		const expected = '';

		assert.strictEqual(format(input1, 2), expected);
		assert.strictEqual(format(input2, 2), expected);
		assert.strictEqual(format([1, 2, 3], input3), expected);
	});
});
