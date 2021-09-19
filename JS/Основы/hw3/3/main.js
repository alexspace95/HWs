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

const names = ['Alex', 'Den', 'Max', 'Olbeg', 'Shon', 'Sir', 'Doc', 'Henri', 'Pig', 'Tank'];
const N = Number(prompt('Enter N'));
const listArray = [];
let date = 0;
for (let i = 0; i < N; i++) {

    const birthDay = new Date((1980 + (Math.floor(Math.random() * 16))),
        (0 + (Math.round(Math.random() * 12))),
        (1 + (Math.round(Math.random() * 31))));

    const pers = {
        DoB: birthDay,
        name: names[Math.floor((Math.random()) * 10)],
        salary: (Math.round(Math.random() * 500))
    }
    listArray.push(pers);

    const d2 = (new Date).getFullYear() - (listArray[i].DoB).getFullYear();
    date = date + d2;
}

let max = listArray[0];
for (i = 0; i < N; i++) {
    if (max.salary < listArray[i].salary) {
        max = (listArray[i]);
    }
}
console.log(listArray);
console.log('Средний возраст : ' + (date / N));
console.log('max salary = ' + max.salary + '$' + ' have ' + max.name);