/*
3. Создать массив из объектов-людей. 
Количество людей вводится с клавиатуры. 
Каждому задать случайную дату рождения от 1 января 1980 до 31 декабря 1995 (в виде объекта Date), 
имя, 
а также зарплату (от 0 до 500). 
Имена выбираются случайно из другого массива имён. 
Количество людей вводится с клавиатуры. 
Вывести всех людей в консоль, 
вывести средний возраст людей и имя человека с самой большой зарплатой в списке.
*/

const names = ['Alex', 'Den', 'Max', 'Oleg', 'Shon', 'Sir', 'Doc', 'Enri', 'Big', 'Tank'];
const N = prompt('Enter N');
const Arr0 = [];
let date = 0;
for (let i = 0; i < N; i++) {
    const pers = {
        DoB: d = new Date((1980 + (Math.floor(Math.random() * 16))),
            (0 + (Math.round(Math.random() * 12))),
            (1 + (Math.round(Math.random() * 31)))),
        name: names[Math.floor((Math.random()) * 10)],
        salary: (Math.round(Math.random() * 500))
    }
    Arr0.push(pers);
    const d2 = new Date(Arr0[i].DoB);
    const d0 = new Date();
    date = date + (Math.floor((d0 - d2) / (3600000 * 24 * 365)));
}
let maxsalary = 0;
let maxname = 0;
for (i = 0; i < N; i++) {
    if (maxsalary < Arr0[i].salary) {
        maxsalary = (Arr0[i].salary);
        maxname = (Arr0[i].name);
    }
}
console.log(Arr0);
console.log('Средний возраст : ' + (date / N));
console.log('max salary = ' + maxsalary + '$' + ' have ' + maxname);