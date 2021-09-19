/*
5 Пользователь вводит с клавиатуры число, знак арифметической операции и ещё одно число. 
Вывести результат введенной операции с введенными числами.
*/

const A = (Number(prompt('Enter first number')));
const symbol = (prompt('Enter symbol '));
const B = (Number(prompt('Enter second number')));
let result;
switch (symbol) {
    case ('+'):
        result = A + B;

        break;
    case ('-'):
        result = A - B;
        break;
    case ('*'):
        result = A * B;
        break;
    case ('/'):
        result = A / B;
        break;
}
console.log('result = ' + result);