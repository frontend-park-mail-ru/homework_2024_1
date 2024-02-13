const filter = (input, allowedTags) => {
    const tagRegExp = /<\/?([a-zA-Z0-9]+)[^>]*>/g;
    const matches = [...input.matchAll(tagRegExp)];
    let tagsMas = [];
    for (const match of matches) {
        let tag = match[0];
        tag = tag.substring(1, tag.length - 1);
        const tagName = match[1];
        if (allowedTags.includes(tag)) {
            tagsMas.push(findClosingTag(input, tagName));
        }
    }
    return saveText(input, allowedTags, tagsMas);
};

const saveText = (text, allowedTags, tagIndexes) => {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    };

    const regex = new RegExp(`[&<>"'\\s]`, 'g');
    return text.replaceAll(regex, (match, index) => {
        if (checkIndex(index, tagIndexes)) {
            return match;
        } else {
            return map[match] || match;
        }
    });
};

const findClosingTag = (text, tagName) => {
    const openingTagRegex = new RegExp(`<${tagName}\\b[^>]*>`, 'g');
    const closingTagRegex = new RegExp(`</${tagName}>`, 'g');
    const openingTags = [...text.matchAll(openingTagRegex)];
    const closingTags = [...text.matchAll(closingTagRegex)];
    const tagsIndex = [];
    let flag = false;

    for (let i = 0; i < openingTags.length; i++) {
        let openingTagIndex = openingTags[i].index;

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

const checkIndex = (index, indexMas) => {
    for (const pair of indexMas) {
        const [start, end] = pair;
        if (index >= start && index <= end) {
            return true;
        }
    }
    return false;
};
