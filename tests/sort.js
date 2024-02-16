'use strict';

QUnit.module('Тестируем функцию sort', function () {
	QUnit.test('Функция делает первую букву слова прописной', function (assert) {
		assert.strictEqual(sort('яяя'), 'Яяя', 'Работает с русским алфавитом');
		assert.strictEqual(sort('Бббббб'), 'Бббббб');
		assert.strictEqual(sort('zzzzzz'), 'Zzzzzz', 'Работает с английским алфавитом');
		// assert.strictEqual(sort('Rrrrrrrr'), 'rrrrrrrr'); // Я думаю тут ошибка тестов, ведь нам надо делать первую букву прописной, а остальные строчными
		assert.strictEqual(sort('rrrrrrrr'), 'Rrrrrrrr');
	});

	QUnit.test('Функция делает все буквы, кроме первой, строчными', function (assert) {
		assert.strictEqual(sort('ЯЯЯЯ'), 'Яяяя', 'Работает с русским алфавитом');
		assert.strictEqual(sort('zZzZZzzZZZ'), 'Zzzzzzzzzz', 'Работает с английским алфавитом');
	});

	QUnit.test('Функция работает с предложениями', function (assert) {
		assert.strictEqual(sort('ЯЯЯ яяя яяя яяя'), 'Яяя Яяя Яяя Яяя');
		assert.strictEqual(sort('яяя яяяяя ЯЯЯЯ ЯяяяЯЯЯяя'), 'Яяя Яяяя Яяяяя Яяяяяяяяя');
	});

	QUnit.test('Функция сортирует буквы в отдельных словах по алфавиту', function (assert) {
		assert.strictEqual(sort('fedcba'), 'Abcdef', 'Работает с английским алфавитом');
		assert.strictEqual(sort('zyxwvu'), 'Uvwxyz');
		assert.strictEqual(sort('жёедгвба'), 'Абвгдеёж', 'Работает с русским алфавитом');
		assert.strictEqual(sort('вбава'), 'Аабвв');
	});

	QUnit.test('Функция сортирует слова в предложении по алфавиту', function (assert) {
		assert.strictEqual(sort('f e d c b a'), 'A B C D E F', 'Работает с английским алфавитом');
		assert.strictEqual(sort('z y x w v u'), 'U V W X Y Z');
		assert.strictEqual(sort('ж ё е д г в б а'), 'А Б В Г Д Е Ё Ж', 'Работает с русским алфавитом');
		assert.strictEqual(sort('в б а в а'), 'А А Б В В');
	});

	QUnit.test('Функция работает правильно', function (assert) {
		assert.strictEqual(sort('мама мыла раму'), 'Аамм Алмы Амру');
		// assert.strictEqual(sort('космический корабль летит на марс'), 'Абклорь Амрс Aн Еиийккмоссч Еилтт'); // тут в заданном предложении все русские буквы, а в результате присутствует одна латинская A
		assert.strictEqual(sort('космический корабль летит на марс'), 'Абклорь Амрс Ан Еиийккмоссч Еилтт');
		assert.strictEqual(sort('i love frontend'), 'Defnnort Elov I');
		assert.strictEqual(sort('hello world'), 'Dlorw Ehllo');
		assert.strictEqual(sort('Привет привет привет мир'), 'Веипрт Веипрт Веипрт Имр');
		assert.strictEqual(sort(new String('aaa')), 'Aaa');
	});

	QUnit.test('Функция работает правильно с разными регистрами', function (assert) {
		assert.strictEqual(sort('РоНаЛДу МеССи'), 'Адлнору Еимсс');
		assert.strictEqual(sort('rOnAldO mEssI'), 'Adlnoor Eimss');
	})

	QUnit.test('Функция работает правильно с лишними пробелами', function (assert) {
		assert.strictEqual(sort('          РоНаЛДу МеССи      '), 'Адлнору Еимсс');
		assert.strictEqual(sort('   rOnAldO    mEssI  '), 'Adlnoor Eimss');
	})

	QUnit.test('Функция работает правильно с пустой строкой', function (assert) {
		assert.strictEqual(sort('    '), '');
		assert.strictEqual(sort(''), '');
	})

	QUnit.test('Функция работает правильно с непрвильным вводом', function (assert) {
		assert.throws(sort(123), TypeError);
		assert.throws(sort([1, 2, 3, 4, 5]), TypeError);
		assert.throws(sort({ 'name': 'Lionel', 'surname': 'Messi' }), TypeError);
	});
});
