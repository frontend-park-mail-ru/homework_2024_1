const minmax = numbers => {
    numbers = numbers.split(' ').filter(num => num!=='');
	//обработка пустой строки / строки только с пробелами
	if (numbers.length === 0) {
		return [undefined, undefined];
	}
	//преобразование подстрок в значение
	numbers = numbers.map(Number).filter(num => !isNaN(num));
	if (numbers.length === 0) {
		return [undefined, undefined];
	}
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return [min, max];
};
