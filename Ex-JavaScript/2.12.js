// Declaração de uma função
function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media.toFixed(2);
}

// Chamada da função e exibição do resultado no console
let resultado = calcularMedia(7.5, 8.0, 9.5);
console.log("A média é: " + resultado);