/**
 * Find minimum and maximum numeric value in string
 * @param {string} numericString - Строка, из которой нужно вернуть минимальное и максимальное значение
 * @returns {array} - Возвращает массив с минимальным и максимальным значением
 */
const minmax = (numericString) => {
	// if (numericString instanceof String) {
    //     numericString = numericString.toString();
    // }
	
	if (typeof numericString !== typeof ' ' && !(numericString instanceof String)) {

		return [undefined, undefined];
	}

	const subStringArray = numericString.split(/[,;:\s]+/).filter(num => num !== '');

	//преобразование подстрок в значение
	const numArray = subStringArray.map(Number).filter(num => !Number.isNaN(num));
	if (!numArray.length) {

		return [undefined, undefined];
	}

    const min = Math.min(...numArray);
    const max = Math.max(...numArray);

    return [min, max];
};
