'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		assert.strictEqual(chess(1), null);
		assert.strictEqual(chess('1'), null);
	});

	QUnit.test('Шахматная доска 2 на 2', function (assert) {
		const expected =
			'* \n' +
			' *\n';
		assert.strictEqual(chess(2), expected);
		assert.strictEqual(chess('2'), expected);
	});

	QUnit.test('Шахматной доски c отрицательной длиной не бывает', function (assert) {
		assert.strictEqual(chess(-1), null);
		assert.strictEqual(chess('-1'), null);
	});

	QUnit.test('Шахматная доска 3 на 3', function (assert) {
		const expected =
			'* *\n' +
			' * \n' +
			'* *\n';
		assert.strictEqual(chess(3), expected);
		assert.strictEqual(chess('3'), expected);
	});

	QUnit.test('Шахматной доски asd на asd не бывает', function (assert) {
		assert.strictEqual(chess('asd'), null);
	});

	QUnit.test('Шахматной доски object на object не бывает', function (assert) {
		assert.strictEqual(chess({name: "Alex"}), null);
		assert.strictEqual(chess([1, 2, 3]), null);
	});

	QUnit.test('Шахматной доски boolean на boolean не бывает', function (assert) {
		assert.strictEqual(chess(true), null);
		assert.strictEqual(chess(false), null);
	});

	QUnit.test('Шахматной доски c отсутствующем значением длины доски не бывает', function (assert) {
		assert.strictEqual(chess(null), null);
		assert.strictEqual(chess(undefined), null);
	});

	QUnit.test('Шахматной доски c не целочисленной длиной не бывает', function (assert) {
		assert.strictEqual(chess(1.2), null);
		assert.strictEqual(chess(8.6), null);
	});

	QUnit.test('Шахматная доска 8 на 8', function (assert) {
		const expected =
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n';
		assert.strictEqual(chess(8), expected);
		assert.strictEqual(chess('8'), expected);
	});

});
