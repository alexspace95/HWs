/*
4.Вывести в консоль количество квадратов 60*60 пикселей, которые полностью 
поместятся в области просмотра страницы в виде сетки.
*/
const PxH = Math.floor(window.screen.height / 60);
const PxW = Math.floor(window.screen.width / 60);
const countofsquare = PxH * PxW;
console.log(`${PxH} x ${PxW} = ${countofsquare}`);