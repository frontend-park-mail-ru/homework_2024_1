const checkIndex = (index, indexMas) => indexMas.some(([start, end]) => index >= start && index <= end);

const saveText = (text, allowedTags, tagIndexes) => {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    };
    return text.replaceAll(/[&<>"'\s]/g, (match, index) =>
        checkIndex(index, tagIndexes) ? match : map[match] || match
    );
};

const findClosingTag = (text, tagName) => {
    const openingTagRegex = new RegExp(`<${tagName}\\b[^>]*>`, 'g');
    const closingTagRegex = new RegExp(`</${tagName}>`, 'g');
    const openingTags = [...text.matchAll(openingTagRegex)];
    const closingTags = [...text.matchAll(closingTagRegex)];
    const tagsIndex = [];

    for (let i = 0; i < openingTags.length; i++) {
        let openingTagIndex = openingTags[i].index;
        let flag = false;

        for (let j = 0; j < closingTags.length; j++) {
            let closingTagIndex = closingTags[j].index;

            if (closingTagIndex > openingTagIndex) {
                let openingTagLength = openingTags[i][0].length;
                tagsIndex.push(openingTagIndex, closingTagIndex + openingTagLength);
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

const filter = (input, allowedTags) => {
    const tagRegExp = /<\/?([a-zA-Z0-9]+)[^>]*>/g;
    const matches = [...input.matchAll(tagRegExp)];
    const tagsMas = matches
        .map(match => match[0].substring(1, match[0].length - 1))
        .filter(tag => allowedTags.includes(tag))
        .map(match => findClosingTag(input, match));
    return saveText(input, allowedTags, tagsMas);
};
