
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
        savings: true,

        chooseExpenses: function() {
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
        },

        detectDayBudget: function() {
            appData.moneyPerDay = (appData.budget/30).toFixed();
            alert("Ваш бюджет на 1 день: " + (appData.moneyPerDay));
        },

        detectLevel: function() {
            if (appData.moneyPerDay < 100){
                console.log("Small");
            } else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
                console.log("Medium");
            } else if (appData.moneyPerDay > 2000){
                console.log("Big");
            } else {
                console.log("Mistake!");
            }
        },

        checkSavings: function() {
            if(appData.savings == true){
                let save = +prompt("Сумма накоплений?", ''),
                    percent = +prompt("Какой процент?", '');
        
                appData.monthIncome = save/100/12*percent;
                alert("Ежемесячный доход: " + appData.monthIncome);
        
            }
        },

        chooseOptExpenses: function() {
            let opExp;
            for(let i = 0; i < 3; i++){
                opExp = prompt("Введите статью необязательных расходов");
                appData.optionalExpenses[i+1] = opExp;
            }
        },

        chooseIncome: function(){
            let items = prompt("Что принесет доп доход? (перечислите через запятую", "");

            while(        
                       (typeof(items)) != 'string' 
                    || (typeof(items)) == null 
                    || items == ""
                    ){
                        alert("Неправильно введены данные!");
                        items = "";
                        items = prompt("Что принесет доп доход? (перечислите через запятую", "");
                    }
            appData.income = items.split(", ");
            let ite = prompt("Что-то еще?", "");
            if(        (typeof(ite)) === 'string' 
                    && (typeof(ite)) != null 
                    && ite != ""
            ){
            appData.income.push(ite);
            }
        

        let str = "Список доходов: \n";

        appData.income.forEach(function(item,i) {
            str = str + (++i) + ") "  + item + "\n";
            });
        alert(str);
        } 
    };

    appData.chooseIncome();

    let str1 = "Наша программа включает в себя данные: \n";

    for (let items in appData){
        str1 += "- " + items + "\n";
    }

    alert(str1);




