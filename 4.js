/*
Задача4:
Напишите функцию deepCopy(obj), которая выполняет глубокое копирование объекта (включая вложенные объекты). 
Не используйте библиотечные функции.
*/


function deepCopy(obj) {

    if (obj === null || typeof obj !== 'object') {
        return obj; 
    }

    // cоздаем массив или объект в зависимости от типа obj:
    const copy = Array.isArray(obj) ? [] : {};

    // рекурсивная копия свойств
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}

// для примера:
const original = {
    a: 1,
    b: { c: 2, d: [3, 4] },
    e: null,
};

const copied = deepCopy(original);
console.log(copied); 

// изменим оригинал и проверим, что копия не изменилась:
original.b.c = 5;
console.log(original); // { a: 1, b: { c: 5, d: [3, 4] }, e: null }
console.log(copied);   // { a: 1, b: { c: 2, d: [3, 4] }, e: null }