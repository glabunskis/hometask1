{
'use strict';//при опечатке a = 5;
            //              console.log(a);
            //эта запись выдаст ошибку, иначе он выведет 5
    
var peremennaya = 1; //  переменная создается до запуска, но 
                    //  присваивается только полсе это строчки
let second = 2;// создается только когда до нее доходит
                //и видна только в блоке {}
const pi = 3.14;//нельзя менять
console.log(second);

//null - чего то не существует
//undefined - создано, но ничего не присвоено

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.name);
console.log(persone["name"]);


console.log(4/0);


    let arr = ["pervij", "vtoroj.png", 3];
    console.log(arr[2]);

    // alert("Allo");

    // let zhiv = confirm("Ti tam zhiv?");
    // console.log("On zhiv: " + zhiv);

    // let palci = prompt("Skolyko palcev vidiw?", "1"); //если нажать cancel - то даст Null
    // console.log("On vidit " + palci + " palca/ev");

    // console.log(typeof(palci)+" tut vsegda string!");
    // console.log(typeof(arr));

    let smting = +[2,3,5];//+ перед чем то превращает это в number

    console.log(typeof(smting));

    let incr = 10,
        decr = 10; //можно не писать кучу let, просто отделять переменные запятыми а в конце - точка с запятой

    incr++;//11
    decr--;

    console.log(incr++);//12 сначала выводит, а только потом увеличивает
    console.log(++incr);//13 сначала увеличивает, а потом выводит

    console.log("2" == 2);// по значению
    console.log("2" === 2);// по типу переменных

    let num = 20;

    (num == 20) ? console.log("correct") : console.log("false"); // if statement ? consequence : else

    let num1 = 0;

    while (num1<10){
        console.log(num1);
        num1++;
    }

    for(let i = 0; i < 6; i++){
        if (i == 3){
            continue; //продолжает цикл дальше, пропуская код ниже
        }
        if (i == 5){
            break; // просто прерывает цикл
        }
        console.log(i);
    }
}