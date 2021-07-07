/*  
   HWs


1. Пользователь вводит строку.
Найти и вывести самое длинное слово в этой строке. 
Вывести количество гласных (латинских) в этой строке (прописных и строчных вместе)


const str = String(prompt('Enter your string'));
const str1 = str.split(' ');
console.log(str1);

let longestName = '';
for (let i = 0; i < str1.length; i++) {
    if (longestName.length < str1[i].length) {
        longestName = str1[i];
    }
}
console.log('longest word = ' + longestName);

const str2 = str.toLowerCase();
const str3 = str2.split(' ');
console.log(str3);
let a = 0;
for (let i = 0; i < str3.length; i++) {
    for (let j = 0; j < str3[i].length; j++) {
        if (str3[i][j] == 'a') {
            a++;
        }
        if (str3[i][j] == 'e') {
            a++;
        }
        if (str3[i][j] == 'u') {
            a++;
        }
        if (str3[i][j] == 'o') {
            a++;
        }
        if (str3[i][j] == 'i') {
            a++;
        }
    }
}
console.log('count of vawels = ' + a);




2. Вывести в консоль или в окно количество минут,
которое осталось до конца того дня, в котором запущен скрипт


const numM = 1000 * 60;
const numH = 1000 * 60 * 60;
const numD = 1000 * 60 * 60 * 24;
const d1 = Date.now();
const d2 = d1 + numD;
const d3 = Math.floor(d2 / numD);
const d4 = d3 * numD;
const d5 = d4 - d1 - (3 * numH);
console.log('Осталось минут до конца дня : ' + Math.round(d5 / numM));




3. Создать массив из объектов-людей. 
Количество людей вводится с клавиатуры. 
Каждому задать случайную дату рождения от 1 января 1980 до 31 декабря 1995 (в виде объекта Date), 
имя, 
а также зарплату (от 0 до 500). 
Имена выбираются случайно из другого массива имён. 
Количество людей вводится с клавиатуры. 
Вывести всех людей в консоль, 
вывести средний возраст людей и имя человека с самой большой зарплатой в списке.


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

*/