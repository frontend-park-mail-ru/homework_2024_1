'use strict';

QUnit.module('Тестируем функцию letters', () => {
	QUnit.test('Оставляет без изменений строки, где все символы уникальны', (assert) => {
		assert.strictEqual(letters('1234'), '1234');
		assert.strictEqual(letters('abcd'), 'abcd');
		assert.strictEqual(letters('олдж фыва'), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t '), ',.;=\n\t ');

		assert.strictEqual(letters('1234', true), '1234');
		assert.strictEqual(letters('abcd', true), 'abcd');
		assert.strictEqual(letters('олдж фыва', true), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', true), ',.;=\n\t ');

		assert.strictEqual(letters('1234', false), '1234');
		assert.strictEqual(letters('abcd', false), 'abcd');
		assert.strictEqual(letters('олдж фыва', false), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', false), ',.;=\n\t ');
	});

	QUnit.test('Удаляет идущие подряд буквы', (assert) => {
		assert.strictEqual(letters('111'), '');
		assert.strictEqual(letters('www'), '');
		assert.strictEqual(letters('...'), '');
		assert.strictEqual(letters('   '), '');
	});

	QUnit.test('Оставляет первую букву, остальные удаляет', (assert) => {
		assert.strictEqual(letters('121', true), '12');
		assert.strictEqual(letters('wWw', true), 'wW');
		assert.strictEqual(letters('.-.', true), '.-');
		assert.strictEqual(letters(' 0 ', true), ' 0');
	});

	QUnit.test('Оставляет последнюю букву, остальные удаляет', (assert) => {
		assert.strictEqual(letters('121', false), '21');
		assert.strictEqual(letters('wWw', false), 'Ww');
		assert.strictEqual(letters('.-.', false), '-.');
		assert.strictEqual(letters(' 0 ', false), '0 ');
	});

	QUnit.test('Удаляет повторяющиеся буквы в разных словах', (assert) => {
		assert.strictEqual(letters('привет, мир'), 'пвет, м');
		assert.strictEqual(letters('hello, world'), 'he, wrd');
		assert.strictEqual(letters('мама мыла раму'), 'ылру');
		assert.strictEqual(letters('"Кукареку!", сказал Петух'), 'Кр!,сзлПтх');

		assert.strictEqual(letters('мама мыла раму', true), 'ма ылру');
		assert.strictEqual(letters('от топота копыт', true), 'от пакы');
		assert.strictEqual(letters('hello world', true), 'helo wrd');

		assert.strictEqual(letters('мама мыла раму', false), 'ыл раму');
		assert.strictEqual(letters('от топота копыт', false), 'а копыт');
		assert.strictEqual(letters('hello world', false), 'he world');
	});

	QUnit.test('Типичный плесйхолдер ru+en', (assert) => {
		assert.strictEqual(letters('Вот вам яркий пример современных тенденций — выбранный нами инновационный путь предоставляет широкие возможности для системы массового участия. Повседневная практика показывает, что граница обучения кадров не оставляет шанса для новых предложений. Также как базовый вектор развития, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для укрепления моральных ценностей.'), 'ВПТщ');

		assert.strictEqual(letters('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis, est et auctor fringilla, augue purus condimentum mi, vitae laoreet nulla nulla eleifend enim. Sed bibendum tempus ex eget gravida. Phasellus luctus odio nec ultrices placerat. Donec ac nisl sit amet est semper mollis quis at neque. Cras vel erat nisi. Nunc ipsum justo, tempor in eros vitae, commodo suscipit diam. Fusce luctus et odio at luctus. Suspendisse eu condimentum orci. Sed malesuada suscipit arcu in elementum. Fusce efficitur elit ipsum, ullamcorper sodales ante bibendum nec.', true), 'Lorem ipsudlta,cng.DbfvSxPhqCNjF');

	});

	QUnit.test('Разные байт-коды в utf-8', (assert) => {
		assert.strictEqual(letters('񟿾񟿿𿿾𿿿𯿿𯿿𿿾𿿿񏿾𯿿𿿾𿿿񏿾'), '񟿾񟿿');

		assert.strictEqual(letters('񟿾񟿿𿿾𿿿𯿿', true), '񟿾񟿿𿿾𿿿𯿿');

		assert.strictEqual(letters('�𯿿𿿾𿿿񏿾񏿿񟿾񟿿', false), '�𯿿𿿾𿿿񏿾񏿿񟿾񟿿');
	});

	QUnit.test('Буквы из языков, где текст читается справа налево', (assert) => {
		assert.strictEqual(letters('߿𐀀߿𐀀߿𐀀߿𐀀߿𐀀߿𐀀߿𐀀߿𐀀', false), '߿𐀀');
	});

	QUnit.test('Должна выбросить ошибку при неверном типе аргумента', (assert) => {
		assert.strictEqual(letters(new String('123')), '123'); // String должен работать как и примитивная строка

		assert.throws(() => {
			letters(undefined);
		}, /Функция работает только со строками/, 'Функция работает только со строками');

		assert.throws(() => {
			letters(NaN, true);
		}, /Функция работает только со строками/, 'Функция работает только со строками');

		assert.throws(() => {
			letters(1, false);
		}, /Функция работает только со строками/, 'Функция работает только со строками');
	});
});
