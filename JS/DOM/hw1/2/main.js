//На странице вывести часы, показывающие время в формате HH:MM:SS. 
//Двоеточия в этих часах мигают - пропадают и появляются каждые 500 мс. 
//Часы показывают текущее время.

const div = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');
span.innerText = ". ";
p.innerText = (new Date()).getHours() + " " + (new Date()).getMinutes() + " " + (new Date()).getSeconds() + " ";
setInterval(() => {
    if ((new Date()).getHours() < 10) {
        p.innerText = "0" + (new Date()).getHours();
    }
    if ((new Date()).getHours() >= 10) {
        p.innerText = (new Date()).getHours();
    }
    p.appendChild(span);
    if ((new Date()).getMinutes() < 10) {
        p.innerText += "0" + (new Date()).getMinutes();
    }
    if ((new Date()).getMinutes() >= 10) {
        p.innerText += (new Date()).getMinutes();
    }
    p.appendChild(span);
    if ((new Date()).getSeconds() < 10) {
        p.innerText += "0" + (new Date()).getSeconds();
    }
    if ((new Date()).getSeconds() >= 10) {
        p.innerText += (new Date()).getSeconds()
    }
    span.innerText = ": ";
}, 500);
div.appendChild(p);
elem.appendChild(div);

setInterval(() => {
    span.innerText = '. ';
}, 1000);