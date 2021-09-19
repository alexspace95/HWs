/*
        **HW -4**

    1.Создать следующие функции:
1)Вычисление суммы всех аргументов
*/

function getSum(...points) {
    return points.reduce((point, result) => point + result, 0);
}
console.log(getSum(9, 5, 54));
console.log(getSum(1, 3));
console.log(getSum(2, 3, 4, 6, 7));

// 2) Получение случайного числа в заданном диапазоне

function getNumberInLimits(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(getNumberInLimits(1, 5));


// 3) Расстояние между двумя объектами - точками

function getPointsDistance(x1, y1, z1, x2, y2, z2) {
    if (!z2) {
        throw new Error('No argument provided')
    }
    return ((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2) ** (1 / 2);
}
getPointsDistance(1, 2, 3, 4, 5, 6);

// 4) Генерацию случайного цвета в формате RGB()

function getRandomColor() {
    const RGB = [];
    for (let i = 0; i < 3; i++) {
        let color = Math.round(Math.random() * 255);
        RGB.push(color);
    }
    return RGB;
}
getRandomColor();

// 5) Проверка простоты введенного числа

function isPrimeNumber(N) {
    for (let i = 2; i < N; i++) {
        if (N % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}
isPrimeNumber(9);


// 2. Решить задачу на моделирование данных
// 1) Создать объект Дом.В этом объекте– адрес дома, год постройки,
//     количество этажей и массив квартир.
// 2) Каждая квартира(объект) содержит число комнат, число жильцов,
//     общую площадь и номер этажа, а также номер самой квартиры.
// 3) У каждой квартиры есть метод, принимающий номер месяца и
// возвращающий размер коммунальных услуг по формуле:
//     (коэффициент месяца * жилплощадь * кол - во живущих человек / 2).
// Коэффициент месяца равен 1 для апреля - октября и 1.8 для остальных месяцев.
// 4) Добавить в объект Дом методы:
//     Вычисление суммарной жилой площади дома
// Вычисление населения дома
// Вычисление суммарного годового обслуживания всех квартир в доме
//     (коммуналка по всем месяцам)
// Среднюю плотность населения(сколько кв.метров приходится в среднем на одного жильца в доме)
// Написать скрипт, демонстрирующий все методы из списка выше.
// Вывести сам объект дома в консоль.Можно заполнять случайным образом.


const DOM = {
    address: 'Minsk, Independence Avenue',
    year: Math.round(Math.random() * 50 + 1970),
    floors: Math.round(Math.random() * 2 + 1),
    flats: flatsArr = [],

    getFlats() {
        return this.flats;
    },

    getUtilitiesofFlat: function(a, m) {
        if ((m > 3) && (m < 11)) {
            return (this.flats[a - 1].square) * ((this.flats[a - 1].countofLivers) / 2);
        } else {
            return 1.8 * (this.flats[a - 1].square) * ((this.flats[a - 1].countofLivers) / 2);
        }
    },
    getSquareOfFlats: function() {
        let fullSquare = 0;
        for (i = 0; i < (this.floors * 4); i++) {
            fullSquare += (this.flats[i].square);
        }
        return fullSquare;
    },
    getPopulationOfFlats: function() {
        let count = 0;
        for (i = 0; i < (this.floors * 4); i++) {
            count = count + (this.flats[i].countofLivers);
        }
        return count;
    },
    getUtilitiesOfFlats: function() {
        let count = 0;
        let utilitiesOfFlats = 0;
        let k = 1 * 7 + 1.8 * 5;
        for (i = 0; i < (this.floors * 4); i++) {
            utilitiesOfFlats = k * (this.flats[i].square) * ((this.flats[i].countofLivers) / 2);
            count = count + utilitiesOfFlats;
        }
        return count;
    },
    getPopulationDensity: function() {
        let count1 = 0;
        let count2 = 0;
        for (i = 0; i < (this.floors * 4); i++) {
            count1 = count1 + (this.flats[i].countofLivers);
        }
        for (i = 0; i < (this.floors * 4); i++) {
            count2 = count2 + (this.flats[i].square);
        }
        return count2 / count1;
    },
}
for (let i = 1; i < ((this.floors) * 4 + 1); i++) {
    flat = {
        countofRooms: Math.round(Math.random() * 3 + 1),
        countofLivers: Math.round((Math.random() * 2) + this.countofRooms),
        square: ((Math.round(Math.random() * 8 + 12)) * this.countofRooms + 12),
    }
    flat.flatNumber = i;
    flat.floorofFlat = Math.ceil(i / 4);
    flatsArr.push(flat);
}

document.write('Все методы : ' + '<br/>' + 'DOM.Flat( ) - Массив из квартир' + '<br/>' +
    'DOM.Utilities( # , # ) - Коммуналка #-й квартиры' + '<br/>' +
    'DOM.FullSquare( ) - Общая площадь всех квартир в доме' + '<br/>' +
    'DOM.FullPopulation( ) - Общее население дома' + '<br/>' +
    'DOM.FullUtilities( ) - Стоимость обслуживания всех квартир за год ' + '<br/>' +
    'DOM.PopulationDensity( ) - Плотность населения(кв метров на жильца)' + '<br/>')

console.log(DOM);




// 1)Создать объект Дом. В этом объекте – адрес дома, год постройки,
// количество этажей и массив квартир.
// 2)Каждая квартира (объект) содержит число комнат, число жильцов,
// общую площадь и номер этажа, а также номер самой квартиры.
// 3)У каждой квартиры есть метод, принимающий номер месяца и
// возвращающий размер коммунальных услуг по формуле:
// (коэффициент месяца * жилплощадь * кол-во живущих человек / 2).
// Коэффициент месяца равен 1 для апреля-октября и 1.8 для остальных месяцев.
// 4)Добавить в объект Дом методы:
//    Вычисление суммарной жилой площади дома
//    Вычисление населения дома
//    Вычисление суммарного годового обслуживания всех квартир в доме 
// (коммуналка по всем месяцам)
//    Среднюю плотность населения (сколько кв.метров приходится в среднем 
// на одного жильца в доме)
//    Написать скрипт, демонстрирующий все методы из списка выше. 
// Вывести сам объект дома в консоль. Можно заполнять случайным образом.

// document.write('</br>' + '1. Создать объект Дом. В этом объекте – адрес дома, год постройки,' + '</br>' +
//     'количество этажей и массив квартир .' + '</br>' +
//     '2. Каждая квартира - объект - содержит число комнат, число жильцов,' + '</br>' +
//     'общую площадь и номер этажа, а также номер самой квартиры .' + '</br>' +
//     '3. У каждой квартиры есть метод, принимающий номер месяца и возвращающий размер коммунальных услуг по формуле: - ' + '</br>' +
//     'коэффициент месяца * жилплощадь * кол - во живущих человек / 2 - .Коэффициент месяца равен 1 для апреля - октября и 1.8 для остальных месяцев .' + '</br>' +
//     '4. Добавить в объект Дом методы:' + '</br>' +
//     'Вычисление суммарной жилой площади дома' + '</br>' +
//     'Вычисление населения дома' + '</br>' +
//     'Вычисление суммарного годового обслуживания всех квартир в доме -коммуналка по всем месяцам -' + '</br>' +
//     'Среднюю плотность населения - сколько кв.метров приходится в среднем на одного жильца в доме -' + '</br>' +
//     '</br>' + 'Написать скрипт, демонстрирующий все методы из списка выше.Вывести сам объект дома в консоль.Можно заполнять случайным образом.')


/*
DOM.Flat() - массив из квартир 
DOM.Utilities(1) - коммуналка 1-й квартиры
DOM.FullSquare() - общая площадь всех квартир в доме 
DOM.FullPopulation() - общее население дома
DOM.FullUtilities() - Стоимость обслуживания всех квартир за год 
DOM.PopulationDensity() - плотность населения(кв метров на жильца)


DOM.Floors - количество этажей
DOM.Flats[n].Square - площадь n-квартиры

*/










//  hw5

// q0

function isEven(N) {
    return N % 2 === 0;
}
isEven(8)



/*
q1
Создать объект Банковский счет. У него есть номер,дата открытия,баланс и метод, который принимает 
в себя числа (любое число аргументов)и добавляет их на баланс
1) Создать две переменные, которые деструктурируют счет - номер и дата открытия.
Вынести их в консолью
2) Отправить в метод увеличение баланса число. Вынести баланс в консоль.
3) Создать массив из пяти чисел. Отпарвить этот массив в деструрированном виде
в метод увеличения баланса. Вынести баланс в консоль
*/
const bankaccount = {
    accountNumber: (Math.ceil(Math.random() * 1000)),
    dateofOpenning: (new Date('1995-07-31')).toLocaleDateString(),
    balance: 0,

    addtoBalance(...cash) {
        this.balance += (cash.reduce((sum, curr) =>
            sum + curr, this.balance))
    },
};
console.log(bankaccount);

bankaccount.addtoBalance(20);
console.log('balance = ' + bankaccount.balance);

const { accountNumber, dateofOpenning } = bankaccount;
console.log(accountNumber, dateofOpenning);


const balanceArr = [20, 15, 10, 5, 40];
const [a, b, c, d, e] = balanceArr;
bankaccount.addtoBalance(...balanceArr);



// // q2

// let Arr = [];
// for (i = 0; i < 100; i++) {
//     Arr.push({
//         x: Math.round(Math.random() * 100),
//         y: Math.round(Math.random() * 100),
//         r: Math.ceil(Math.random() * 100),
//     })
// }

// const compareFunction = function(a, b) {
//     if (a.r > b.r) {
//         return -1;
//     }
//     if (a.r < b.r) {
//         return 1;
//     }
//     return 0;
// };
// Arr.sort(compareFunction);
// console.log(Arr);
// console.log(Arr.slice([0], [10]));


// // q3

// const N = prompt('Enter number');
// const exp = /[1-2][0-6][0][\d][\d][0-35-9]/;
// if (N.match(exp) !== null) {
//     document.write(N.match(exp) + '<br/>');
// }
// document.write(exp.test(N));


// // q4

// const N = prompt('Enter your E-mail');
// const exp = /\S+[@][a-z]+[.][a-z]{2,4}$/;
// if (N.match(exp) !== null) {
//     document.write(N.match(exp) + '<br/>');
// }
// document.write(exp.test(N));



// console.log(window.alert);
// console.log(window.prompt);
// console.log(window.Math);
// console.log(window.window);




// /*
// HW

// 1.Написать функцию, которая принимает массив объектов и название ключа, 
// по которому нужно его отсортировать. Вернёт новый массив с отсортированными 
// объектами. Вывести вместе старый и новый массивы.
// */

// let Arr = [];
// for (i = 0; i < 10; i++) {
//     Arr.push({
//         x: Math.round(Math.random() * 100),
//         y: Math.round(Math.random() * 100),
//         r: Math.ceil(Math.random() * 100),
//     })
// }
// const cloneArr = Arr.slice(0, 99);
// console.log(cloneArr);
// const N = Number(prompt('Enter the key,where 1 = r, 2 = x, 3 = y'));

// const compareFunctionR = function(a, b) {
//     if (a.r > b.r) {
//         return -1;
//     }
//     if (a.r < b.r) {
//         return 1;
//     }
//     return 0;
// };

// const compareFunctionX = function(a, b) {
//     if (a.x > b.x) {
//         return -1;
//     }
//     if (a.x < b.x) {
//         return 1;
//     }
//     return 0;
// };

// const compareFunctionY = function(a, b) {
//     if (a.y > b.y) {
//         return -1;
//     }
//     if (a.y < b.y) {
//         return 1;
//     }
//     return 0;
// };

// switch (N) {
//     case 1:
//         Arr.sort(compareFunctionR);
//         break;
//     case 2:
//         Arr.sort(compareFunctionX);
//         break;
//     case 3:
//         Arr.sort(compareFunctionY);
//         break;
// }
// console.log(Arr);

// // 2. Найти во введённом тексте все американские номера телефонов(+1).
// // В номере цифры могут разделяться внутри дефисами.

// const N = prompt('Enter your number');
// const exp = /[+][1][\d, ,-]{10,14}/;
// document.write(N.match(exp) + '<br/>');
// if (N.match(exp) !== null) {
//     document.write(exp.test(N));
// }


// // 3. Написать скрипт, который выведет домен 1 - го уровня той страницы,
// //     на которой запущен.

// console.log((location.host).match(/\w{2,3}$/));


// // 4. Вывести в консоль количество квадратов 60 * 60 пикселей, которые полностью
// // поместятся в области просмотра страницы в виде сетки.

// const PxH = Math.floor(screen.height / 60);
// const PxW = Math.floor(screen.width / 60);
// const countofsquare = PxH * PxW;
// console.log(`${PxH} x ${PxW} = ${countofsquare}`);