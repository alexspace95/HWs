

/*

HW

1 Пользователь вводит строку с текстом. Посчитать и вывести на экран количество согласных, 
гласных букв(латинских) в тексте, а также не-букв.

2 Пользователь вводит число. Определить и вывести, является ли число простым или составным.

3 Пользователь вводит числа x, N. Вывести результат вычисления ряда Тейлора для разложения функции 
e^x по первым N членам.
e^x = 1+x+((x^2)/(2!))+((x^3)/(3!))+...

const x=Number(prompt('Enter x'));
const n=Number(prompt('Enter n'));
let A;
let res = 0;
switch (n){
    case 0:
        A=0;
        break;
    default:
        res=x;
        A=1;
        for(i = 2; i <= n; i++){
            A=A*i
            res=(res+((x**i)/A))
        }
}
let result = 1+res;
document.write('Result = ' + result);



4 Пользователь вводит строку с некоторым количеством круглых скобок. Проверить, 
верно ли расставлены скобки в этой строке.

let str = prompt('Enter text');
let count = 0;
for (let i = 0; i < str.length; i++) {
    switch (str[i]){
        case ('('): 
        count++;
        break;
        case (')'): 
        count--;
        break;  
    }
}
let res = 0;
    if (count==0){
    document.write('Количество скобок верно ');
    res = res+2;
}   
    if ((str.indexOf('('))>(str.indexOf(')'))){
    res = res+1;
}
    if(count!==0){
    document.write('Количество скобок неверно');
}
    if ((str.indexOf('('))<(str.indexOf(')'))){
    res = res+2;
}
    if (res==4){
    document.write('<br/>'+'Скобки установлены верно!!!')
}   
    if (res!=4){
    document.write('<br/>'+'Скобки установлены неверно!!!')
}



5 Пользователь вводит с клавиатуры число, знак арифметической операции и ещё одно число. 
Вывести результат введенной операции с введенными числами.

const A = (Number(prompt('Enter first number')));
const symbol = (prompt('Enter symbol '));
const B = (Number(prompt('Enter second number')));
let result;
switch (symbol){
    case ('+'):
        result = A+B;
        console.log('result = ' + result);
        break;
    case ('-'):
        result = A-B;
        console.log('result = ' + result);
        break;
    case ('*'):
        result = A*B;
        console.log('result = ' + result);
        break;
    case ('/'):
        result = A/B;
        console.log('result = ' + result);
        break;
}



6 Пользователь вводит число K.  Вывести K-е число Фибоначчи.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 
1597, 2584, 4181, 6765, 10946, 17711,

const k = (Number(prompt("Enter your number")));
let a=0;
let b=1;
let c = a+b;
for (let i=1 ;i <= k;i++){
    let c = a+b;
    a=b;
    b=c;    
    if(i<k){     
    continue;
    }
    document.write(c-a); 
}



7 Пользователь вводит кол-во секунд (не больше 86 399). 
Вывести отформатированное значение: часы:минуты:секунды. 
Например, 47843 = 13:17:23

let time = (Number(prompt('Enter count of second')));
let Hour = (Math.floor(time / 3600)); 
let OMin = (time - (3600 * Hour));
let Min = (Math.floor(OMin / 60)); 
let Sec = (OMin - (60 * Min));
console.log(Hour + ':' + Min + ':' + Sec);



8 Пользователь вводит строку. Вывести строку, которая состоит из первых букв 
каждого слова в введенной строке.

1)пользователь вводит текст - строку 
2)выводим цикл: 
    -выводим первый символ из строки
    - сравниваем символ с ' ',
        -если не совпадает - пропускаем 
        -если совпадает - номер символа +1 - выводимэтот символ и начинаем цикл сначала  


const str = (String(prompt('Enter your text')));
document.write(str[0]);
for(i=0;i<str.length;i++){
    if(str[i] ===' '){
    i++
    document.write(str[i])
    continue;
    }
}

*/

