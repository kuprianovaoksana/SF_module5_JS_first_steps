// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let myArray = [];
// let myArray = [2, 2, 2, 2, 2, 2, 2];
let arrLength = Math.round((Math.random()*10));
let resultValue;

for (let i=0; i<arrLength; i++) {
    myArray[i]= Math.round((Math.random()*10));
}

for (let i=0; i<(myArray.length-1); i++) {
    if (myArray[i] === myArray[i+1]) {
                resultValue = true;
                                
            }
            else {
                resultValue = false;
                break;
            }
}

console.log(myArray);
console.log(resultValue);