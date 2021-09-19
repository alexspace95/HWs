/*
4 Пользователь вводит строку с некоторым количеством круглых скобок. Проверить, 
верно ли расставлены скобки в этой строке.
*/

const str = prompt('Enter text');
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
if (count < 0) {
    alert('illegal!')
    break;
}
if (count === 0) {
    alert('OK!')
}