'use strict';

QUnit.module('Тестируем функцию anagram', function () {
  QUnit.test('Функция работает правильно', function (assert) {
    const input = [
      'кот', 'пила', 'барокко',
      'стоп', 'ток', 'кошка',
      'липа', 'коробка', 'пост'
    ];

    const output = [
      ['барокко', 'коробка'],
      ['кот', 'ток'],
      ['липа', 'пила'],
      ['пост', 'стоп']
    ];

    assert.deepEqual(anagram(input), output);
  });

  QUnit.test('Возвращает правильно отсортированные слова', function (assert) {
    const input = [
      'апорт', 'торг', 'тропа',
      'стоп', 'грот'
    ];

    const output = [
      ['апорт', 'тропа'],
      ['грот', 'торг']
    ];

    assert.deepEqual(anagram(input), output);
  });

  QUnit.test('Функция работает правильно, когда нет анаграмм', function (assert) {
    const input = [
      'кот', 'пила', 'барокко',
      'стоп'
    ];

    const output = [];

    assert.deepEqual(anagram(input), output);
  });

  QUnit.test('Функция корректно обрабатывает массив разных типов данных', function (assert) {
    const input = [
      undefined, 'кот', 1, 'пила', null, 'барокко',
      'стоп', 'ток', 'кошка', 'липа', {}, 'коробка', 'пост'
    ];

    const output = [
      ['барокко', 'коробка'],
      ['кот', 'ток'],
      ['липа', 'пила'],
      ['пост', 'стоп']
    ];

    assert.deepEqual(anagram(input), output);
  });


  QUnit.test('Функция выбрасывает ошибку при передаче null', function (assert) {
    assert.throws(() => anagram(null), new Error('Input should be an array!!!'));
  });

  QUnit.test('Функция выбрасывает ошибку при передаче undefined', function (assert) {
    assert.throws(() => anagram(undefined), new Error('Input should be an array!!!'));
  });

  QUnit.test('Функция выбрасывает ошибку при передаче строки', function (assert) {
    assert.throws(() => anagram('not an array'), new Error('Input should be an array!!!'));
  });

  QUnit.test('Функция выбрасывает ошибку при передаче числа', function (assert) {
    assert.throws(() => anagram(123456), new Error('Input should be an array!!!'));
  });

  QUnit.test('Функция выбрасывает ошибку при передаче объекта', function (assert) {
    assert.throws(() => anagram({}), new Error('Input should be an array!!!'));
  });

});
