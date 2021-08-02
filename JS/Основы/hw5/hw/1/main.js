/*
1.Написать функцию, которая принимает массив объектов и название ключа, 
по которому нужно его отсортировать. Вернёт новый массив с отсортированными 
объектами. Вывести вместе старый и новый массивы.
*/

let Arr = [];
for (i = 0; i < 10; i++) {
    Arr.push({
        x: Math.round(Math.random() * 100),
        y: Math.round(Math.random() * 100),
        r: Math.ceil(Math.random() * 100),
    })
}
const cloneArr = Arr;
const N = Number(prompt('Enter the key,where 1 = r, 2 = x, 3 = y'));

const compareFunctionR = function(a, b) {
    if (a.r > b.r) {
        return -1;
    }
    if (a.r < b.r) {
        return 1;
    }
    return 0;
};

const compareFunctionX = function(a, b) {
    if (a.x > b.x) {
        return -1;
    }
    if (a.x < b.x) {
        return 1;
    }
    return 0;
};

const compareFunctionY = function(a, b) {
    if (a.y > b.y) {
        return -1;
    }
    if (a.y < b.y) {
        return 1;
    }
    return 0;
};

switch (N) {
    case 1:
        console.log(cloneArr);
        Arr.sort(compareFunctionR);
        console.log(Arr);
        break;
    case 2:
        console.log(cloneArr);
        Arr.sort(compareFunctionX);
        console.log(Arr);
        break;
    case 3:
        console.log(cloneArr);
        Arr.sort(compareFunctionY);
        console.log(Arr);
        break;
}