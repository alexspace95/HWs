/*
2 Пользователь вводит число. Определить и вывести, является ли число простым или составным.
a – простое, если при его делении на любое число кроме 1 и i есть остаток.
*/

const a = Number(prompt('Введите число'))
let b = 0;
for (let i = 2; i <= a; i++) {
    if (a % i == 0) {
        b++;
    }
}
switch (b) {
    case 1:
        document.write(a + ' - Простое число')
        break;
    default:
        document.write(a + ' - Составное число ')
        break;
}