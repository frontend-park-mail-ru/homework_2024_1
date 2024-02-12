'use strict'

function zip() {
    if (!arguments.length) {
        return {};
    }

    // Создадим множество setItems, чтобы получить только уникальные объекты для сжатия (для этого преобразуем в строку JSON) 
    let setItems = new Set(Array.from(arguments).map(obj => JSON.stringify(obj)));
    // Преобразуем обратно в объекты
    setItems = Array.from(setItems, jsonObject => JSON.parse(jsonObject));

    // setObjectFields - аккумулирующее значение
    let mapObjectFields = new Map();
    setItems.forEach((item) => {
        const keyValueArray = Object.entries(item);
        if (keyValueArray.length) {
            keyValueArray.forEach((row) => {
                const key = row[0];
                const value = row[1];
                if (!mapObjectFields.has(key)) {
                    mapObjectFields.set(key, value);
                }
            });
        }
    });

    const resultObject = {};
    for (const [key, value] of mapObjectFields.entries()) {
        resultObject[key] = value;
    }
    return resultObject;
}