/*
1 Пользователь вводит строку с текстом. Посчитать и вывести на экран количество согласных, 
гласных букв(латинских) в тексте, а также не-букв.
*/

const str = (String(prompt('Enter your text'))).toLowerCase();
let gl = 0;
let sogl = 0;
for (i = 0; i < str.length; i++) {
    if ('aeiou'.includes(str[i])) {
        gl++;
    }
    if ('qwrtypsdfghjklzxcvbnm'.includes(str[i])) {
        sogl++
    }
}

document.write(' gl = ' + gl + '<br/>' + ' sogl = ' + sogl)