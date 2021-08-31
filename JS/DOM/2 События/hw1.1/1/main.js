// 1 //

// Разработать шифратор-дешифратор: 
// два текстовых поля, две кнопки Зашифровать и Расшифровать. 
// При нажатии на первую текст из первого текстового поля шифруется и попадает во второе. 
// При нажатии на вторую - из второго дешифруется и попадает в первое. 
// Алгоритм шифрования\дешифрования подобрать по своему усмотрению.

const cryptArr = ['_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const decryptArr = ['_', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ']
for (let i = 0; i < cryptArr.length; i++) {
    console.log(`${cryptArr[i]} = ${decryptArr[i]}`)
}

const cryptField = document.getElementById('crypt-field');
const decryptField = document.getElementById('decrypt-field');
const cryptButton = document.getElementById('crypt-button');
const decryptButton = document.getElementById('decrypt-button');
const pCryptedText = document.getElementById('crypted-text');
const pDecryptedText = document.getElementById('decrypted-text');

cryptButton.addEventListener('click', function() {
    const textCrypt = String(cryptField.value);
    let text = '';
    pDecryptedText.innerText = text;
    for (let i = 0; i < textCrypt.length; i++) {
        for (let j = 0; j < cryptArr.length; j++) {
            if (textCrypt[i] == cryptArr[j]) {
                text = decryptArr[j];
                pDecryptedText.innerText += `${text}`
            }
        }
    }
})

decryptButton.addEventListener('click', function() {
    const textDecrypt = String(decryptField.value);
    let text = '';
    pCryptedText.innerText = text;
    for (let i = 0; i < textDecrypt.length; i++) {
        for (let j = 0; j < decryptArr.length; j++) {
            if (textDecrypt[i] == decryptArr[j]) {
                text = cryptArr[j];
                pCryptedText.innerText += `${text}`
            }
        }
    }
})