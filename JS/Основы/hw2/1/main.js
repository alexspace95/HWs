/*
1 Пользователь вводит строку с текстом. Посчитать и вывести на экран количество согласных, 
гласных букв(латинских) в тексте, а также не-букв.
*/

const str = (String(prompt('Enter your text')));
let gl = 0;
let sogl = 0;
for (i = 0; i < str.length; i++) {
    switch (str[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            gl++;
            break;
        case 'q':
        case 'w':
        case 'r':
        case 't':
        case 'y':
        case 'p':
        case 's':
        case 'd':
        case 'f':
        case 'g':
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'z':
        case 'x':
        case 'c':
        case 'v':
        case 'b':
        case 'n':
        case 'm':
            sogl++
            break;
    }
}
document.write(' gl = ' + gl + '<br/>' + ' sogl = ' + sogl)