'use strict';

QUnit.module('Тестируем функцию set', function () {
	QUnit.test('set работает правильно c объектами с существующими свойствами', function (assert) {
		const object = {
			deep: {
				hested: {
					field: 'baz'
				}
			}
		};

		const object2 = {
			deep: {
				hested: {
					field: 42
				}
			}
		};

		const object3 = {
			deep: {
				hested: {
					foo: 'bar'
				}
			}
		};

		const object4 = {
			deep: null
		};

		assert.deepEqual(set({foo: 'bar'}, '.foo', 'baz'), {foo: 'baz'});
		assert.deepEqual(set(object, '.deep.hested.field', 42), object2);

		assert.deepEqual(set(object, '.deep.hested', {foo: 'bar'}), object3);
		assert.deepEqual(set(object, '.deep', null), object4);
	});

	QUnit.test('set изменяет переданный объект', function (assert) {
		const object = {
			foo: 'bar'
		};

		const object1 = {
			foo: 'baz'
		};

		const object2 = set(object, '.foo', 'baz');
		assert.deepEqual(object, object1);
		assert.deepEqual(object2, object1);
	});

	QUnit.test('set работает правильно c массивами', function (assert) {
		const object1 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const object2 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const new1 = {
			foo: [ 42, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const new2 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: 'baz'}
			]
		};

		assert.deepEqual(set(object1, '.foo.0', 42), new1);
		assert.deepEqual(set(object2, '.bar.0.foobar', 'baz'), new2);
	});

	QUnit.test('set работает правильно c объектами без свойств', function (assert) {
		const object = {
			deep: {
				nested: {
					field: null
				}
			}
		};

		assert.deepEqual(set({}, '.deep.nested.field', null), object);
	});

	// дополнительные тесты
    QUnit.test('set работает правильно если path - объектная строка', function (assert) {
		const object_string = new String('.foo');
		assert.deepEqual(set({ foo: 'bar' }, object_string, 'baz'), {foo: 'baz'});
		assert.deepEqual(set({ foo: 'bar' }, new String('.foo'), 'baz'), {foo: 'baz'});
	});

	QUnit.test('set работает правильно если переданный объект равет null', function (assert) {
		const object = null;
		assert.deepEqual(set(object, '.foo', 'baz'), {foo: 'baz'});
		assert.deepEqual(set(null, '.foo', 'baz'), {foo: 'baz'});
	});

	QUnit.test('set работает правильно если переданный объект равен {}', function (assert) {

		const object = {};
		assert.deepEqual(set(object, '.foo', 'baz'), {foo: 'baz'});
		assert.deepEqual(set({}, '.foo', 'baz'), {foo: 'baz'});

	});

	QUnit.test('set работает правильно при установке значения в несуществующем объекте с использованием массива вложенных свойств', function (assert) {
		assert.deepEqual(set({}, ['nesteded', 'prop'], 'value'), { nesteded: { prop: 'value' } });
		assert.deepEqual(set(null, ['nesteded', 'prop'], 'value'), { nesteded: { prop: 'value' } });
	});

	QUnit.test('set обрабатывает исключения, когда в path приходит что-то не то', function (assert) {
		assert.throws(() => {set({ foo: 'bar' }, null, 'baz')}, TypeError, 'Invalid path type');
		assert.throws(() => {set({ foo: 'bar' }, 2, 'baz')}, TypeError, 'Invalid path type');
	});

	QUnit.test('set работает правильно если переданный путь равен {}', function (assert) {

		assert.throws(() => {set({ foo: 'bar' }, {}, 'baz')}, TypeError, 'Invalid path type');
		assert.throws(() => {set({ foo: 'bar' }, {foo: 'bar'}, 'baz')}, TypeError, 'Invalid path type');
	});

	QUnit.test('set работает правильно если переданный путь представляет из себя функцию', function (assert) {

		assert.throws(() => {set({ foo: 'bar' }, () => {return}, 'baz')}, TypeError, 'Invalid path type');
	});

    // тесты для случая, когда путь приходит без точки в начале
	QUnit.test('set работает правильно c объектами с существующими свойствами при условии, что путь приходит без точки в начале', function (assert) {
		const object = {
			deep: {
				hested: {
					field: 'baz'
				}
			}
		};

		const object2 = {
			deep: {
				hested: {
					field: 42
				}
			}
		};

		const object3 = {
			deep: {
				hested: {
					foo: 'bar'
				}
			}
		};

		const object4 = {
			deep: null
		};

		assert.deepEqual(set({foo: 'bar'}, 'foo', 'baz'), {foo: 'baz'});
		assert.deepEqual(set(object, 'deep.hested.field', 42), object2);

		assert.deepEqual(set(object, 'deep.hested', {foo: 'bar'}), object3);
		assert.deepEqual(set(object, 'deep', null), object4);
	});

	QUnit.test('set изменяет переданный объект при условии, что путь приходит без точки в начале', function (assert) {
		const object = {
			foo: 'bar'
		};

		const object1 = {
			foo: 'baz'
		};

		const object2 = set(object, 'foo', 'baz');
		assert.deepEqual(object, object1);
		assert.deepEqual(object2, object1);
	});

	QUnit.test('set работает правильно c массивами при условии, что путь приходит без точки в начале', function (assert) {
		const object1 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const object2 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const new1 = {
			foo: [ 42, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const new2 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: 'baz'}
			]
		};

		assert.deepEqual(set(object1, 'foo.0', 42), new1);
		assert.deepEqual(set(object2, 'bar.0.foobar', 'baz'), new2);
	});

	QUnit.test('set работает правильно c объектами без свойств при условии, что путь приходит без точки в начале', function (assert) {
		const object = {
			deep: {
				nested: {
					field: null
				}
			}
		};

		assert.deepEqual(set({}, 'deep.nested.field', null), object);
	});

	QUnit.test('set работает правильно если path - объектная строка и в начале пути нет точки', function (assert) {
		const object_string = new String('foo');
		assert.deepEqual(set({ foo: 'bar' }, object_string, 'baz'), {foo: 'baz'});
		assert.deepEqual(set({ foo: 'bar' }, new String('foo'), 'baz'), {foo: 'baz'});
	});
});
