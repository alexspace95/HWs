/*
HWs

5 Пользователь вводит 3 числа. Вычислить площадь треугольника с такими сторонами (формула Герона)
S=sqrt(p*(p-a)*(p-b)*(p-c))

*/


const A = Number(prompt('Enter A'));
const B = Number(prompt('Enter B'));
const C = Number(prompt('Enter C'));
if ((A < 0) || (B < 0) || (C < 0)) {
    console.log('Такого треугольника не существует');
}
if ((A + B <= C) || (B + C <= A) || (A + C <= B)) {
    console.log('Такого треугольника не существует');
} else {
    let p = (Number((A + B + C) / 2));
    let S = (Number(Math.sqrt(p * (p - A) * (p - B) * (p - C))));
    console.log('S = ' + S);
}