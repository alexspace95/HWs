/*
Пользователь вводит кол-во секунд (не больше 86 399). 
Вывести отформатированное значение: часы:минуты:секунды. 
Например, 47843 = 13:17:23
*/

const time = (Number(prompt('Enter count of second')));
const Hour = (Math.floor(time / 3600));
const OMin = (time - (3600 * Hour));
const Min = (Math.floor(OMin / 60));
const Sec = (OMin - (60 * Min));
console.log(Hour + ':' + Min + ':' + Sec);