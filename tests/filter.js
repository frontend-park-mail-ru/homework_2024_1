"use strict";

QUnit.module("Проверка работы функции filter", function () {
  QUnit.test("filter экранирует символы в обычном тексте", function (assert) {
    const input =
      '- "42!", сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной & всего такого...';

    const output = filter(input, ["strong", "em"]);

    const expected =
      "- &quot;42!&quot;, сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной &amp; всего такого...";

    assert.strictEqual(output, expected);
  });

  QUnit.test("filter не экранирует валидные html-тэги", function (assert) {
    const input = "<strong>Hello, <em>World!</em></strong> 1 + 2 < 4!";

    const output = filter(input, ["strong", "em"]);

    const expected = "<strong>Hello, <em>World!</em></strong> 1 + 2 &lt; 4!";

    assert.strictEqual(output, expected);
  });

  QUnit.test("filter экранирует XSS", function (assert) {
    assert.strictEqual(
      filter(`<script>alert('1');</script>`, ["strong", "em"]),
      "&lt;script&gt;alert(&#39;1&#39;);&lt;/script&gt;"
    );
    assert.strictEqual(
      filter(`<img src="bad" onerror="alert('1');">`, ["strong", "em"]),
      "&lt;img src=&quot;bad&quot; onerror=&quot;alert(&#39;1&#39;);&quot;&gt;"
    );
  });

  QUnit.test("filter обрабатывает пустую строку", function (assert) {
    assert.strictEqual(filter("", ["strong", "em"]), "");
  });

  QUnit.test(
    "filter обрабатывает текст с разрешенными тегами",
    function (assert) {
      const input = "<strong><em>Hello!</em></strong>";
      const output = filter(input, ["strong", "em"]);
      const expected = "<strong><em>Hello!</em></strong>";
      assert.strictEqual(output, expected);
    }
  );

  QUnit.test(
    "filter обрабатывает ошибку, где вместо текста передали число",
    function (assert) {
      const input = 1;
      const expected = "Invalid input. 'input' must be a string.";
      assert.throws(() => {
        filter(input, ["strong", "em"]);
      }, new Error(expected));
    }
  );

  QUnit.test(
    "filter обрабатывает ошибку, где вместо массива тэгов передали число",
    function (assert) {
      const input = "<strong><em>Hello!</em></strong>";
      const expected = "Invalid input. 'allowedTags' must be an array.";
      assert.throws(() => {
        filter(input, 1);
      }, new Error(expected));
    }
  );
});
