/*
Пользователь вводит кол-во секунд (не больше 86 399). 
Вывести отформатированное значение: часы:минуты:секунды. 
Например, 47843 = 13:17:23
*/

let time = (Number(prompt('Enter count of second')));
let Hour = (Math.floor(time / 3600));
let OMin = (time - (3600 * Hour));
let Min = (Math.floor(OMin / 60));
let Sec = (OMin - (60 * Min));
console.log(Hour + ':' + Min + ':' + Sec);