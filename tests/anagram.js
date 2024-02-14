'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно с ASCII', function (assert) {
		const input = [
			'ginger', '-_-', 'meat',
			'team', 'meta', 'medical',
			'decimal', 'grim', 'reaper'
		];

		const output = [
			[ 'decimal', 'medical' ],
			[ 'meat', 'meta', 'team' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно с рунами', function (assert) {
		const input = [
			'情人', '人情', 
			'手枪', '枪手', 
			'水泥', '泥水', 
			'生产', '产生'
		];

		const output = [
			[ '产生', '生产' ],
			[ '人情', '情人' ],
			[ '手枪', '枪手' ],
			[ '水泥', '泥水' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно с различным case\'ом', function (assert) {
		const input = [
			'ginger', '-_-', 'MeAt',
			'TeAm', 'mEta', 'mediCal',
			'deciMal', 'grim', 'reaper'
		];

		const output = [
			[ 'MeAt', 'TeAm', 'mEta' ],
			[ 'deciMal', 'mediCal' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно с пустым input\'ом', function (assert) {
		const input = [];

		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно без анаграм', function (assert) {
		const input = ['привет', 'мир'];

		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно с заведомо некорректными входными данными.', function (assert) {
		let foo = ['мир', 'рим']; foo = undefined;
		const input = foo;
		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно с заведомо некорректными входными данными(2).', function (assert) {
		const input = [null, undefined];
		const output = [];
		assert.deepEqual(anagram(input), output);
	});

	
});
