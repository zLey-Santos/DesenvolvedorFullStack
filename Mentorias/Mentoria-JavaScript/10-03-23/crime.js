
let resposta = prompt("Deseja responder algumas perguntas sobre um crime? (sim/não)");
let respostas_positivas = 0;

// valida se a pessoa quer responder as perguntas
if (resposta === "sim") {
    console.log("Ok, vamos começar.");
} else /*nao
if (resposta === "não") */ {
    console.log("Você é considerado(a) SUSPEITO(A) do crime, não saia da cidade.");
}

let pergunta1 = prompt("Telefonou para a vítima? (sim/não)");
let pergunta2 = prompt("Esteve no local do crime? (sim/não)");
let pergunta3 = prompt("Mora perto da vítima? (sim/não)");
let pergunta4 = prompt("Devia para a vítima? (sim/são)");
let pergunta5 = prompt("Já trabalhou com a vítima? (sim/não)");

// add os pontos por pergunta 
if (resposta === "sim") {
    respostas_positivas++;
}
if (pergunta2 === "sim") {
    respostas_positivas++;
}
if (pergunta3 === "sim") {
    respostas_positivas++;
}
if (pergunta4 === "sim") {
    respostas_positivas++;
}
if (pergunta5 === "sim") {
    respostas_positivas++;
}

// valida o status da pessoa 
if (respostas_positivas === 2) {
    console.log("Você é considerado(a) SUSPEITO(A) do crime.");
} else if (respostas_positivas >= 3 && respostas_positivas <= 4) {
    console.log("Você é considerado(a) CÚMPLICE do crime.");
} else if (respostas_positivas === 5) {
    console.log("Você é considerado(a) ASSASSINO(A).");
} else {
    console.log("Você é considerado(a) INOCENTE do crime.");
}

