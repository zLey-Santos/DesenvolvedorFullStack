
let carro = prompt("Digite um modelo de carro");

switch (carro) {
    case 'March':
    case 'Etios':
    case 'Civic':
    case 'Opala':
    case 'Fusca':
    case 'Uno':
    case 'Brasilia':
    case 'Voyage':
    case 'Marea':
    case 'Corolla':
    case 'Maverick':
    case 'Golf':
    case 'Celta':
    case 'Gurgel':
        alert('É um carro');
        break;
    default:
        alert('Não é um carro');
}


let num = Number(prompt("Digite um número"));

switch (num) {
    case 1:
        alert('Um');
        break;
    case 2:
        alert('Dois');
        break;
    case 3:
        alert('Três');
        break;
    case 4:
        alert('Quatro');
        break;
    case 5:
        alert('Cinco');
}

let texto = prompt("Digite positivo, negativo ou zero");

switch (texto) {
    case 'positivo':
        alert(1);
        break;
    case 'negativo':
        alert(-1);
        break;
    case 'zero':
        alert(0);
        break;
    default:
        alert("ERRO: você tem que digite positivo, negativo ou zero");

}



if (num === 1) {
    alert('Um');
} else if (num === 2) {
    alert('Dois');
} else if (num === 3) {
    alert('Três');
} else if (num === 4) {
    alert('Quatro');
} else if (num === 5) {
    alert('Cinco');
}
