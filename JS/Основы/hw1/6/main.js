/*
HWs
6 Пользователь вводит номер года. Определить, является ли этот год високосным.

*/


const A = Number(prompt('Enter the year'));
if (A % 4 === 0) {
    if (A % 100 === 0) {
        console.log('Год не високосный')
    } else {
        console.log('Год високосный')
    }
} else {
    console.log('Год не високосный')
}