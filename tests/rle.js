'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});
	QUnit.test('Работает правильно с единичными символами', function (assert) {
		assert.strictEqual(rle('A'), 'A');
		assert.strictEqual(rle('ABC'), 'ABC');
	});
	QUnit.test('Работает правильно с пустой строкой', function (assert) {
		assert.strictEqual(rle(''), '');
	});
	QUnit.test('Работает правильно со строками, созданными оператором new', function (assert) {
		assert.strictEqual(rle(new String('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD')), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
		assert.strictEqual(rle(new String('BCCDDDAXXXX')), 'BC2D3AX4');
	});
	QUnit.test('Работает правильно без параметра', function (assert) {
		assert.throws(function () {rle()}, /Argument is not a string or missing!/);
	});
	QUnit.test('Работает правильно с неверным параметром', function (assert) {
		assert.throws(function () {rle(111)}, /Argument is not a string or missing!/);
		assert.throws(function () {rle([1, 2, 3])}, /Argument is not a string or missing!/);
		assert.throws(function () {rle(NaN)}, /Argument is not a string or missing!/);
	});
});
