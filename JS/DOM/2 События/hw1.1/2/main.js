// 2 //

// Создать конвертер курсов валют: 
// текстовое поле, два выпадающих списка с выбором валюты Из и В.
//  При изменении текста в текстовом поле, а также выборе новых валют 
//  происходит конвертация и результат конвертации виден под формой 
//  в тексте "1000 RUB = XX USD". Не менее 4-х валют.

const resultButton = document.getElementById('result-button');
resultButton.addEventListener('click', function() {
    const fromCurency = String(document.getElementById('select-from').value);
    const toCurency = String(document.getElementById('select-to').value);
    const currencies = {
        BYN: 29.14,
        USD: 73.31,
        EUR: 86.58,
        RUB: 1
    };
    const currency = Number(document.getElementById('currency').value);
    let fromResult = 0;
    switch (fromCurency) {
        case 'BYN':
            fromResult = currencies.BYN;
            break;
        case 'USD':
            fromResult = currencies.USD;
            break;
        case 'EUR':
            fromResult = currencies.EUR;
            break;
        case 'RUB':
            fromResult = currencies.RUB;
            break;
    }
    let toResult = 0;
    switch (toCurency) {
        case 'BYN':
            toResult = currencies.BYN;
            break;
        case 'USD':
            toResult = currencies.USD;
            break;
        case 'EUR':
            toResult = currencies.EUR;
            break;
        case 'RUB':
            toResult = currencies.RUB;
            break;
    }
    let result = fromResult / toResult;
    document.getElementById('result').innerText = `${currency} ${fromCurency} = ${currency * result} ${toCurency}`;
})