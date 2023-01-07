// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let myArray = [1, 2, 3, 4, 5, 'word', null, 0 , , undefined, false];
let evenNumber = 0;
let oddNumber = 0;
let nullElement = 0;


myArray.forEach(function(item, i, myArray){

    if ((typeof(item) === "number")&&((item % 2)==0)&&(item!=0)){
        evenNumber += 1;
    }
    else if (item===0) { 
        nullElement += 1;
    }
    else if((typeof(item) === "number")&&((item % 2)!==0)&&(item!=0)) {
        oddNumber += 1;
    }
});


console.log(`Количество четных элементов - ${evenNumber}, Количество нечетных элементов - ${oddNumber}, Количество нулевых элементов - ${nullElement}`);