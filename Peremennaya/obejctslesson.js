'use strict';

let options = {
    width: 1024,
    lenght: 1024,
    name: "fun"
};

options.colors = {
    maincol: "red",
    offcol: "black"
};

//delete options.colors;

for (let key in options){
    console.log("Setting " + key + " is " + options[key]);
}

console.log(Object.keys(options).length);


let arr = [1, 2, 3, 4, 5];
//arr[99] = 99 этот массив - саморасширяющийся

arr.pop();
arr.push("6");
arr.shift();//убрать с начала
arr.unshift("0");//добавить в начало

arr.forEach(function(item, i){
console.log(i + " " + item + " ");
});

let mass =[1,3,5,7,8];

for(let key in mass){ //in - выдает свойство (в данном случае номер)
    console.log(key);
};

for(let key of mass){ //of - выдает само значение
    console.log(key);
};


let ans = prompt("vvedi pls",""),
    arr1 = [];

    arr1 = ans.split(","); //split - разделяет строку с делиметром в скобках

let arr2 = ["yo","sobaki"],
    i = arr.join(", "); // обратное сплиту

let arr3 = ["yo","sobaki"],
    i1 = arr.sort(", "); // сортирует по алфавиту ( сортирует все как строки)

let arr4 = [1,15, 2], // 
    i2 = arr.sort(", "); // => [1 , 1(!)5, 2]

let arr5 = [1,15, 2], // 
    i3 = arr.sort(compareNum); // так как sort основывается на quicksorт, то таким образом можно отсортировать числа
                                // (этот квик основывается на разности двух чисел и таким образом рещает какое больше)

function compareNum(a,b) {
    return a-b;
}

let soldier ={
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;//назначает родителя
