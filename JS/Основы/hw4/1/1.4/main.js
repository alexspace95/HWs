//4) Генерацию случайного цвета в формате RGB()

function getRandomColor() {
    const RGB = [];
    for (let i = 0; i < 3; i++) {
        let color = Math.round(Math.random() * 255);
        RGB.push(color);
    }
    return document.write('Red : ' + RGB[0] + '<br/>' + 'Green :' + RGB[1] + '<br/>' + 'Blue : ' + RGB[2] + '<br/>');
}
getRandomColor();