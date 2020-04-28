
'use strict';

let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "0");
    time = prompt("Введите дату в формате YYYY-MM-DD", "1970-01-01");

    while((isNaN(money) == true) || money == '' || money == null){
        money = +prompt("Ваш бюджет на месяц?", "0");
    }
}

start();

let appData ={
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    };



let i = 0;

function chooseExpenses(){
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
}

chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Ваш бюджет на 1 день: " + (appData.moneyPerDay));
}

detectDayBudget();


function detectLevel(){
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

function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("Сумма накоплений?", ''),
            percent = +prompt("Какой процент?", '');

        appData.monthIncome = save/100/12*percent;
        alert("Ежемесячный доход: " + appData.monthIncome);

    }
}

checkSavings();

function chooseOptExpenses(){
    let opExp;
    for(let i = 0; i < 3; i++){
        opExp = prompt("Введите статью необязательных расходов");
        appData.optionalExpenses[i+1] = opExp;
    }
}

chooseOptExpenses();

