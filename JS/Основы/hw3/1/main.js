/* 
1. Пользователь вводит строку.
Найти и вывести самое длинное слово в этой строке. 
Вывести количество гласных (латинских) в этой строке (прописных и строчных вместе)
*/


const str = String(prompt('Enter your string'));
const str1 = str.split(' ');
console.log(str1);

let longestName = '';
for (let i = 0; i < str1.length; i++) {
    if (longestName.length < str1[i].length) {
        longestName = str1[i];
    }
}
console.log('longest word = ' + longestName);

const str2 = str.toLowerCase();
const str3 = str2.split(' ');
console.log(str3);
let a = 0;
for (let i = 0; i < str3.length; i++) {
    for (let j = 0; j < str3[i].length; j++) {
        if (str3[i][j] == 'a') {
            a++;
        }
        if (str3[i][j] == 'e') {
            a++;
        }
        if (str3[i][j] == 'u') {
            a++;
        }
        if (str3[i][j] == 'o') {
            a++;
        }
        if (str3[i][j] == 'i') {
            a++;
        }
    }
}
console.log('count of vawels = ' + a);