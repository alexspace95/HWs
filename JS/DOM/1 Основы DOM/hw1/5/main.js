// Создать массив имен, названий товаров и городов. 
// Создать скрипт, который каждые 5 секунд в нижнем левом углу страницы будет 
// отображать карточку с текстом "Иван из г. Лондон купил 3 шт. товара Apple Iphone". 
// Имена, города, товары выбираются случайным образом из массивов, 
// количество - случайное число от 1 до 5. 
// Появившаяся карточка должна удаляться через 4 секунды после появления.

const peoples = [{
    name: 'Vault Dweller',
    good: 'Gatling laser',
    city: 'Vault 13',
}, {
    name: 'Chosen One',
    good: 'Bozar',
    city: 'Arroyo',
}, {
    name: 'Marcus',
    good: 'Rockwell CZ53 personal minigun',
    city: 'Broken Hills',
}, {
    name: 'John Cassidy',
    good: 'M72 Gauss rifle',
    city: 'Vault City',
}, {
    name: 'Tandi',
    good: 'Desert Eagle .44',
    city: 'New California Republic',
}, ]

const elem = document.getElementById('elem');
const div = document.createElement('div');
const p = document.createElement('p');
p.innerText = peoples[Math.round(Math.random() * 4)].name + ' from ' + peoples[Math.round(Math.random() * 4)].city + ' looking for ' + peoples[Math.round(Math.random() * 4)].good + ' ' + Math.ceil(Math.random() * 5) + ' pc.';
div.appendChild(p);
elem.appendChild(div);
setTimeout(() => {
    p.innerText = '';
}, 4000);

setInterval(() => {
    p.innerText += peoples[Math.round(Math.random() * 4)].name + ' from ' + peoples[Math.round(Math.random() * 4)].city + ' looking for ' + peoples[Math.round(Math.random() * 4)].good + ' ' + Math.ceil(Math.random() * 5) + ' pc.';
    setTimeout(() => {
        p.innerText = '';
    }, 4000);
}, 5000);