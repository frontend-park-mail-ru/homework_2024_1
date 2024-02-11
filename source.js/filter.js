
function filter(input, allowedTags) {
    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
        };
        return text.replace(/[&<>"']/g, function (m) {
            return map[m];
        });
    }

    //Регулярное выражение для поиска тегов (придумал не сам, ещё не проходили регулярки)
    const tagRegExp = /<\/?([a-zA-Z0-9]+)[^>]*>/g;

    //Заменяем все теги в строке на маркеры
    let marker = '___HTML_TAG_MARKER___';
    let markerCount = 0;
    let tagMap = {};

    input = input.replace(tagRegExp, function (match, tag) {
        if (allowedTags.includes(tag.toLowerCase())) {
            let key = marker + markerCount++;
            tagMap[key] = match;
            return key;
        } else {
            return match; //Возвращаем тег без изменений
        }
    });

    //Экранируем оставшийся текст
    input = escapeHtml(input);

    //Заменяем маркеры обратно на теги
    for (let key in tagMap) {
        input = input.replace(key, tagMap[key]);
    }

    return input;
}
