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
			baz: [ 1, 2, 3, 'undefined' ],
			deep: [
				{foobar: '42'}
			]
		};

		assert.strictEqual(get(object, '.foo.0'), object.foo[ 0 ]);
		assert.strictEqual(get(object, '.foo.length'), object.foo.length);
		assert.strictEqual(get(object, '.baz.0'), object.baz[ 0 ]);
		assert.strictEqual(get(object, '.baz.length'), object.baz.length);
		assert.strictEqual(get(object, '.deep.0.foobar'), object.deep[ 0 ].foobar);
		assert.strictEqual(get(object, '.baz.3'), object.baz[ 3 ]);
		assert.throws(
			function(){ get(object, '.baz.4')},
			function(err){ return err.name === 'ReferenceError' && err.message === '4 property is undefined'},
		);
	});

	QUnit.test('get работает правильно c объектами без свойств', function (assert) {
		const object = {
			foo: {
				bar: 42
			}
		};
		assert.throws(
			function(){ get(object, '.foobar')},
			function(err){ return err.name === 'ReferenceError' && err.message === 'foobar property is undefined'},
		);
		assert.throws(
			function(){ get(object, '.foo.baz')},
			function(err){ return err.name === 'ReferenceError' && err.message === 'baz property is undefined'},
		);
		assert.throws(
			function(){ get(object, '.baz.0')},
			function(err){ return err.name === 'ReferenceError' && err.message === 'baz property is undefined'},
		);
		assert.throws(
			function(){ get(object, '.baz.length')},
			function(err){ return err.name === 'ReferenceError' && err.message === 'baz property is undefined'},
		);
		assert.throws(
			function(){ get(object, '.baz.length')},
			function(err){ return err.name === 'ReferenceError' && err.message === 'baz property is undefined'},
		);
		assert.throws(
			function(){ get(object, '.0.1.2')},
			function(err){ return err.name === 'ReferenceError' && err.message === '0 property is undefined'},
		);
	});

	QUnit.test('get работает правильно c пустыми объектами', function (assert) {
		const object = {};
		assert.throws(
			function(){ get(object, '.foobar')},
			function(err){ return err.name === 'ReferenceError' && err.message === 'foobar property is undefined'},
		);
		assert.throws(
			function(){ get(object, '.length')},
			function(err){ return err.name === 'ReferenceError' && err.message === 'length property is undefined'},
		);
		assert.throws(
			function(){ get(object, '.foobar.length') },
			function(err){ return err.name === 'ReferenceError' && err.message === 'foobar property is undefined'},
		);
	});
});
