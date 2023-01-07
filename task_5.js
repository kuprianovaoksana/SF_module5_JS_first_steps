// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.



// вариант с готовым массивом
// let myArray = [true, 'string', 123, false, null];
// console.log ("Длинна массива: " + myArray.length);

// myArray.forEach(function(item, i, myArray) {
//     // console.log (i + " элемент: "+item) ;
//     console.log (`элемент "${item}", индекс - ${i}`);
//   });






// вариант с созданием произвольного массива

let myArray = [];


let arrLength = Math.round((Math.random()*10));

for (let i=0; i<arrLength; i++) {
    myArray[i]= Math.round((Math.random()*10));
    console.log(i + "-й элемент: "+ myArray[i]);
}

console.log ("Длинна массива: " + myArray.length);

