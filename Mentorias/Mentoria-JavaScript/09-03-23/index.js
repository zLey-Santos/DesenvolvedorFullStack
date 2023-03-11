let nomeP, nomeA, n1, n2, n3;
nomeP = prompt('informe o nome do professor');
nomeA = prompt('informe o nome do Aluno');
n1 = parseInt(prompt('Informe a primeira nota'));
n2 = parseInt(prompt('Informe a segunda nota'));
n3 = parseInt(prompt('Informe a terceira nota'));
media = parseInt((n1 + n2 + n3) / 3);
if (media >= 7) {
    alert('Aluno: ' + ' ' + nomeA + ' ' + ' Aprovado! com a media de nota: ' + media);
} else if (media >= 5 && media < 7) {
    alert('Aluno: ' + ' ' + nomeA + ' ' + ' Recuperação! com a media de nota: ' + media);
} else {
    alert('Aluno: ' + ' ' + nomeA + ' ' + ' reprovado! com a media de nota: ' + media);
}




