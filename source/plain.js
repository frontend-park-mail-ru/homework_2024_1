const plain = (arr) => {
    const res = []
    for (const item of arr) {
        if (Array.isArray(item) === true) {
            if (item === undefined || item.length == 0) {
                continue;
            }
            const ans = plain(item)
            for (const it of ans) {
                res.push(it)
            }
        }
        else {
            res.push(item)
        }
    }
    return res
}