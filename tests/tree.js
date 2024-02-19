'use strict';

QUnit.module('Тестируем функцию tree', function () {
	QUnit.test('Ёлочек высотой ниже трёх не бывает', function (assert) {
		assert.strictEqual(tree(0), null);
		assert.strictEqual(tree(1), null);
		assert.strictEqual(tree(2), null);
		assert.strictEqual(tree('0'), null);
		assert.strictEqual(tree('1'), null);
		assert.strictEqual(tree('2'), null);
	});
	
	QUnit.test('Елочка не может принимать не число', function (assert) {
  		assert.strictEqual(tree([1, 2, 3 ,4]), null);
  		assert.strictEqual(tree('Text on English'), null);
  		assert.strictEqual(tree('Текст на русском'), null);
  		assert.strictEqual(tree('Не переводимый диалект испанского'), null);
  		assert.strictEqual(tree(['Вася', 'Петя', 'Маша']), null);
  		assert.strictEqual(tree([{id: 1, name: "Вася"}, {id: 2, name: "Петя"}, {id: 3, name: "Маша"}]), null);
 	});

 	QUnit.test('Елочка бывает только натуральной высоты и не может расти бесконечно', function (assert) {
  		assert.strictEqual(tree(4.1), null);
  		assert.strictEqual(tree(6.5), null);
  		assert.strictEqual(tree(8.6), null);
  		assert.strictEqual(tree('4.1'), null);
  		assert.strictEqual(tree('6.5'), null);
  		assert.strictEqual(tree('8.6'), null);
  		assert.strictEqual(tree(Infinity), null);
  		assert.strictEqual(tree(-Infinity), null);
  		assert.strictEqual(tree(1+Infinity), null); 
  		assert.strictEqual(tree(Math.pow(10, 1000)), null); 
  		assert.strictEqual(tree(Math.log(0)), null);
  		assert.strictEqual(tree(-Math.log(0)), null);
  		assert.strictEqual(tree(-Math.pow(10, 1000)), null); 
  		assert.strictEqual(tree(Infinity+Infinity), null); 
 	});

	QUnit.test('Ёлочка высотой 3', function (assert) {
		const expected =
			' * \n' +
			'***\n' +
			' | \n';
		assert.strictEqual(tree(3), expected);
		assert.strictEqual(tree('3'), expected);
	});

	QUnit.test('Ёлочка высотой 4', function (assert) {
		const expected =
			'  *  \n' +
			' *** \n' +
			'*****\n' +
			'  |  \n';
		assert.strictEqual(tree(4), expected);
		assert.strictEqual(tree('4'), expected);
	});

	QUnit.test('Ёлочка высотой 5', function (assert) {
		const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
		assert.strictEqual(tree(5), expected);
		assert.strictEqual(tree('5'), expected);
	});

	QUnit.test('Ёлочка высотой 8', function (assert) {
		const expected =
			'      *      \n' +
			'     ***     \n' +
			'    *****    \n' +
			'   *******   \n' +
			'  *********  \n' +
			' *********** \n' +
			'*************\n' +
			'      |      \n';
		assert.strictEqual(tree(8), expected);
		assert.strictEqual(tree('8'), expected);
	});
	
	QUnit.test('Ёлочка высотой 9', function (assert) {
  		const expected =
         		'       *       \n' +
         		'      ***      \n' +
         		'     *****     \n' +
         		'    *******    \n' +
         		'   *********   \n' +
         		'  ***********  \n' +
         		' ************* \n' +
         		'***************\n' +
         		'       |       \n';
  		assert.strictEqual(tree(9), expected);
  		assert.strictEqual(tree('9'), expected);
 	});
 	
 	QUnit.test('Ёлочка высотой 10', function (assert) {
  		const expected =
        		'        *        \n' +
        		'       ***       \n' +
        		'      *****      \n' +
        		'     *******     \n' +
        		'    *********    \n' +
        		'   ***********   \n' +
        		'  *************  \n' +
        		' *************** \n' +
        		'*****************\n' +
        		'        |        \n';
  		assert.strictEqual(tree(10), expected);
  		assert.strictEqual(tree('10'), expected);
 	});
 	
});
