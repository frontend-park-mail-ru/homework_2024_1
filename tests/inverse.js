'use strict';

QUnit.module('Тестируем функцию inverse', function () {
	QUnit.test('Функция работает с пустым массивом', function (assert) {
		assert.deepEqual(inverse([]), []);
	});

	QUnit.test('Функция работает с массивом длины один', function (assert) {
		assert.deepEqual(inverse([ 1 ]), [ 1 ]);
		assert.deepEqual(inverse([ 'a' ]), [ 'a' ]);
		assert.deepEqual(inverse([ null ]), [ null ]);
		assert.deepEqual(inverse([ false ]), [ false ]);
	});

	QUnit.test('Функция работает, если в неё передан только массив', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ]), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 'a', 'b', 'c', 'd', 'e' ]), [ 'e', 'd', 'c', 'b', 'a' ]);
		assert.deepEqual(inverse([ null, false, 0, Infinity, '' ]), [ '', Infinity, 0, false, null ]);
	});

	QUnit.test('Функция не переставляет первые элементы массива', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 0), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 1), [ 1, 5, 4, 3, 2 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 2), [ 1, 2, 5, 4, 3 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 15), [ 1, 2, 3, 4, 5 ]);
	});

	QUnit.test('Функция не переставляет последние элементы массива', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 0), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -1), [ 4, 3, 2, 1, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -2), [ 3, 2, 1, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -15), [ 1, 2, 3, 4, 5 ]);
	});

	QUnit.test('В функцию передан не массив', function (assert) {
		assert.deepEqual(inverse(123, 1), null);
		assert.deepEqual(inverse("dfff", 1), null);
		assert.deepEqual(inverse(true, 1), null);
		assert.deepEqual(inverse(undefined, 1), null);
		assert.deepEqual(inverse(Infinity, 1), null);
		assert.deepEqual(inverse({}, 1), null);
		assert.deepEqual(inverse(NaN, 1), null);
	});

	QUnit.test('Функция вызвана без аргументов', function (assert) {
		assert.deepEqual(inverse(), null);
	});

	QUnit.test('Вторым аргументом в функцию передано не число', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], "a"), null);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], true), null);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], []), null);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], {}), null);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], NaN), null);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], undefined), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], Infinity), [ 1, 2, 3, 4, 5 ]);
	});
});

