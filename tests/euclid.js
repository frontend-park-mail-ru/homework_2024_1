'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
		assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
		assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
		assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД двух натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1), 1, 'euclid(1, 1) === 1');
		assert.strictEqual(euclid(2, 2), 2, 'euclid(2, 2) === 2');
		assert.strictEqual(euclid(13, 26), 13, 'euclid(13, 26) === 13');
		assert.strictEqual(euclid(7, 1), 1, 'euclid(7, 1) === 1');
		assert.strictEqual(euclid(7, 13), 1, 'euclid(7, 13) === 1');
		assert.strictEqual(euclid(2, 16), 2, 'euclid(2, 16) === 2');
		assert.strictEqual(euclid(7, 21), 7, 'euclid(7, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735), 3003, 'euclid(6006, 3738735) === 3003');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

		const n = 17;
		assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [ 80325, 55275, 8746650, 3000000, 45672375, 225, 54675 ];
		assert.strictEqual(euclid(...[ ...temp, ...temp, ...temp, ...temp, ...temp ]), euclid(...temp));
	});

	QUnit.test('Функция должна выдавать ошибку при вводе не натуральных чисел', function (assert) {
		assert.throws(() => euclid(-10, -5), /Все числа должны быть натуральными./, 'Ошибка при вводе не натуральных чисел');
		assert.throws(() => euclid(-15, 20), /Все числа должны быть натуральными./, 'Ошибка при вводе не натуральных чисел');
		assert.throws(() => euclid(0, 45, 12), /Все числа должны быть натуральными./, 'Ошибка при вводе не натуральных чисел');
		assert.throws(() => euclid(1, 1, 1.24), /Все числа должны быть натуральными./, 'Ошибка при вводе не натуральных чисел');
	});

	QUnit.test('Функция должна выдавать ошибку при вводе не числовых значений', function (assert) {
		assert.throws(() => euclid('l', 5), /Все числа должны быть натуральными./, 'Ошибка при вводе строк');
		assert.throws(() => euclid(0, 'l', 0), /Все числа должны быть натуральными./, 'Ошибка при вводе строк');
		assert.throws(() => euclid(10, 0, 'l'), /Все числа должны быть натуральными./, 'Ошибка при вводе строк');
		assert.throws(() => euclid('ll'), /Все числа должны быть натуральными./, 'Ошибка при вводе строк');
	});

	QUnit.test('Функция должна выдавать ошибку при вводе undefined/null значений', function (assert) {
		assert.throws(() => euclid(null, 1), /Все числа должны быть натуральными./, 'Ошибка при вводе undefined/null');
		assert.throws(() => euclid(1, undefined), /Все числа должны быть натуральными./, 'Ошибка при вводе undefined/null');
		assert.throws(() => euclid(), /Все числа должны быть натуральными./, 'Ошибка при вводе undefined/null');
		assert.throws(() => euclid(null, undefined), /Все числа должны быть натуральными./, 'Ошибка при вводе undefined/null');
	});
});
