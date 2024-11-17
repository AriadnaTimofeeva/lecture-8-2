/*
Задача1: 
Напишите функцию countNumericValues(obj), которая принимает объект
и возвращает количество его свойств, значения которых являются числами. 
Этапы решения: 
Создайте функцию countNumericValues, которая принимает объект obj. 
Используйте Object.values(obj), чтобы получить массив всех значений объекта. 
Примените метод .filter() для массива значений, оставляя только числовые значения. 
Возвращайте длину полученного массива с числовыми значениями.
*/

function countNumericValues(obj) {

    if (typeof obj !== 'object' || obj === null) {
     return 0; 
    }

    const values = Object.values(obj);
   
    const numericValues = values.filter(value => typeof value === 'number' && !isNaN(value)); //+ проверка для NaN
   
    return numericValues.length;
   }
   
// пример на разные типы данных:
const obj0 = {a:1, b:null, c:undefined, d:NaN, e: 4.5, f:"function", g:"20", q: true};
console.log(`Вывод объекта с разными типами данных:`);
console.log(obj0);
console.log(`Количество числовых значений: ${countNumericValues(obj0)}`);