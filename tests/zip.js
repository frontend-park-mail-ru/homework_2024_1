'use strict';

QUnit.module('Тестируем функцию zip', function () {
  QUnit.test('Функция работает с единственным объектом', function (assert) {
    assert.deepEqual(zip({}), {});
    assert.deepEqual(zip({ answer: 42 }), { answer: 42 });
    assert.deepEqual(zip({ name: 'Georg' }), { name: 'Georg' });
    const obj = {
      count: 0,
      cost: '120$'
    };
    assert.deepEqual(zip(obj), obj);
  });

  QUnit.test(
    'Функция работает с объектами среди которых есть объекты без свойств',
    function (assert) {
      assert.deepEqual(zip({}, {}), {});
      assert.deepEqual(zip({ answer: 42 }, {}), { answer: 42 });
      assert.deepEqual(zip({}, { answer: 42 }), { answer: 42 });
      assert.deepEqual(zip({}, { answer: 42 }), { answer: 42 });
      assert.deepEqual(zip({}, {}, {}, { name: 'Georg' }), { name: 'Georg' });

      const obj = {
        count: 0,
        cost: '120$'
      };

      assert.deepEqual(zip({}, {}, {}, obj, {}, {}), obj);
    }
  );

  QUnit.test(
    'Функция работает с объектами со свойствами с разными именами',
    function (assert) {
      const obj = {
        count: 0,
        cost: '120$'
      };

      assert.deepEqual(zip({ count: 0 }, { cost: '120$' }), obj);

      const obj2 = {
        a: 1,
        b: 2,
        c: null,
        d: 4,
        e: 5
      };
      assert.deepEqual(
        zip({ a: 1 }, { b: 2 }, { c: null }, { d: 4 }, { e: 5 }),
        obj2
      );

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
    }
  );

  QUnit.test(
    'Функция правильно работает со свойствами, которые встречаются в нескольких объектах',
    function (assert) {
      assert.deepEqual(
        zip({ answer: 42 }, { answer: false }),
        { answer: 42 },
        'Значение должно браться из первого встретившегося поля'
      );
      assert.deepEqual(zip({ age: 5 }, {}, { age: 4 }, { age: 72 }), {
        age: 5
      });

      const obj = {
        name: 'age',
        value: 42
      };

      assert.deepEqual(
        zip({ name: 'age' }, { value: 42 }, { name: 'cost' }, { value: -6 }),
        obj
      );
    }
  );

  // Мои тесты
  QUnit.test('Функция не принимает параметры', (assert) => {
    assert.deepEqual(zip(), null);
  });

  QUnit.test(
    'Функция работает с массивом данных, среди которых есть тип данных, отличный от объекта',
    (assert) => {
      const obj1 = {
        key1: 'ha',
        key2: 'po'
      };

      const obj2 = {
        key3: 'pi',
        key4: 10
      };

      assert.deepEqual(zip(obj1, obj2, 5), null);
    }
  );

  QUnit.test(
    'Функция работает с массивом данных, в котором есть null',
    (assert) => {
      const obj1 = {
        key1: 'ha',
        key2: 'po',
      };

      const obj2 = {
        key3: 'pi',
        key4: 10
      };

      assert.deepEqual(zip(obj1, null, obj2), null);
    }
  );

  QUnit.test(
    'Функция принимает один объект null',
    (assert) => {
      assert.deepEqual(zip(null), null);
    }
  );

  QUnit.test(
    'Функция принимает список объектов, среди которых есть массив',
    (assert) => {
      const obj1 = {
        key1: 'ha',
        key2: 'po'
      };

      const obj2 = {
        key3: 'pi',
        key4: 10
      };

      const result = {
        key1: 'ha',
        key2: 'po',
        key3: 'pi',
        key4: 10,
        0: 1,
        1: 2
      }

      assert.deepEqual(zip(obj1, [1, 2], obj2), result);
    }
  );

  QUnit.test(
    'Функция принимает список объектов, среди которых есть Map',
    (assert) => {
      const obj1 = {
        key1: 'ha',
        key2: 'po',
      };

      const obj2 = {
        key3: 'pi',
        key4: 10
      };

      const map = new Map();
      map["vk"] = "education"
      map["please"] = "give me approve :D"

      const result = {
        key1: 'ha',
        key2: 'po',
        key3: 'pi',
        key4: 10,
        "vk": "education",
        "please": "give me approve :D"
      }

      assert.deepEqual(zip(obj1, map, obj2), result);
    }
  );

});
