/*

        **HW**

    1.Создать следующие функции:
1)Вычисление суммы всех аргументов

function getSum() {
    const N = Number(prompt('Enter N'));
    const Arr = [];
    for (let i = 0; i < N; i++) {
        Arr.push(Number(prompt('Enter argement #' + (i + 1))));
    }
    return console.log(Arr.reduce((point, result) => point + result, 0));
}
getSum();

2)Получение случайного числа в заданном диапазоне

function getNumberInLimits() {
    const Min = Number(prompt('Enter min'));
    const Max = Number(prompt('Enter max'));
    return console.log((Math.random() * (Max - Min)) + Min);
}
getNumberInLimits();

3)Расстояние между двумя объектами-точками

function getPointsDistance() {
    const Object1 = {
        CoordX: x1 = Number(prompt('Enter Xa')),
        CoordY: y1 = Number(prompt('Enter Ya')),
        CoordZ: z1 = Number(prompt('Enter Za'))
    }
    const Object2 = {
        CoordX: x2 = Number(prompt('Enter Xb')),
        CoordY: y2 = Number(prompt('Enter Yb')),
        CoordZ: z2 = Number(prompt('Enter Zb'))
    }
    const AB = (((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2) ** (1 / 2));
    return document.write('Расстояние от точки А(' + x1 + ',' + y1 + ',' + z1 + ') и точки B(' + x2 + ',' + y2 + ',' + z2 + ') = ' + AB);
}
getPointsDistance();

4)Генерацию случайного цвета в формате RGB()

function getRandomColor() {
    const RGB = [];
    for (let i = 0; i < 3; i++) {
        let color = Math.round(Math.random() * 255);
        RGB.push(color);
    }
    return document.write('Red : ' + RGB[0] + '<br/>' + 'Green :' + RGB[1] + '<br/>' + 'Blue : ' + RGB[2] + '<br/>');
}
getRandomColor();

5)Проверка простоты введенного числа

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

    2.Решить задачу на моделирование данных
1)Создать объект Дом. В этом объекте – адрес дома, год постройки,
количество этажей и массив квартир.
2)Каждая квартира (объект) содержит число комнат, число жильцов,
общую площадь и номер этажа, а также номер самой квартиры.
3)У каждой квартиры есть метод, принимающий номер месяца и
возвращающий размер коммунальных услуг по формуле:
(коэффициент месяца * жилплощадь * кол-во живущих человек / 2).
Коэффициент месяца равен 1 для апреля-октября и 1.8 для остальных месяцев.
4)Добавить в объект Дом методы:
   Вычисление суммарной жилой площади дома
   Вычисление населения дома
   Вычисление суммарного годового обслуживания всех квартир в доме 
(коммуналка по всем месяцам)
   Среднюю плотность населения (сколько кв.метров приходится в среднем 
на одного жильца в доме)
   Написать скрипт, демонстрирующий все методы из списка выше. 
Вывести сам объект дома в консоль. Можно заполнять случайным образом.


const DOM = {
    Address: 'Minsk, Independence Avenue',
    Year: y = Math.round(Math.random() * 50 + 1970),
    Floors: Math.round(Math.random() * 2 + 1),
    Flats: FlatsArr = [],
    Flat: function getFlats() {
        return console.log(DOM.Flats);
    },
    Utilities: function getUtilitiesofFlat(a) {
        let k = 0;
        let M = Number(prompt('Enter the number of Month from 1 to 12'));
        if ((M > 3) && (M < 11)) {
            k = 1;
        } else {
            k = 1.8;
        }
        let Utilities = k * (this.Flats[a - 1].Square) * ((this.Flats[a - 1].CountofLivers) / 2);
        return console.log(Utilities);
    },
    FullSquare: function getSquareOfFlats() {
        let count = 0;
        for (i = 0; i < (DOM.Floors * 4); i++) {
            count = count + (this.Flats[i].Square);
        }
        return console.log(count);
    },
    FullPopulation: function getPopulationOfFlats() {
        let count = 0;
        for (i = 0; i < (DOM.Floors * 4); i++) {
            count = count + (this.Flats[i].CountofLivers);
        }
        return console.log(count);
    },
    FullUtilities: function getUtilitiesOfFlats() {
        let count = 0;
        let UtilitiesOfFlats = 0;
        let k = 1 * 7 + 1.8 * 5;
        for (i = 0; i < (DOM.Floors * 4); i++) {
            UtilitiesOfFlats = k * (this.Flats[i].Square) * ((this.Flats[i].CountofLivers) / 2);
            count = count + UtilitiesOfFlats;
        }
        return console.log(count);
    },
    PopulationDensity: function getPopulationDensity() {
        let count1 = 0;
        let count2 = 0;
        for (i = 0; i < (DOM.Floors * 4); i++) {
            count1 = count1 + (this.Flats[i].CountofLivers);
        }
        for (i = 0; i < (DOM.Floors * 4); i++) {
            count2 = count2 + (this.Flats[i].Square);
        }
        return console.log(count2 / count1);
    },
}
for (let i = 1; i < ((DOM.Floors) * 4 + 1); i++) {
    Flat = {
        CountofRooms: R = Math.round(Math.random() * 3 + 1),
        CountofLivers: Math.round((Math.random() * 2) + R),
        Square: ((Math.round(Math.random() * 8 + 12)) * R + 12),
    }
    Flat.FlatNumber = i;
    Flat.FloorofFlat = Math.ceil(i / 4);
    FlatsArr.push(Flat);
}

document.write('Все методы : ' + '<br/>' + 'DOM.Flat( ) - Массив из квартир' + '<br/>' +
    'DOM.Utilities( # ) - Коммуналка #-й квартиры' + '<br/>' +
    'DOM.FullSquare( ) - Общая площадь всех квартир в доме' + '<br/>' +
    'DOM.FullPopulation( ) - Общее население дома' + '<br/>' +
    'DOM.FullUtilities( ) - Стоимость обслуживания всех квартир за год ' + '<br/>' +
    'DOM.PopulationDensity( ) - Плотность населения(кв метров на жильца)' + '<br/>')

console.log(DOM);
*/







/*
DOM.Flat() - массив из квартир 
DOM.Utilities(1) - коммуналка 1-й квартиры
DOM.FullSquare() - общая площадь всех квартир в доме 
DOM.FullPopulation() - общее население дома
DOM.FullUtilities() - Стоимость обслуживания всех квартир за год 
DOM.PopulationDensity() - плотность населения(кв метров на жильца)


DOM.Floors - количество этажей
DOM.Flats[2].Square - площадь [2] квартиры

*/