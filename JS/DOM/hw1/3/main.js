/* 
1 Вывод результата вычислений на страницу 

const A = Number(prompt('Enter A'));
const B = Number(prompt('Enter B'));
const result = A + B;
const elem = document.getElementById('elem');
elem.innerText = result;
elem.innerHTML = "<p>" + result + "</p>";
console.dir(elem);
*/

/*
2. Генерация HTML-кода для некоторого объекта
3. Вывод массива объектов в HTML-список

const items = [{
    title: 'IMac Pro',
    year: 2018,
    price: 1130,
}, {
    title: 'Asus ZenBook',
    year: 2019,
    price: 1370,
}, {
    title: 'Lenovo Yoga Tablet',
    year: 2014,
    price: 630,
}, {
    title: 'Sansung Galaxy Notre',
    year: 2020,
    price: 1930,
}];
const elem = document.getElementById('elem');
for (let i = 0; i < items.length; i++) {
    elem.innerHTML += "<div><h2>" + items[i].title + "</h2><p>Year: " + items[i].year + "<br/> Price: " + items[i].price + "</p></div>";
}
console.dir(elem);
*/

/*
извлекаем элемент с идентификатором list а затем используем  querySelectorAll 
чтобы выбрать все элементы li.item и записываем ее в items и обходим ее 
циклом for. Извлекаем i-тый items - конкретный DOM-объект,указывающий на 
i-тый тег li.item. и в его html перезаписываем item №i

const list = document.getElementById("list");
const items = list.querySelectorAll("li.item");

for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = `Item#${i}`
}
*/


/*
q0
Создать на странице несколько тегов div (3). В каждом - создать 
несколько тегов p (3).
Пройти по странице и проставить в теги <p> номер этого тега в 
виде X.Y, где X - номер div-a , а Y - номер тега <p> внутри этого div.

for (let i = 1; i < 4; i++) {
    document.body.innerHTML += `<div id='${i}'><p></p><p></p><p></p></div>`;
}
const divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
    let list = document.getElementById(`${i+1}`);
    const div1 = list.querySelectorAll("div p");
    for (let j = 0; j < div1.length; j++) {
        div1[j].innerHTML += `${i+1}.${j+1}`;
    }
}
*/

/*
const divs = document.getElementsByTagName("div");
const ps = document.getElementsByTagName("p");
let p = 0;
for (let i = 0; i < 3; i++) {
    document.body.innerHTML += `<div class='${i+1}'><p></p><p></p><p></p></div>`;
}
for (let j = 0; j < ps.length; j++) {
    ps[j].innerHTML += `${j+1}.`;
}
*/

/* 
вставка атрибутов в теги p  
for (let i = 0; i < 1; i++) {
    document.body.innerHTML += `<div id='${i}'><p></p><p></p><p></p></div>`;
}
const patagtaphs = document.getElementsByTagName('p');
Array.from(patagtaphs).forEach((p, i) => {
    p.setAttribute('title', `Paragraph #${i}`);
})
*/

/*
const items = [{
    title: 'IMac Pro',
    year: 2018,
    price: 1130,
}, {
    title: 'Asus ZenBook',
    year: 2019,
    price: 1370,
}];

const elem = document.getElementById('elem');
let s = '';
items.forEach(item => {
    s += "<div><h2>" + item.title + "</h2><p>Year: " + item.year + "<br/> Price: " + item.price + "</p></div>";
});
elem.innerHTML = s;
*/

/*
const items = [{
    title: 'IMac Pro',
    year: 2018,
    price: 1130,
}, {
    title: 'Asus ZenBook',
    year: 2019,
    price: 1370,
}];

const elem = document.getElementById('elem');

items.forEach(item => {
    elem.insertAdjacentHTML("beforeend", "<div><h2>" + item.title + "</h2><p>Year: " + item.year + "<br/> Price: " + item.price + "</p></div>");
});
*/

/*
const p = document.createElement('p');
p.innerText = 'Paragraph, generation from JS!';
p.setAttribute('title', 'Custom title');
document.body.appendChild(p);
*/

/*
q1 
const items = [{
    title: 'IMac Pro',
    year: 2018,
    price: 1130,
}, {
    title: 'Asus ZenBook',
    year: 2019,
    price: 1370,
}];

const elem = document.getElementById('elem');

items.forEach(
    item => {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');

        h2.innerText = item.title;

        const p = document.createElement('p');
        p.innerText = "Year: " + item.year + " Price: " + item.price;

        div.appendChild(h2);
        div.appendChild(p);
        elem.appendChild(div);
    });
*/

/*
q1.1

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.appendChild(tbody);
document.body.appendChild(table);
const N = 5;
for (let i = 0; i < N; i++) {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    for (let j = 0; j < N; j++) {
        const td = document.createElement('td');
        td.innerText = `(${i};${j})`;
        tr.appendChild(td);
    }
}
*/

/*
q1c

const sports = [{
        name: 'Football',
        names: ['Fill', 'Fijy', 'Fam'],
    }, {
        name: 'Basketball',
        names: ['Bill', 'Bronk', 'Barry'],
    },
    {
        name: 'Tennis',
        names: ['Tim', 'Tom', 'Tork']
    }
];

for (let i = 0; i < sports.length; i++) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = sports[i].name;
    div.appendChild(h2);
    for (let j = 0; j < sports[i].names.length; j++) {
        const p = document.createElement('p');
        p.innerText = j + 1 + ". - " + sports[i].names[j];
        div.appendChild(p)
    }
    document.body.appendChild(div);
}
*/


/*
q2
Перестановка элементов по таймеру(3 сек) в списке

const items = [{
    title: 'IMac Pro',
    year: 2018,
    price: 1130,
}, {
    title: 'Asus ZenBook',
    year: 2019,
    price: 1370,
}, {
    title: 'Lenovo Yoga Tablet',
    year: 2014,
    price: 630,
}, {
    title: 'Sansung Galaxy Notre',
    year: 2020,
    price: 1930,
}];

const elem = document.getElementById('elem');


items.forEach(
    item => {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');

        h2.innerText = item.title;

        const p = document.createElement('p');
        p.innerText = "Year: " + item.year + " Price: " + item.price;

        div.appendChild(h2);
        div.appendChild(p);
        elem.appendChild(div);
    });

setInterval(() => {
    const last = elem.lastElementChild;
    elem.prepend(last);
}, 3000);
*/

/**
q2c


const elem = document.getElementById('elem');
const items = [{
    title: 'IMac Pro',
    year: 2018,
    price: 1130,
}, {
    title: 'Asus ZenBook',
    year: 2019,
    price: 1370,
}];

setInterval(() => {
    items.forEach(
        item => {
            const div = document.createElement('div');
            const h2 = document.createElement('h2');
            h2.innerText = item.title;
            const p = document.createElement('p');
            p.innerText = "Price: " + item.price;
            div.appendChild(h2);
            div.appendChild(p);
            elem.appendChild(div);

            setTimeout(() => {
                div.remove(elem);
            }, 1500);
        });
}, 3000);
*/

const countries = [{
    names: 'Name',
    square: 'Square',
    population: 'Population',
    language: 'Language',
    telephone: 'Telephone code',
    flag: 'Flag of country',
}, {
    names: 'China',
    square: '9 388 211',
    population: '1 439 323 776',
    language: 'Chinese',
    telephone: '+86',
    flag: 'Chi',
}, {
    names: 'India',
    square: '2 973 190',
    population: '1 380 004 385',
    language: 'Punjabi',
    telephone: '+91',
    flag: 'Ind',
}, {
    names: 'United States',
    square: '9 147 420',
    population: '331 002 651',
    language: 'English',
    telephone: '+1',
    flag: 'USA',
}, {
    names: 'Russia',
    square: '16 376 870',
    population: '145 934 462',
    language: 'Russian',
    telephone: '+7',
    flag: 'Rus',
}, {
    names: 'United Kingdom',
    square: '241 930',
    population: '67 886 011',
    language: 'English',
    telephone: '+44',
    flag: 'UK',
}, ]

const elem = document.getElementById('elem');

const table = document.createElement('table');
const tbody = document.createElement('tbody')
elem.appendChild(table);
table.appendChild(tbody);


for (let i = 0; i < countries.length; i++) {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    for (let j = 0; j < Object.keys(countries[i]).length; j++) {
        const td = document.createElement('td');
        if (j === 0) {
            td.innerText = countries[i].names;
            tr.appendChild(td);
        }
        if (j === 1) {
            td.innerText = countries[i].square;
            tr.appendChild(td);
        }
        if (j === 2) {
            td.innerText = countries[i].population;
            tr.appendChild(td);
        }
        if (j === 3) {
            td.innerText = countries[i].language;
            tr.appendChild(td);
        }
        if (j === 4) {
            td.innerText = countries[i].telephone;
            tr.appendChild(td);
        }
        if (j === 5) {
            if (i === 0) {
                td.innerText = countries[i].flag;
            }
            tr.appendChild(td);
            if (i > 0) {
                td.setAttribute('class', `${countries[i].flag}`);
            }
        }
    }
}


// Создать массив объектов с информацией о странах: 
// название, площадь, население, государственный язык, 
// телефонный код и картинка флага. 
// Вывести на страницу таблицу, 
// которая представляет информацию по всем странам в массиве.