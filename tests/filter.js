'use strict';

QUnit.module('Проверка работы функции filter', function () {
	QUnit.test('filter экранирует символы в обычном тексте', function (assert) {
		const input = '- "42!", сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной & всего такого...';

		const output = filter(input, [ 'strong', 'em' ]);

		const expected = '- &quot;42!&quot;, сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной &amp; всего такого...';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter не экранирует валидные html-тэги', function (assert) {
		const input = '<strong>Hello, <em>World!</em></strong> 1 + 2 < 4!';

		const output = filter(input, [ 'strong', 'em' ]);

		const expected = '<strong>Hello, <em>World!</em></strong> 1 + 2 &lt; 4!';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter экранирует XSS', function (assert) {
		assert.strictEqual(filter(`<script>alert('1');</script>`, [ 'strong', 'em' ]), '&lt;script&gt;alert(&#39;1&#39;);&lt;/script&gt;');
		assert.strictEqual(filter(`<img src="bad" onerror="alert('1');">`, [ 'strong', 'em' ]), '&lt;img src=&quot;bad&quot; onerror=&quot;alert(&#39;1&#39;);&quot;&gt;');
	});
	QUnit.test('filter экранирует специальные символы HTML', function (assert) {
    const input = '<>&"\'';

    const output = filter(input, ['strong', 'em']);

    const expected = '&lt;&gt;&amp;&quot;&#39;';

    assert.strictEqual(output, expected);
});

QUnit.test('filter экранирует HTML теги, когда они не разрешены', function (assert) {
    const input = '<script>alert("XSS");</script>';

    const output = filter(input, ['strong', 'em']);

    const expected = '&lt;script&gt;alert(&quot;XSS&quot;);&lt;/script&gt;';

    assert.strictEqual(output, expected);
});

QUnit.test('filter корректно обрабатывает пустой ввод', function (assert) {
    const input = '';

    const output = filter(input, ['strong', 'em']);

    const expected = '';

    assert.strictEqual(output, expected);
});
QUnit.test('filter не изменяет текст, если все теги разрешены', function (assert) {
    const input = '<div>Hello, <em>World!</em></div>';

    const output = filter(input, ['div', 'em']);

    const expected = '<div>Hello, <em>World!</em></div>';

    assert.strictEqual(output, expected);
});
});
