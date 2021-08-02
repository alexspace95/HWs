/*
q1
Создать объект Банковский счет. У него есть номер,дата открытия,баланс и методкоторый принимает 
в себя числа (любое число аргументов)и добавляет их на баланс
1) Создать две переменные, которые деструктурируют счет - номер и дата открытия.
Вынести их в консолью
2) Отправить в метод увеличение баланса число. Вынести баланс в консоль.
3) Создать массив из пяти чисел. Отпарвить этот массив в деструрированном виде
в метод увеличения баланса. Вынести баланс в консоль
*/

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