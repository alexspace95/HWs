/*
4 Пользователь вводит строку с некоторым количеством круглых скобок. Проверить, 
верно ли расставлены скобки в этой строке.
*/

let str = prompt('Enter text');
let count = 0;
for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
        case ('('):
            count++;
            break;
        case (')'):
            count--;
            break;
    }
}
let res = 0;
if (count == 0) {
    document.write('Количество скобок верно ');
    res = res + 2;
}
if ((str.indexOf('(')) > (str.indexOf(')'))) {
    res = res + 1;
}
if (count !== 0) {
    document.write('Количество скобок неверно');
}
if ((str.indexOf('(')) < (str.indexOf(')'))) {
    res = res + 2;
}
if (res == 4) {
    document.write('<br/>' + 'Скобки установлены верно!!!')
}
if (res != 4) {
    document.write('<br/>' + 'Скобки установлены неверно!!!')
}