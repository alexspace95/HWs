/* 
1. Пользователь вводит строку.
Найти и вывести самое длинное слово в этой строке. 
Вывести количество гласных (латинских) в этой строке (прописных и строчных вместе)
*/


const str = (String(prompt('Enter your string'))).toLowerCase();
const words = str.split(' ');
console.log(words);

let longestName = '';
for (let i = 0; i < words.length; i++) {
    if (longestName.length < words[i].length) {
        longestName = words[i];
    }
}
console.log('longest word = ' + longestName);

let a = 0;
for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
        if ('aeoiu'.includes(words[i][j])) {
            a++;
        }
    }
}
console.log('count of vawels = ' + a);