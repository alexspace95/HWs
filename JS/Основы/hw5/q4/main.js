const N = prompt('Enter your E-mail');
const exp = /\S+[@][a-z]+[.][a-z]{2,4}$/;
if (N.match(exp) !== null) {
    document.write(N.match(exp) + '<br/>');
}
document.write(exp.test(N));