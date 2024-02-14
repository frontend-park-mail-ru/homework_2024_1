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


function filter(html, allowedTags) {
    let allowedTagsDict = {};
    allowedTags.forEach(tag => allowedTagsDict[tag.toLowerCase()] = true);

    return html.split(/(<\/?[a-z][a-z0-9]*[^>]*>)/gi).map(fragment => {
        const isTag = /^<\/?[a-z][a-z0-9]*\b[^>]*>$/i.test(fragment);
        const tagName = fragment.replace(/^<\/?([a-z][a-z0-9]*)\b[^>]*>$/i, '$1').toLowerCase();

        if (isTag && allowedTagsDict[tagName]) {
            return fragment;
        } else {
            return makeHtmlSafe(fragment);
        }
    }).join('');
}