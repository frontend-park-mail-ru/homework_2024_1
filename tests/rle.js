'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('Пустая строка', function (assert) {
		assert.throws(function () {rle('')});
	});
	QUnit.test('Нет аргумента', function (assert) {
		assert.throws(function () {rle()});
	});
	QUnit.test('Неправильный тип аргумента', function (assert) {
		assert.throws(function () {rle(123)});
		assert.throws(function () {rle(true)});
		assert.throws(function () {rle(undefined)});
	});
	QUnit.test('Один символ', function (assert) {
		assert.strictEqual(rle('A'), 'A');
	});
	QUnit.test('Несколько одинарных символов', function (assert) {
		assert.strictEqual(rle('ABC'), 'ABC');
	});
	QUnit.test('Заявленный функционал', function (assert) {
		assert.strictEqual(rle('AAAABBCCCCCCCCCCEFFRTTTT'), 'A4B2C10EF2RT4');
	});
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});
});
