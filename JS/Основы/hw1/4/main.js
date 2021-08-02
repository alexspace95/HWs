/*
HWs

4 Ввести число байт (1 <= N <= 2 ** 41). Вывести это число как количество байт, килобайт, 
мегабайт, гигабайт (1 <= R < 1024). Например, 119484 байт = 116.684 Кб

*/


const A = Number(prompt('Введите число байт : '));
let GB = (Math.floor(A / 1024 ** 3));
let OGB = (A - (1024 ** 3) * GB);
let MB = (Math.floor(OGB / (1024 ** 2)));
let OMB = (OGB - (MB * (1024 ** 2)));
let KB = (Math.floor(OMB / 1024));
let B = (OMB - (KB * 1024));
console.log(GB + 'Гб ' + MB + 'Мб ' + KB + 'кб ' + B + 'б ');