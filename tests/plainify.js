'use strict';

QUnit.module('Тестируем функцию plainify', function() {
    QUnit.test('plainify работает правильно', function(assert) {
        assert.deepEqual(plainify({ foo: 'bar', baz: 42 }), { 'foo': 'bar', 'baz': 42 });

        const nested1 = {
            deep: {
                foo: 'bar',
                baz: 42
            }
        };

        const plain1 = {
            'deep.foo': 'bar',
            'deep.baz': 42
        };

        assert.deepEqual(plainify(nested1), plain1);
    });

    QUnit.test('plainify работает правильно с глубиной 3, 4', function(assert) {
        const nested2 = {
            deep: {
                foobar: 0,
                nested: {
                    object: {
                        fields: {
                            foo: 42,
                            bar: 42,
                            baz: 42
                        }
                    }
                }
            }
        };

        const plain2 = {
            'deep.foobar': 0,
            'deep.nested.object.fields.foo': 42,
            'deep.nested.object.fields.bar': 42,
            'deep.nested.object.fields.baz': 42
        };

        assert.deepEqual(plainify(nested2), plain2);
    });

    QUnit.test('plainify работает правильно с глубиной 3, 4', function(assert) {
        const nested3 = {
            boo: 'bo',
            deep: {
                foobar: 0,
                nested: {
                    object1: 'obj1',
                    object2: {
                        fields: {
                            foo: 42,
                            bar: 42,
                            baz: 42
                        }
                    }
                }
            }
        };

        const plain3 = {
            'boo': 'bo',
            'deep.foobar': 0,
            'deep.nested.object1': 'obj1',
            'deep.nested.object2.fields.foo': 42,
            'deep.nested.object2.fields.bar': 42,
            'deep.nested.object2.fields.baz': 42
        };

        assert.deepEqual(plainify(nested3), plain3);
    });

    QUnit.test('plainify работает правильно с null и array', function(assert) {
        const nested4 = {
            boo: true,
            deep: {
                foobar: 0,
                nested: {
                    object1: [1, 'apple', true, { name: 'John' },
                        [5, 6, 7]
                    ],
                    object2: {
                        fields: {
                            foo: null,
                            baz: 42
                        }
                    }
                }
            }
        };

        const plain4 = {
            "boo": true,
            "deep.foobar": 0,
            "deep.nested.object1": [
                1,
                "apple",
                true,
                {
                    "name": "John"
                },
                [
                    5,
                    6,
                    7
                ]
            ],
            "deep.nested.object2.fields.foo": null,
            "deep.nested.object2.fields.baz": 42
        };

        assert.deepEqual(plainify(nested4), plain4);
    });

    QUnit.test('plainify работает правильно с пустым объектом', function(assert) {
        assert.deepEqual(plainify({}), {});
    });

    QUnit.test('plainify корректно обрабатывает не объекты', function(assert) {
        assert.throws(() => plainify(154), new TypeError('Not an object!'));
        assert.throws(() => plainify(true), new TypeError('Not an object!'));
        assert.throws(() => plainify('aaaa'), new TypeError('Not an object!'));
        assert.throws(() => plainify([1, 2]), new TypeError('It is an array!'));
        assert.throws(() => plainify([1, [5, 56]]), new TypeError('It is an array!'));
    });
});
