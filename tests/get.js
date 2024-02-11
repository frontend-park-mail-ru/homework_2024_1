'use strict';

QUnit.module('Тестируем функцию get', function () {
	QUnit.test('get работает правильно c объектами с существующими свойствами', function (assert) {
		const object = {
			foo: 'bar',
			deep: {
				hested: {
					field: 'baz'
				}
			}
		};

		assert.strictEqual(get(object, '.foo'), object.foo);
		assert.strictEqual(get(object, '.deep.hested.field'), object.deep.hested.field);

		assert.deepEqual(get(object, '.deep.hested'), object.deep.hested);
		assert.deepEqual(get(object, '.deep'), object.deep);
		assert.deepEqual(get(object, '.'), object);
	});

	QUnit.test('get работает правильно c массивами', function (assert) {
		const object = {
			foo: 'bar',
			baz: [ 1, 2, 3 ],
			deep: [
				{foobar: '42'}
			]
		};

		assert.strictEqual(get(object, '.foo.0'), object.foo[ 0 ]);
		assert.strictEqual(get(object, '.foo.length'), object.foo.length);
		assert.strictEqual(get(object, '.baz.0'), object.baz[ 0 ]);
		assert.strictEqual(get(object, '.baz.length'), object.baz.length);
		assert.strictEqual(get(object, '.deep.0.foobar'), object.deep[ 0 ].foobar);
	});

	QUnit.test('get работает правильно c объектами без свойств', function (assert) {
		const object = {
			foo: {
				bar: 42
			}
		};

		assert.strictEqual(get(object, '.foobar'), undefined);
		assert.strictEqual(get(object, '.foo.baz'), undefined);
		assert.strictEqual(get(object, '.baz.0'), undefined);
		assert.strictEqual(get(object, '.baz.length'), undefined);
		assert.strictEqual(get(object, '.0.1.2'), undefined);
	});
	QUnit.test('get правильно обрабатывает undefined, переданный как первый аргумент', function (assert) {
		const object = undefined;

		assert.strictEqual(get(object, '.'), object);
		assert.strictEqual(get(object, '.smth.deep'), undefined);
		assert.strictEqual(get(object, '.fffff'), undefined);
		assert.strictEqual(get(object, '.0.1.2'), undefined);
		assert.strictEqual(get(object, undefined), undefined);
	});
	QUnit.test('get правильно обрабатывает некорректный тип второго аргумента', function (assert) {
		assert.strictEqual(get({ a: 123 }, undefined), undefined);
		assert.strictEqual(get({ a: 123 }, null), undefined);
		assert.strictEqual(get({ a: 123 }, { b: 12 }), undefined);
		assert.strictEqual(get({ a: 123 }, false), undefined);
		assert.strictEqual(get({ a: 123 }, [1, 2, 3]), undefined);
	});
	QUnit.test('get правильно обрабатывает примитивы, переданный как первый аргумент', function (assert) {

		assert.strictEqual(get(12, '.'), 12);
		assert.strictEqual(get(12, '.gggg'), undefined);
		assert.strictEqual(get(true, undefined), undefined);
		assert.strictEqual(get(true, '.'), true);
		assert.strictEqual(get(true, '.fff.ttt'), undefined);
		assert.strictEqual(get('aaaaa', '.'), 'aaaaa');
		assert.strictEqual(get('aaaaa', '.length'), 5);
	});
});
