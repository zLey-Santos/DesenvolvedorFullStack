var minhaResposta = prompt("Qual o valor de PI com cinco casa decimais?");

var meuNumero = Number(minhaResposta);

console.log("O número digitado foi:" + meuNumero);

if (meuNumero === 3.14159) {
    alert("Acertou!");
} else {
    alert("Errou!")
} 