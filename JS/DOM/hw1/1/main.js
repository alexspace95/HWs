// Пользователь вводит число N с клавиатуры. 
// Вывести на страницу HTML-таблицу умножения размером N*N

const N = Number(prompt('Enter N'));
const section = document.getElementById('section');
const clas = 'class';
const ten = 'ten';
for (let i = 1; i <= N; i++) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    if (i % 10 === 0) {
        div.setAttribute(clas, ten);
    }
    h2.innerText = `${i}`;
    div.appendChild(h2)
    for (let j = 1; j <= N; j++) {
        const p = document.createElement('p')
        p.innerText = `${i}*${j}=${i*j}`;
        div.appendChild(p)
        if (j % 10 === 0) {
            p.setAttribute(clas, ten);
        }
    }
    section.appendChild(div)
}