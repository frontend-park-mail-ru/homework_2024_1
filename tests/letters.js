'use strict';

QUnit.module('Тестируем функцию letters', function () {
	QUnit.test('Оставляет без изменений строки, где все символы уникальны', function (assert) {
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

	QUnit.test('Удаляет идущие подряд буквы', function (assert) {
		assert.strictEqual(letters('111'), '');
		assert.strictEqual(letters('www'), '');
		assert.strictEqual(letters('...'), '');
		assert.strictEqual(letters('   '), '');
	});

	QUnit.test('Оставляет первую букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', true), '12');
		assert.strictEqual(letters('wWw', true), 'wW');
		assert.strictEqual(letters('.-.', true), '.-');
		assert.strictEqual(letters(' 0 ', true), ' 0');
	});

	QUnit.test('Оставляет последнюю букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', false), '21');
		assert.strictEqual(letters('wWw', false), 'Ww');
		assert.strictEqual(letters('.-.', false), '-.');
		assert.strictEqual(letters(' 0 ', false), '0 ');
	});

	QUnit.test('Удаляет повторяющиеся буквы в разных словах', function (assert) {
		assert.strictEqual(letters('привет, мир'), 'пвет, м');
		assert.strictEqual(letters('hello, world'), 'he, wrd');
		assert.strictEqual(letters('мама мыла раму'), 'ылру');
		assert.strictEqual(letters("'Кукареку!', сказал Петух'"), 'Кр!,сзлПтх');

		assert.strictEqual(letters('мама мыла раму', true), 'ма ылру');
		assert.strictEqual(letters('от топота копыт', true), 'от пакы');
		assert.strictEqual(letters('hello world', true), 'helo wrd');

		assert.strictEqual(letters('мама мыла раму', false), 'ыл раму');
		assert.strictEqual(letters('от топота копыт', false), 'а копыт');
		assert.strictEqual(letters('hello world', false), 'he world');
	});

	QUnit.test('Проверяет корректность типа первого параметра', function (assert) {
        assert.strictEqual(letters(NaN), null);
		assert.strictEqual(letters(454324532, true), null);
		assert.strictEqual(letters([1,2,"hello", {'a' : 5}] ,false), null);
		assert.strictEqual(letters(null), null);
	});	

	QUnit.test('Правильно удаляет разные повторяющиеся буквы', function (assert) {
        assert.strictEqual(letters('pppccc aa ddd f'), 'f');
		assert.strictEqual(letters('zvzvzv ooozzz'), ' ');
		assert.strictEqual(letters('abccddefghh'), 'abefg');
		assert.strictEqual(letters('htdgfhkyruteytsgfnhkyutyrtsedf'), 'n');
	});	

	QUnit.test('Корректно обрабатывает разные регистры', function (assert) {
		assert.strictEqual(letters('pPppppPppppP'), '');
		assert.strictEqual(letters('Python poor Performance', true), 'Python prefmac');
		assert.strictEqual(letters('dAta sCience', false), 'dAta sCince');
	});	

	QUnit.test('Корректно обрабатывает строки со специальными символами', function (assert) {
		assert.strictEqual(letters('*^!@#$%^&*()(*&^%$#$%^&*(*&^%$##$%^%$%^&*&^%$#@#$%^*&(^&%$#^&*%^$&^#$'), '!)');
		assert.strictEqual(letters('*^!@#$$%^%$%^#^&*%^$&^#${[/][]}][]::;№%;:?*%;№"№%;:%*;', true), '*^!@#$%&{[/]}:;№?"');
	});	

	QUnit.test('Проверка на соответствие второго аргумента', function (assert)  {
		assert.strictEqual(letters('programming is fun', 42), null);
		assert.strictEqual(letters('python programming', 'wow'), null);
		assert.strictEqual(letters('data science', NaN), null);
		assert.strictEqual(letters('machine learning', {a : 1, b : 2}), null);
	}
)});
