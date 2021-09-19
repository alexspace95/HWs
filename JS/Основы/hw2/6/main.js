/*
6 Пользователь вводит число K.  Вывести K-е число Фибоначчи.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 
1597, 2584, 4181, 6765, 10946, 17711,
*/

const k = (Number(prompt("Enter your number")));
let a = 0;
let b = 1;
let c = a + b;
for (let i = 1; i <= k; i++) {
    c = a + b;
    a = b;
    b = c;
}
document.write(c - a);