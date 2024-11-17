/*
Задача2: Свойство, скрытое от перечисления.
Создайте объект car и добавьте ему свойство price со значением 10000. 
Сделайте так, чтобы это свойство: 
Не выводилось в списке ключей (то есть не было перечисляемым). 
Но его можно было изменять и удалять. 
Этапы решения: 
Создайте объект car. 
Добавьте свойство price с помощью Object.defineProperty(), 
установив в дескрипторе флаг enumerable как false. 
*/


const car = {};

//  добавляем св-во price неперечисляемое:
Object.defineProperty(car, 'price', {
 value: 10000,
 writable: true, 
 configurable: true, 
 enumerable: false 
});

// не будет выводиться в списке ключей:
for (let key in car) {
 console.log(key); 
}

// изменение св-ва:
console.log(`Цена до изменения: ${car.price}`); 
car.price = 20000;
console.log(`Цена после изменения: ${car.price}`); 

// удаление св-ва:
delete car.price;
console.log(`Характеристика цены: ${car.price}\n`); 

// выведется пустой массив, тк св-во неперечисляемо:
console.log(Object.keys(car)); 

// выведется undefined, тк св-во удалено:
console.log(Object.getOwnPropertyDescriptor(car, 'price'));