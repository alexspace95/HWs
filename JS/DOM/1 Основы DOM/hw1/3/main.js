// Создать массив объектов с информацией о странах: 
// название, площадь, население, государственный язык, 
// телефонный код и картинка флага. 
// Вывести на страницу таблицу, 
// которая представляет информацию по всем странам в массиве.

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