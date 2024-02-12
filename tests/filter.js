'use strict';

function escapeHtml(unsafe) {
    return unsafe.replace(/[&<>"']/g, match => {
        switch (match) {
            case '&':
                return '&amp;';
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case "'":
                return '&#39;';
        }
    });
}
function filter(html, allowedTags) {
    let allowedTagsDict = {};
    allowedTags.forEach(tag => allowedTagsDict[tag.toLowerCase()] = true);

    return html.split(/(<\/?[a-z][a-z0-9]*\b[^>]*>)/gi).map(fragment => {
        const isTag = /^<\/?[a-z][a-z0-9]*\b[^>]*>$/i.test(fragment);
        const tagName = fragment.replace(/^<\/?([a-z][a-z0-9]*)\b[^>]*>$/i, '$1').toLowerCase();

        if (isTag && allowedTagsDict[tagName]) {
            return fragment;
        } else {
            return escapeHtml(fragment);
        }
    }).join('');
}

QUnit.module('Проверка работы функции filter', function () {
    QUnit.test('filter экранирует символы в обычном тексте', function (assert) {
        const input = '- "42!", сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной & всего такого...';

        const output = filter(input, ['strong', 'em']);

        const expected = '- &quot;42!&quot;, сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной &amp; всего такого...';

        assert.strictEqual(output, expected);
    });

    QUnit.test('filter не экранирует валидные html-тэги', function (assert) {
        const input = '<strong>Hello, <em>World!</em></strong> 1 + 2 < 4!';

        const output = filter(input, ['strong', 'em']);

        const expected = '<strong>Hello, <em>World!</em></strong> 1 + 2 &lt; 4!';

        assert.strictEqual(output, expected);
    });

    QUnit.test('filter экранирует XSS', function (assert) {
        assert.strictEqual(filter(`<script>alert('1');</script>`, ['strong', 'em']), '&lt;script&gt;alert(&#39;1&#39;);&lt;/script&gt;');
        assert.strictEqual(filter(`<img src="bad" onerror="alert('1');">`, ['strong', 'em']), '&lt;img src=&quot;bad&quot; onerror=&quot;alert(&#39;1&#39;);&quot;&gt;');
    });
});
