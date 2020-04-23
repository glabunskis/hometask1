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

let ans1 = prompt("Введите обязательную статью расходов в этом месяце", "Нету");
let ans2 = prompt("Во сколько обойдется?","0");

expenses = {
    ans1 : ans2
};

alert("Ващ бюджет на 1 день: " + (money - ans2)/30);

}
