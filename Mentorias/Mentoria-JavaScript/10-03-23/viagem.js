let dinheiroNaConta = Number(prompt('Quanto dinheiro tem na sua conta?'));
let salario = Number(prompt('Qual é o seu salário?'));

let custoDaViagem = 1200;
let carroQuebrado = true;

let respostaCarroQuebrado = prompt('O seu carro está quebrado? Responda com "sim" ou "nao".');

if (respostaCarroQuebrado === 'sim') {
    carroQuebrado = true;
} else if (respostaCarroQuebrado === 'nao') {
    carroQuebrado = false;
} else {
    alert('Resposta inválida. Por favor, responda com "sim" ou "nao".');
}

if (dinheiroNaConta + salario >= custoDaViagem) {
    if (carroQuebrado) {
        alert('Viagem cancelada. O carro está quebrado.');
    } else {
        alert('Pode viajar!');
    }
} else {
    alert('Viagem cancelada. Dinheiro insuficiente.');
}

/* 2º versão
let dinheiroNaConta = Number(prompt('Quanto dinheiro tem na sua conta?'));
let salario = Number(prompt('Qual é o seu salário?'));
let custoDaViagem = 1200;
let carroQuebrado = true;

if (dinheiroNaConta + salario >= custoDaViagem) {
    if (carroQuebrado) {
        alert('Viagem cancelada. O carro está quebrado.');
    } else {
        alert('Pode viajar!');
    }
} else {
    alert('Viagem cancelada. Dinheiro insuficiente.');
}*/

/* 1º versão
        let dinheiroNaConta = Number(prompt('Quanto dinheiro tem na sua conta?'));
        let salario = Number(prompt('Qual é o seu salário?'));
        let custoDaViagem = 1200;
        let carroQuebrado = true;

        if (dinheiroNaConta + salario >= custoDaViagem && !carroQuebrado) {
            alert('Pode viajar!');
        } else {
            alert('Viagem cancelada.');
        }
        */