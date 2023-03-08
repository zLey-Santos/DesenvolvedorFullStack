var dinheiroQueRecebi = prompt('Digite a quantidade de dinheiro recebida:');

var valorDoProduto = prompt('Digite o valor do produto:');

dinheiroQueRecebi = parseInt(dinheiroQueRecebi);
valorDoProduto = parseFloat(valorDoProduto);

var troco = dinheiroQueRecebi - valorDoProduto;

if (troco >= 0) {
    alert('O seu troco é de ' + troco.toFixed(2) + ' reais');
} else {
    alert('Cade o meu dinheiro?!');
}

