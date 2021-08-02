//5) Проверка простоты введенного числа

function isPrimeNumber() {
    const N = Number(prompt('Enter number'));
    let count = 0;
    for (let i = 1; i < N; i++) {
        if (N % i === 0) {
            count++;
        }
    }
    if (count > 1) {
        return document.write('Число ' + N + ' - составное');
    }
    if (count === 1) {
        return document.write('Число ' + N + ' - простое');
    }
    if (count < 1) {
        return document.write(N + ' - не простое и не составное число');
    }
}
isPrimeNumber();