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

	QUnit.test('Функция работает правильно, если нет анаграм', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'кошка'
		];

		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно, если на входе пустой массив', function (assert) {
		const input = [];

		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция выбрасывает ошибку, если на входе не массив', function (assert) {
        assert.throws(() => { anagram(1) }, new TypeError('Input must be an array'));
        assert.throws(() => { anagram('string') }, new TypeError('Input must be an array'));
        assert.throws(() => { anagram({'кот':  'ток'}) }, new TypeError('Input must be an array'));
    });

	QUnit.test('Функция выбрасывает ошибку, если элементы входного массива не строки', function (assert) {
        const input = [
            'кот', 'барокко',
            'стоп', 123, ['кот', 'барокко'],
			{'нора': 'рано'}
        ];

        assert.throws(() => { anagram(input) }, new TypeError('All elements in the input array must be strings'));
    });
});
