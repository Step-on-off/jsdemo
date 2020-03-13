

let money = prompt("Средний бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");



let appData = {
	    budget: money,
	    expenses: {},
	    optionalExpenses: {},
	    income: [],
	    timeData: time,
	    savings: false
};

let i1name = prompt("Введите обязательную статью расходов в этом месяце"),
    i1amount = prompt("Во сколько обойдется?"),
    i2name = prompt("Введите обязательную статью расходов в этом месяце"),
    i2amount = prompt("Во сколько обойдется?");


appData.expenses[i1name] = i1amount;
appData.expenses[i2name] = i2amount;

alert(appData.budget / 30);


//console.log(appData.budget);
//console.log(appData.timeData);

