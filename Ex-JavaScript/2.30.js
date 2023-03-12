
let cor1 = prompt('Digite uma cor primaria entre =>  Vermelho, Amarelo,  Laranja,  Azul, Verde, Preto, Branco,  Marron,  Rosa, Cinza, Roxo, Lilás, Marron Terra');

let cor2 = prompt('Digite uma cor secundaria entre =>  Vermelho, Amarelo,  Laranja,  Azul, Verde, Preto, Branco,  Marron,  Rosa, Cinza, Roxo, Lilás, Marron Terra');


let cor = 'Vermelho'; 'Amarelo'; 'Laranja'; 'Azul'; 'Verde'; 'Preto'; 'Branco'; 'Marron'; 'Rosa'; 'Cinza'; 'Roxo'; 'Lilás'; 'Marron Terra';

if (cor1 === 'Vermelho' && cor2 === 'Amarelo') {
    alert('Vermelho + Amarelo é = ' + ' Laranja');

} else if (cor1 === 'Amarelo' && cor2 === 'Laranja') {
    alert('Amarelo + Laranja é = ' + ' Vermelho ');

} else if (cor1 === 'Azul' && cor2 === 'Vermelho') {
    alert('Azul + vermelho é = ' + 'Roxo');

} else if (cor1 === 'Amarelo' && cor2 === 'Azul') {
    alert('Amarelo  + Azul é = ' + 'Verde');

} else if (cor1 === 'Amarelo' && cor2 === 'Verde') {
    alert('Amarelo +  Verde é = ' + ' Azul');

} else if (cor1 === 'Branco' && cor2 === 'Preto') {
    alert('Branco + Preto é = ' + ' Cinza');

} else if (cor1 === 'Vermelho' && cor2 === 'Branco') {
    alert('Vermelho + Branco é = ' + 'Rosa');

} else if (cor1 === 'Vermelho' && cor2 === 'Verde') {
    alert('Vermelho + verde é = ' + ' Marron');

} else if (cor1 === 'Laranja' && cor2 === 'Roxo') {
    alert('Laranja + Roxo é = ' + 'Marron Terra ');

} else if (cor1 === 'Roxo' && cor2 === 'Branco') {
    alert('Roxo + Branco é = ' + 'Lilás');
} else {
    alert('Combinação não encontrada!');
}
