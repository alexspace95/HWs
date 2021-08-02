/*
3.Написать скрипт, который выведет домен 1-го уровня той страницы, 
на которой запущен.
*/

const N = prompt('Enter your site from www.');
const exp = /[w]{3}[.].+[.][\w]{2,3}/;
const exp2 = /[.]\w{2,3}$/;
const N2 = String(N.match(exp));
document.write(N2.match(exp2) + '<br/>');