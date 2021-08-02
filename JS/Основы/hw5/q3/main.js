const N = prompt('Enter number');
const exp = /[1-2][0-6][0][\d][\d][0-35-9]/;
if (N.match(exp) !== null) {
    document.write(N.match(exp) + '<br/>');
}
document.write(exp.test(N));