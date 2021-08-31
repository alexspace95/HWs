// 3 //

// Создать кредитный калькулятор:
// поле для ввода суммы кредита, кол-ва месяцев и кнопка Рассчитать. 
// Процент кредита = 11% годовых. 
// После нажатия на кнопку под формой появляется таблица с помесячными 
// оплатами (номер месяца, сумма к оплате, остаток долга по кредиту), 
// а под таблицей показана суммарная выплата за все время и размер переплаты.

const creditPercent = 0.11;
const resultButton = document.getElementById('result-button');
const sum = document.getElementById('sum');
const month = document.getElementById('count-month');

resultButton.addEventListener('click', function() {
    const tbody = document.createElement('tbody');
    const tableSection = document.getElementById('table-section');
    tableSection.innerHTML = '<table class="table" id="table"></table>';
    const table = document.getElementById('table');
    const creditSum = Number(sum.value);
    const monthNumber = Number(month.value);
    const extraSum = creditSum + (creditSum * (creditPercent * monthNumber / 12));
    let monthSum = 0;
    for (let i = 0; i < monthNumber + 1; i++) {
        const tr = document.createElement('tr');
        monthSum += Number((extraSum / monthNumber).toFixed(2));
        for (let j = 0; j < 3; j++) {
            const td = document.createElement('td');
            tr.appendChild(td);
            if (i == 0) {
                td.setAttribute('class', 'table-title');
                if (j == 0) {
                    td.innerText = 'Номер месяца';
                }
                if (j == 1) {
                    td.innerText = 'Сумма платежа';
                }
                if (j == 2) {
                    td.innerText = 'Остаток';
                }
            } else {
                tr.appendChild(td);
                if (j == 0) {
                    td.innerText = `${i}-й`;
                }
                if (j == 1) {
                    td.innerText = Number((extraSum / monthNumber).toFixed(2));
                    if (i == monthNumber) {
                        let one = Number((extraSum / monthNumber).toFixed(2));
                        let two = Number((extraSum - monthSum + one).toFixed(2));
                        td.innerText = (one + two).toFixed(2);
                    }
                }
                if (j == 2) {
                    td.setAttribute('class', 'lostSum');
                    td.innerText = Number(extraSum - monthSum + Number((extraSum / monthNumber).toFixed(2))).toFixed(2);
                    if (i == monthNumber) {
                        td.innerText = '0';
                    }
                }
            }
        }
        tbody.appendChild(tr)
    }

    table.appendChild(tbody);
    tableSection.appendChild(table);
    const resultSum = document.getElementById('result-sum');
    resultSum.innerText = `Общая сумма кредита = ${extraSum.toFixed(2)}`;
})