var idadeStr = prompt('Qual idade no seu documento?');

var idade = parseInt(idadeStr);

console.log('A idade que o sujeito informou foi ' + idade + ' anos');

if (idade >= 18) {
    console.log('Maior de idade pode entrar!');

} else {
    console.log('Menor de idade vaza!');
}