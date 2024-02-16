/**
 * Проверяет, попадает ли указанный индекс в любой из диапазонов, указанных в indexMas.
 * @param {number} index - Индекс для проверки.
 * @param {Array<Array<number>>} indexMas - Массив диапазонов индексов.
 * @returns {boolean} - Возвращает true, если индекс попадает в любой из диапазонов, иначе false.
 */
const checkIndex = (index, indexMas) => indexMas.some(([start, end]) => index >= start && index <= end);

/**
 * Заменяет небезопасные символы в тексте на соответствующие безопасные HTML-сущности,
 * за исключением символов внутри разрешенных тегов.
 * @param {string} text - Исходный текст для очистки.
 * @param {string[]} allowedTags - Массив разрешенных HTML-тегов.
 * @param {Array<Array<number>>} tagIndexes - Массив индексов тегов.
 * @returns {string} - Очищенный текст.
 */
const saveText = (text, allowedTags, tagIndexes) => {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    };
    return text.replace(/[&<>"'\s]/g, (match, index) => {
        const replacement = map[match];
        return checkIndex(index, tagIndexes) ? match : replacement || match;
    });
};

/**
 * Находит индексы закрывающих тегов для указанного открывающего тега в тексте.
 * @param {string} text - Исходный текст.
 * @param {string} tagName - Имя тега для поиска закрывающих тегов.
 * @returns {Array<number>} - Массив индексов закрывающих тегов.
 */
const findClosingTag = (text, tagName) => {
    const openingTagRegex = new RegExp(`<${tagName}\\b[^>]*>`, 'g');
    const closingTagRegex = new RegExp(`</${tagName}>`, 'g');
    const openingTags = [];
    let match;
    while ((match = openingTagRegex.exec(text)) !== null) {
        openingTags.push(match.index);
    }
    const closingTags = [];
    while ((match = closingTagRegex.exec(text)) !== null) {
        closingTags.push(match.index + tagName.length + 3); // Добавляем длину '</tagName>'.
    }
    const tagsIndex = [];
    for (let i = 0; i < openingTags.length; i++) {
        let openingTagIndex = openingTags[i];
        let flag = false;
        for (let j = 0; j < closingTags.length; j++) {
            let closingTagIndex = closingTags[j];
            if (closingTagIndex > openingTagIndex) {
                tagsIndex.push(openingTagIndex, closingTagIndex);
                flag = true;
                break;
            }
        }
        if (!flag) {
            tagsIndex.push(openingTagIndex, text.length);
        }
    }
    return tagsIndex;
};

/**
 * Фильтрует небезопасные HTML-теги из входного текста, оставляя разрешенные теги.
 * @param {string} input - Входной HTML-текст.
 * @param {string[]} allowedTags - Массив разрешенных HTML-тегов.
 * @returns {string} - Очищенный HTML-текст.
 */
const filter = (input, allowedTags) => {
    const tagRegExp = /<\/?([a-zA-Z0-9]+)[^>]*>/g;
    const tagsMas = [];
    let match;
    while ((match = tagRegExp.exec(input)) !== null) {
        const tagName = match[1];
        if (allowedTags.includes(tagName)) {
            tagsMas.push(findClosingTag(input, tagName));
        }
    }
    return saveText(input, allowedTags, tagsMas);
};
