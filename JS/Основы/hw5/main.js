/*
q0

function isEven() {
    const N = Number(prompt('Enter number'));
    return console.log(N % 3 === 0);
}
isEven()
*/

/*
q1
Создать объект Банковский счет. У него есть номер,дата открытия,баланс и методкоторый принимает 
в себя числа (любое число аргументов)и добавляет их на баланс
1) Создать две переменные, которые деструктурируют счет - номер и дата открытия.
Вынести их в консолью
2) Отправить в метод увеличение баланса число. Вынести баланс в консоль.
3) Создать массив из пяти чисел. Отпарвить этот массив в деструрированном виде
в метод увеличения баланса. Вынести баланс в консоль

const BankAccount = {
    AccountNumber: M = (Math.ceil(Math.random() * 1000)),
    DateofOpenning: d = function getTime() {
        return ((new Date((Math.ceil(Math.random() * 100) + 1900), (Math.ceil(Math.random() * 12)), (Math.ceil(Math.random() * 28)))).toLocaleDateString())
    },
    Method: getMethod = (...args) => console.log(`Ваш баланс равен : ${ args.reduce((sum, curr) => sum + curr, 0)}`),
    SecondMethod: NaD = function printNaD() {
        return console.log((M), d());
    }
};
const arr = [2, 5, 12, 6, 32];
const Arr = {
    a: arr[0],
    b: arr[1],
    c: arr[2],
    d: arr[3],
    e: arr[4]
};
BankAccount.SecondMethod();
BankAccount.Method(Arr.a, Arr.b, Arr.c, Arr.d, Arr.e);
*/


/* 
q2

let Arr = [];
for (i = 0; i < 100; i++) {
    Arr.push({
        x: Math.round(Math.random() * 100),
        y: Math.round(Math.random() * 100),
        r: Math.ceil(Math.random() * 100),
    })
}

const compareFunction = function(a, b) {
    if (a.r > b.r) {
        return -1;
    }
    if (a.r < b.r) {
        return 1;
    }
    return 0;
};
Arr.sort(compareFunction);
console.log(Arr);
console.log(Arr.slice([0], [10]));
*/

/*
q3

const N = prompt('Enter number');
const exp = /[1-2][0-6][0][\d][\d][0-35-9]/;
if (N.match(exp) !== null) {
    document.write(N.match(exp) + '<br/>');
}
document.write(exp.test(N));
*/

/*
q4

const N = prompt('Enter your E-mail');
const exp = /\S+[@][a-z]+[.][a-z]{2,4}$/;
if (N.match(exp) !== null) {
    document.write(N.match(exp) + '<br/>');
}
document.write(exp.test(N));
*/

/*
console.log(window.alert);
console.log(window.prompt);
console.log(window.Math);
console.log(window.window);
*/

/*
HW

1.Написать функцию, которая принимает массив объектов и название ключа, 
по которому нужно его отсортировать. Вернёт новый массив с отсортированными 
объектами. Вывести вместе старый и новый массивы.


let Arr = [];
for (i = 0; i < 10; i++) {
    Arr.push({
        x: Math.round(Math.random() * 100),
        y: Math.round(Math.random() * 100),
        r: Math.ceil(Math.random() * 100),
    })
}
const cloneArr = Arr;
const N = Number(prompt('Enter the key,where 1 = r, 2 = x, 3 = y'));

const compareFunctionR = function(a, b) {
    if (a.r > b.r) {
        return -1;
    }
    if (a.r < b.r) {
        return 1;
    }
    return 0;
};

const compareFunctionX = function(a, b) {
    if (a.x > b.x) {
        return -1;
    }
    if (a.x < b.x) {
        return 1;
    }
    return 0;
};

const compareFunctionY = function(a, b) {
    if (a.y > b.y) {
        return -1;
    }
    if (a.y < b.y) {
        return 1;
    }
    return 0;
};

switch (N) {
    case 1:
        console.log(cloneArr);
        Arr.sort(compareFunctionR);
        console.log(Arr);
        break;
    case 2:
        console.log(cloneArr);
        Arr.sort(compareFunctionX);
        console.log(Arr);
        break;
    case 3:
        console.log(cloneArr);
        Arr.sort(compareFunctionY);
        console.log(Arr);
        break;
}

2.Найти во введённом тексте все американские номера телефонов (+1). 
В номере цифры могут разделяться внутри дефисами.


const N = prompt('Enter your number');
const exp = /[+][1][\d, ,-]{10,14}/;
document.write(N.match(exp) + '<br/>');
if (N.match(exp) !== null) {
    document.write(exp.test(N));
}

Стандарт нумерации телефонов США приведен к международной системе. Каждый номер начинается с +1 
– это так называемый «код страны», аналогичный российскому +7. Помимо США, этот код использует 
Канада и большинство стран Карибского бассейна.
Следом идет код территории – трехзначный номер, начинающийся с цифр от 2 до 9. Например, 202 – 
код столицы США, города Вашингтон, а 302 – код штата Делавэр. За ним – сервисный код такого же 
формата, определяющий конкретного оператора.
После трех кодов следует непосредственно номер абонента – четыре цифры из диапазона 0000 – 9999.
Таким образом, полный номер абонента имеет 11 знаков, но для внутренних звонков чаще используются 
сокращенные десятизначные варианты (без кода страны), либо семизначные (внутри кода территории). 
Полные номера, как правило, записываются в формате +1 (XXX) XXX-XXXX, или 1-XXX-XXX-XXXX.
+1 800-469-92-69

3.Написать скрипт, который выведет домен 1-го уровня той страницы, 
на которой запущен.

const N = prompt('Enter your site from www.');
const exp = /[w]{3}[.].+[.][\w]{2,3}/;
const exp2 = /[.]\w{2,3}$/;
const N2 = String(N.match(exp));
document.write(N2.match(exp2) + '<br/>');

4.Вывести в консоль количество квадратов 60*60 пикселей, которые полностью 
поместятся в области просмотра страницы в виде сетки.

const PxH = Math.floor(window.screen.height / 60);
const PxW = Math.floor(window.screen.width / 60);
const countofsquare = PxH * PxW;
console.log(`${PxH} x ${PxW} = ${countofsquare}`);
*/


let Arr = [];
for (i = 0; i < 10; i++) {
    Arr.push({
        x: Math.round(Math.random() * 100),
        y: Math.round(Math.random() * 100),
        r: Math.ceil(Math.random() * 100),
    })
}
const cloneArr = Arr;
const N = Number(prompt('Enter the key,where 1 = r, 2 = x, 3 = y'));

const compareFunctionR = function(a, b) {
    if (a.r > b.r) {
        return -1;
    }
    if (a.r < b.r) {
        return 1;
    }
    return 0;
};

const compareFunctionX = function(a, b) {
    if (a.x > b.x) {
        return -1;
    }
    if (a.x < b.x) {
        return 1;
    }
    return 0;
};

const compareFunctionY = function(a, b) {
    if (a.y > b.y) {
        return -1;
    }
    if (a.y < b.y) {
        return 1;
    }
    return 0;
};

switch (N) {
    case 1:
        console.log(cloneArr);
        Arr.sort(compareFunctionR);
        console.log(Arr);
        break;
    case 2:
        console.log(cloneArr);
        Arr.sort(compareFunctionX);
        console.log(Arr);
        break;
    case 3:
        console.log(cloneArr);
        Arr.sort(compareFunctionY);
        console.log(Arr);
        break;
}