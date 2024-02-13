'use strict';

QUnit.module('Тестируем функцию rle', function () {
    QUnit.test('Базовая функциональность работает правильно', function (assert) {
	assert.strictEqual(rle('AAAB'), 'A3B');
	assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
	assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	assert.strictEqual(rle('AAAAAAAAAA'), 'A10');
    });
    QUnit.test('Работает правильно с единичными символами', function (assert) {
	assert.strictEqual(rle('A'), 'A');
	assert.strictEqual(rle('ABC'), 'ABC');
    });
    QUnit.test('Работает правильно с пустой строкой', function (assert) {
	assert.strictEqual(rle(''), '');
    });
});
