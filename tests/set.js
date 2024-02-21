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
				hested: {
					field: null
				}
			}
		};

		assert.deepEqual(set({}, '.deep.hested.field', null), object);
		assert.deepEqual(set({}, '.deep.hested.field', null), object);
	});

	QUnit.test('set работает правильно c объектами с неполным/неверным путем', function (assert) {
		const object = {
			deep: {
				hested: {
					field: null
				}
			}
		};

		const object1 = {
			deep: {
				fake: {
					field: null
				},
				hested: {
					field: null
				}
			}
		};

		const object2 = {
			deep: {}
		};

		const object3 = {
			deep:{
				fake: {
					field:null
				}
			}
		}

		assert.deepEqual(set(object2, '.deep.hested.field', null), object);
		assert.deepEqual(set(object3, '.deep.hested.field', null), object1);
	});

	QUnit.test('set правильно изменяет одно и то же свойство несколько раз', function (assert) {
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
					field: 'bar'
				}
			}
		};

		assert.deepEqual(set(object, '.deep.hested.field', 42), object2);
		assert.deepEqual(set(object, '.deep.hested.field', 'bar'), object3);
	});

	QUnit.test('Выдается ошибка, если передается некорректный объект', function (assert) {
		assert.throws(() => {set('object', '.foo', "incorrect")
		}, new TypeError ('objName must be an object type'), 'Passed string');
		assert.throws(() => {set(null, '.foo', "incorrect")
		}, new TypeError ('objName must be an object type'), 'Passed null');
	});
	QUnit.test('Выдается ошибка, если путь передан неверно', function (assert) {
		assert.throws(() => {set({}, true, "incorrect")
		}, new TypeError ('path is incorrect'), 'Passed not string');
		assert.throws(() => {set({}, '.', "incorrect")
		}, new TypeError ('path is incorrect'), 'Passed without actual path');
		assert.throws(() => {set({}, 'foo', "incorrect")
		}, new TypeError ('path is incorrect'), 'Passed without .');
	});
});
