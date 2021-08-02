/*  
2. Вывести в консоль или в окно количество минут,
которое осталось до конца того дня, в котором запущен скрипт
*/

const numM = 1000 * 60;
const numH = 1000 * 60 * 60;
const numD = 1000 * 60 * 60 * 24;
const d1 = Date.now();
const d2 = d1 + numD;
const d3 = Math.floor(d2 / numD);
const d4 = d3 * numD;
const d5 = d4 - d1 - (3 * numH);
console.log('Осталось минут до конца дня : ' + Math.round(d5 / numM));