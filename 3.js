/*
Задача3: Объединение ключей и значений 
Создайте функцию combineKeysAndValues(keys, values), 
которая принимает два массива (один с ключами, второй со значениями) 
и возвращает объект, где ключи соответствуют своим значениям. 
Этапы решения: 
Создайте функцию combineKeysAndValues, принимающую два параметра: массив keys и массив values. 
Используйте метод .map() для создания массива пар [key, value]. 
Каждая пара создаётся путём сопоставления элементов массива keys 
с соответствующими элементами из values (через keys.map((key, i) => [key, values[i]])). 
Преобразуйте массив пар [key, value] в объект с помощью Object.fromEntries. 
Верните получившийся объект. 
*/


function combineKeysAndValues(keys, values) {

    // cоздаем массив пар через map:
    const keyValue = keys.map((key, i) => [key, values[i]]);
   
    // создаем объект из массива пар:
    const resultObject = Object.fromEntries(keyValue);
   
    return resultObject;
   }
   
   
   // пример:
   const keys0 = ['a', 'b', 'c'];
   const values0 = [1, 2, 3];
   console.log(combineKeysAndValues(keys0, values0));