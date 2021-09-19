/*  
2. Вывести в консоль или в окно количество минут,
которое осталось до конца того дня, в котором запущен скрипт
*/



const getTimeNow = (new Date());
const getLostMinutes = 1440 - (getTimeNow.getHours() * 60 + getTimeNow.getMinutes());

console.log('Осталось минут до конца дня : ' + getLostMinutes);