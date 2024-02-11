const minmax = numericString => {
	
	if (typeof numericString !== typeof ' '){

		return [undefined, undefined];

	}

    const subStringArray = numericString.split(' ').filter(num => num !== '');

	//преобразование подстрок в значение
	const numArray = subStringArray.map(Number).filter(num => !isNaN(num));
	if (numArray.length === 0) {

		return [undefined, undefined];

	}

    const min = Math.min(...numArray);
    const max = Math.max(...numArray);

    return [min, max];

};
