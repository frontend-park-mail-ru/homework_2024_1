"using strict";

let sorting = (array, keys) => {
    for (item of keys.reverse()) {
        array.sort((a, b) => (typeof a[item] === 'string') && (typeof b[item] === 'string') ? a[item].localeCompare(b[item]) : a[item] - b[item]);
    }
    return array
};