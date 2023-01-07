// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

let myMap = new Map();


myMap.set("fruit", "apple");
myMap.set("овощ", "капуста");
myMap.set("ягода", "клубника");
myMap.set("орех", "кешью");
myMap.set("123", 123);


myMap.forEach((value, key) => {
    console.log(`Ключ - ${key}, значение - ${value}.`);
});

// for (let name of myMap.keys()){
//     console.log("Ключ - " + name);
// }
// for (let value of myMap.values()){
//     console.log("Значение - " + value);
// }
