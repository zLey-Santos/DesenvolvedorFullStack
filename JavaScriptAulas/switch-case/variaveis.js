
// const dia = 8;
// const mes = 1;
// const ano = 1992;

// const data = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano.toString()}`;
// console.log(data); // saída: "08/01/1992"

const dia = 08;
const mes = 01;
const ano = 1992;
const idade = dia + mes + ano;

if (dia.toString() + '/' + mes.toString() + '/' + ano.toString()) {
    console.log(idade);
}

// and && or ||

// OR ||

/*const gostaStarWars = true;
const ehFisico = true;
const jogaRPGMesa = true;
const leuTodaObraTolkien = true;
const gostaDaComicCon = true;
const temDoutorado = true;
const sabeDirigir = true;

if (gostaStarWars === false || ehFisico === false || jogaRPGMesa === false || leuTodaObraTolkien === false || gostaDaComicCon === false || temDoutorado === false || sabeDirigir === false) {
  alert('Você não pode ser colega de quarto do Sheldon');
} else {
  alert('Parabéns (ou não)! Você pode ser colega de quarto do Shelon');
} */

// AND &&
/*const idade = Number(prompt("Digite a sua idade"));

if (idade > 0 && idade <= 10) {
    alert('Infância');
} else if (idade >= 11 && idade <= 18) {
    alert('Adolescência');
} else if (idade >= 19 && idade <= 29) {
    alert('Jovem adultez');
} else if (idade >= 30 && idade <= 60) {
    alert('Adultez madura');
} else if (idade >= 61 && idade <= 130) {
    alert('Idoso');
} else {
    alert(' A idade digitada é invalida!')
} */


// if (1 === 1) {
//     let num = 5
// }

// alert(num);


// usar cosnt ou let
// var pode dar erro e nao pode ser verificada mais complexa
// let pode ser alterada porem apenas no seu escopo
// const nao pode ser alterada 