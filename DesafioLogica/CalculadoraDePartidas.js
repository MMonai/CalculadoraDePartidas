function TotalPartidas(vitorias, derrotas) {
    return vitorias - derrotas;
}

console.log('Vença 5 partidas para ver seu Elo');

var xp = 0;
var somaXP = 0; 

do {
    var xpGanho = xp + 5; 
    console.log('Você ganhou de xp', xpGanho);
    somaXP += xpGanho; 
    xp++;
} 
while (xp < 5);

console.log('Parabéns herói, você passou, você ganhou', xp);
console.log('A soma total de XP foi:', somaXP);

if (somaXP > 30) {
    console.log('Você ganhou mais de 30 pontos de XP!');
} else {
    console.log('Continue tentando para ganhar mais XP.');
}

let NomeDoHeroi = 'Smurf';
let vitorias = 150;
let derrotas = 100;

let pontos = TotalPartidas(vitorias, derrotas);

function DescobrirElo(pontos) {
    if (pontos >= 0 && pontos < 10) {
        return "Ferro";
    } else if (pontos >= 10 && pontos < 20) {
        return "Bronze";
    } else if (pontos >= 21 && pontos < 40) {
        return "Prata";
    } else if (pontos >= 41 && pontos < 80) {
        return "Ouro";
    } else if (pontos >= 81 && pontos < 90) {
        return "Diamante";
    } else if (pontos >= 91 && pontos < 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

let level = DescobrirElo(pontos);

console.log("Parabéns", NomeDoHeroi,'seu Elo é:', level)

