
'use strict';

let num = 20;

function showMessage(text){ // эти function можно вызывать до из объявления
    alert(text);
    let num = 10;
    console.log(num); // Замыкание функции - сначала ищет переменнуб в себе, а потому снаружи поэтому тут 10.
}

var check = function showMessage(a,b){   // эти function нельзя вызывать до из объявления
return a+b;
};
var check1 = (a,b) => a+b;// check = check1 это стрелочная функция, ее нельзя использовать во всех случаях
showMessage("Sup");


let twel = "1p2.p2px";
console.log(parseFloat(twel));
console.log(parseInt(twel));

function trythis(lang, callback){
        console.log("nu");
        callback();
}

trythis("java", function(){
    console.log("tak");
});