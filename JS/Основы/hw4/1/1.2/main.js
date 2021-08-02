///2)Получение случайного числа в заданном диапазоне

function getNumberInLimits() {
    const Min = Number(prompt('Enter min'));
    const Max = Number(prompt('Enter max'));
    return console.log((Math.random() * (Max - Min)) + Min);
}
getNumberInLimits();