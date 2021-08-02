/*
1.Создать следующие функции:
1)Вычисление суммы всех аргументов
*/

function getSum() {
    const N = Number(prompt('Enter N'));
    const Arr = [];
    for (let i = 0; i < N; i++) {
        Arr.push(Number(prompt('Enter argement #' + (i + 1))));
    }
    return console.log(Arr.reduce((point, result) => point + result, 0));
}
getSum();