/*
Задача5:
Напишите функцию, которая удаляет свойства из объекта по заданному массиву ключей. 
Используйте Object.keys() для проверки наличия ключей и удаления их через delete.
*/



function removeKeys(obj, keys) {

    keys.forEach(key => {
 
        if (Object.keys(obj).includes(key)) {
            delete obj[key];
        }
    });
}

// пример использования:
const obj = { a: 1, b: 2, c: 3, d: 4 };
console.log(obj);
removeKeys(obj, ['a', 'c']);
console.log(obj);