/*
3 Пользователь вводит числа x, N. Вывести результат вычисления ряда Тейлора для разложения функции 
e^x по первым N членам.
e^x = 1+x+((x^2)/(2!))+((x^3)/(3!))+...
*/
const x = Number(prompt('Enter x'));
const n = Number(prompt('Enter n'));
let A;
let res = 0;
switch (n) {
    case 0:
        A = 0;
        break;
    default:
        res = x;
        A = 1;
        for (i = 2; i <= n; i++) {
            A = A * i
            res = (res + ((x ** i) / A))
        }
}
let result = 1 + res;
document.write('Result = ' + result);