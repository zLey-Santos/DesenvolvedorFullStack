
const anoAtual = Number(prompt("Informe o ano atual:"));
const mesAtual = Number(prompt("Informe o mês atual (número do mês de 01 até 12):"));
const idade = Number(prompt("Informe sua idade:"));
const mesesAteAniversario = Number(prompt("Informe quantos meses faltam para seu aniversário (coloque um número negativo se seu aniversário já passou):"));

const anoNascimento = anoAtual - idade;
let mesNascimento;

if (mesesAteAniversario < 0) {
    mesNascimento = mesAtual - Math.abs(mesesAteAniversario); // Math.abs() garante um valor absoluto positivo mesmo que o valor seja negativo 
} else {
    mesNascimento = mesAtual + mesesAteAniversario;
}

alert("O ano de nascimento é " + anoNascimento.toString() + " e o mês de nascimento é " + mesNascimento.toString().padStart(2, '0') + ': ' + anoNascimento.toString() + '/' + mesNascimento.toString().padStart(2, '0'));
