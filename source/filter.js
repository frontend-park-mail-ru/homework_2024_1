'use strict';
/**
 * Преобразует потенциально опасные символы в безопасный HTML-текст.
 * @param {string} unsafeHtmlText - HTML-текст, который может содержать небезопасные символы.
 * @returns {string} Безопасный HTML-текст с экранированными специальными символами.
 */
const makeHtmlSafe = (unsafeHtmlText) => {
    const charMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };

    return unsafeHtmlText.replace(/[&<>"']/g, match => charMap[match]);
};

/**
 * Фильтрует HTML-текст, оставляя только разрешенные теги и экранируя все остальные символы.
 * @param {string} html - Исходный HTML-текст, который нужно фильтровать.
 * @param {string[]} allowedTags - Массив строк, содержащий теги, которые разрешено использовать.
 * @returns {string} Фильтрованный HTML-текст, где все неразрешенные теги заменены на их экранированные аналоги.
 */
function filter(html, allowedTags) {
    const allowedTagsDict = allowedTags.reduce((dict, tag) => {
        dict[tag.toLowerCase()] = true;

        return dict;
    }, {});
    return html.split(/(<\/?[a-z][a-z0-9]*[^>]*>)/gi).map(fragment => {
        const isTag = /^<\/?[a-z][a-z0-9]*\b[^>]*>$/i.test(fragment);
        const tagName = fragment.replace(/^<\/?([a-z][a-z0-9]*)\b[^>]*>$/i, '$1').toLowerCase();

        if (isTag && allowedTagsDict[tagName]) {
            return fragment;
        }

        return makeHtmlSafe(fragment);
    }).join('');
}
