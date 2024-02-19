'use strict';

QUnit.module('Тестируем функцию zip', function () {
	QUnit.test('Функция работает с единственным объектом', function (assert) {
		assert.deepEqual(zip({}), {});
		assert.deepEqual(zip({answer: 42}), {answer: 42});
		assert.deepEqual(zip({name: 'Georg'}), {name: 'Georg'});

		const obj = {
			count: 0,
			cost: '120$'
		};
		assert.deepEqual(zip(obj), obj);
	});

	QUnit.test('Функция работает с объектами, среди которых есть объекты без свойств', function (assert) {
		assert.deepEqual(zip({}, {}), {});
		assert.deepEqual(zip({answer: 42}, {}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {}, {}, {name: 'Georg'}), {name: 'Georg'});

		const obj = {
			count: 0,
			cost: '120$'
		};
		assert.deepEqual(zip({}, {}, {}, obj, {}, {}), obj);
	});

	QUnit.test('Функция работает с объектами со свойствами с разными именами', function (assert) {
		const obj = {
			count: 0,
			cost: '120$'
		};
		assert.deepEqual(zip({count: 0}, {cost: '120$'}), obj);

		const obj2 = {
			a: 1,
			b: 2,
			c: null,
			d: 4,
			e: 5
		};
		assert.deepEqual(zip({a: 1}, {b: 2}, {c: null}, {d: 4}, {e: 5}), obj2);

		const obj3 = {
			name: 'age',
			value: 42
		};
		const obj4 = {
			prop: false,
			attr: null
		};
		const obj5 = {
			name: 'age',
			value: 42,
			prop: false,
			attr: null
		};
		assert.deepEqual(zip(obj3, obj4), obj5);

		const obj6 = {
			name: "Margo",
			weight: 49,
			profession: "designer",
			company: "vk",
			works: true
		};
		assert.deepEqual(
			zip({name: "Margo"}, {weight: 49}, {profession: "designer"}, {company: "vk", works: true}), obj6);
	});

	QUnit.test('Функция работает со свойствами, которые встречаются в нескольких объектах', function (assert) {
		assert.deepEqual(zip({answer: 42}, {answer: false}), {answer: 42}, 'Значение должно браться из первого встретившегося поля');
		assert.deepEqual(zip({age: 5}, {}, {age: 4}, {age: 72}), {age: 5});

		const obj1 = {
			name: 'age',
			value: 42
		};
		assert.deepEqual(zip({name: 'age'}, {value: 42}, {name: 'cost'}, {value: -6}), obj1);

		const obj2 = {
			name: "Margo",
			weight: 49
		};
		assert.deepEqual(zip({name: "Margo", weight: 49}, {name: "Anna", weight: 49}), obj2);

		const obj3 = {
			name: "Margo",
			weight: 49,
			height: 160,
			age: 20
		};
		assert.deepEqual(
			zip({name: "Margo"}, {weight: 49}, {height: 160},
				{name: "Anna", weight: 50, height: 165, age: 20}), obj3);
	});

	QUnit.test('Функция работает со свойствами, которые встречаются в нескольких объектах ' +
		'при наличии объектов без свойств', function (assert) {
		const obj = {
			name: "Margo",
			weight: 49,
			height: 160,
			age: 20
		};
		assert.deepEqual(
			zip({}, {name: "Margo"}, {weight: 49}, {height: 160}, {}, {name: "Alice"},
				{name: "Anna", weight: 50, height: 165, age: 20}, {}), obj);
	});

	QUnit.test('Функция умеет работать с невалидными данными', function (assert) {
		assert.throws(() => zip([1, 2, 3]), TypeError);
		assert.throws(() => zip(true, false), TypeError);
		assert.throws(() => zip('jjj'), TypeError);
		assert.throws(() => zip(1, 'jjj', [1, 2, 3]), TypeError);
		assert.throws(() => zip(null), TypeError);
		assert.throws(() => zip({1: 2}, {2: 3}, 'a'), TypeError);
	});
});
