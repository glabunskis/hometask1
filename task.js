{
'use strict';

let money = +prompt("Ваш бюджет на месяц?", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD", "1970-01-01");

let appData ={
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

let i = 0;

do{
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?","0");
    if(    (typeof(a)) === 'string' 
        && (typeof(a)) != null && a != ''
        && (typeof(b)) != null && b != ''
        && a.length < 50){
            console.log("done");
            appData.expenses[a] = b;
            i++;
        } else {
            alert("Некорректно введено! Попробуйте еще раз");
        }

}while(i<2);

appData.moneyPerDay = appData.budget/30;

alert("Ваш бюджет на 1 день: " + (appData.moneyPerDay));

if (appData.moneyPerDay < 100){
    console.log("Small");
} else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
    console.log("Medium");
} else if (appData.moneyPerDay > 2000){
    console.log("Big");
} else {
    console.log("Mistake!");
}

}