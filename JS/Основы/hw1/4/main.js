/*
HWs

4 Ввести число байт (1 <= N <= 2 ** 41). Вывести это число как количество байт, килобайт, 
мегабайт, гигабайт (1 <= R < 1024). Например, 119484 байт = 116.684 Кб

*/


const A = Number(prompt('Введите число байт : '));
const GB = (Math.floor(A / 1024 ** 3));
const OGB = (A - (1024 ** 3) * GB);
const MB = (Math.floor(OGB / (1024 ** 2)));
const OMB = (OGB - (MB * (1024 ** 2)));
const KB = (Math.floor(OMB / 1024));
const B = (OMB - (KB * 1024));
console.log(GB + 'Гб ' + MB + 'Мб ' + KB + 'кб ' + B + 'б ');