'use strict';

QUnit.module('Тестируем функцию tree', function () {
	QUnit.test('Ёлочек высотой ниже трёх не бывает', function (assert) {
		assert.strictEqual(tree(0), null);
		assert.strictEqual(tree(1), null);
		assert.strictEqual(tree(2), null);
		assert.strictEqual(tree('0'), null);
		assert.strictEqual(tree('1'), null);
		assert.strictEqual(tree('2'), null);
	});

	QUnit.test('Ёлочки с бесконечной высотой', function (assert) {
		assert.strictEqual(tree(1/0), null);
		assert.strictEqual(tree('1'/0), null);
		assert.strictEqual(tree(Infinity), null);
	});

	QUnit.test('Ёлочки с непонятной высотой', function (assert) {
		assert.strictEqual(tree('aboba'), null);
		assert.strictEqual(tree('aboba'/2), null);
		assert.strictEqual(tree(undefined), null);
		assert.strictEqual(tree(true), null);
		assert.strictEqual(tree(null), null);
	});

	QUnit.test('Ёлочка высотой 3', function (assert) {
		const expected =
			' * \n' +
			'***\n' +
			' | \n';
		assert.strictEqual(tree(3), expected);
		assert.strictEqual(tree('3'), expected);
	});

	QUnit.test('Ёлочка высотой 4', function (assert) {
		const expected =
			'  *  \n' +
			' *** \n' +
			'*****\n' +
			'  |  \n';
		assert.strictEqual(tree(4), expected);
		assert.strictEqual(tree('4'), expected);
	});

	QUnit.test('Ёлочка высотой 5', function (assert) {
		const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
		assert.strictEqual(tree(5), expected);
		assert.strictEqual(tree('5'), expected);
	});

	QUnit.test('Ёлочка высотой 8', function (assert) {
		const expected =
			'      *      \n' +
			'     ***     \n' +
			'    *****    \n' +
			'   *******   \n' +
			'  *********  \n' +
			' *********** \n' +
			'*************\n' +
			'      |      \n';
		assert.strictEqual(tree(8), expected);
		assert.strictEqual(tree('8'), expected);
	});

	QUnit.test('Ёлочка высотой 14', function (assert) {
		const expected =
			'            *            \n' +
			'           ***           \n' +
			'          *****          \n' +
			'         *******         \n' +
			'        *********        \n' +
			'       ***********       \n' +
			'      *************      \n' +
			'     ***************     \n' +
			'    *****************    \n' +
			'   *******************   \n' +
			'  *********************  \n' +
			' *********************** \n' +
			'*************************\n' +
			'            |            \n';
		assert.strictEqual(tree(14), expected);
		assert.strictEqual(tree('14'), expected);
	});

	QUnit.test('Ёлочка высотой 16', function (assert) {
		const expected =
			'              *              \n' +
			'             ***             \n' +
			'            *****            \n' +
			'           *******           \n' +
			'          *********          \n' +
			'         ***********         \n' +
			'        *************        \n' +
			'       ***************       \n' +
			'      *****************      \n' +
			'     *******************     \n' +
			'    *********************    \n' +
			'   ***********************   \n' +
			'  *************************  \n' +
			' *************************** \n' +
			'*****************************\n' +
			'              |              \n';
		assert.strictEqual(tree(16), expected);
		assert.strictEqual(tree('16'), expected);
	});

	QUnit.test('Елочка с нецелочисленной высотой', function (assert) {
		const expectedThree =
			' * \n' +
			'***\n' +
			' | \n';

		const expectedFour =
			'  *  \n' +
			' *** \n' +
			'*****\n' +
			'  |  \n';
		assert.strictEqual(tree(3.14169), expectedThree);
		assert.strictEqual(tree(3.54169), expectedFour);
	});
});
