// Desafio 02
// Calculadora de partidas rankeadas !!!
// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de rankeada deve ser feito através de (vitória - derrota).

// se vitórias for menor do que 10 = ferro // if
// se vitórias for entre do que 11 e 20 = Bronze //else if 
// se vitórias for entre do que 21 e 50 = Prata
// se vitórias for entre do que 51 e 80 = Ouro
// se vitórias for entre do que 81 e 90 = Diamante
// se vitórias for entre do que 91 e 100 = Lendário
// se vitórias for maior ou igual do que 101 = Imortal //else

// Saída
// Ao final deve se exibir uma mensagem: "O herói tem de saldo de {saldoVitorias} e está no nível de {nivelHeroi}"

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log("Calculadora de Partidas Rankeadas - RANKER");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

function nickname(name){
    name  = "Redentor"
    return name
}

let name = nickname();

console.log("Olá " + name + " Seja bem vindo(a)!");

function partidas(vitoria, derrota){
    const saldoVitorias = vitoria - derrota;
    let nivel;
    console.log("Você venceu " + vitoria + " partidas e perdeu " + derrota + " partidas.");

if (saldoVitorias <= 10) {
    nivel = "Ferro"
    }
    else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze"
    }
    else if (saldoVitorias >= 21 && saldoVitorias <= 50){
        nivel = "Prata"
    }
     else if (vitoria >= 51 && vitoria <= 80) {
        nivel = "Ouro"
    } 
    else if (vitoria >= 81 && vitoria <= 90) {
        nivel = "Diamante"  
    } 
    else if (vitoria >= 91 && vitoria <= 100) {
        nivel = "Lendário"
    } 
    else  {
        nivel = "Imortal"
    }

return "O herói " + name + " tem um saldo de " + saldoVitorias + " vitórias e está no nível " + nivel + ".";
}

console.log(partidas(14,4));