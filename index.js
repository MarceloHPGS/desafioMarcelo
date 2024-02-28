console.log("-----------------------");
console.log("Classificador de Heróis");
console.log("-----------------------");
let nickname = "Marcelino Pão e Vinho"
console.log("Seja Bem vindo(a)!");
let xpHeroi = "7001";
let nivelHeroi;
console.log("Obrigado por inserir seus dados!")
console.log("--------------------------------")
console.log("             Classificando . . .");
console.log("--------------------------------")

if(xpHeroi < 1000){
    nivelHeroi = "Ferro";
} else if(xpHeroi > 1000 && xpHeroi <= 2000){
    nivelHeroi = "Bronze";
} else if(xpHeroi > 2000 && xpHeroi <= 5000){
    nivelHeroi = "Prata";
} else if(xpHeroi > 5000 && xpHeroi <= 7000){
    nivelHeroi = "Ouro";
}else if(xpHeroi > 7000 && xpHeroi <= 8000){
    nivelHeroi = "Platina";
}else if(xpHeroi > 8000 && xpHeroi <= 9000){
    nivelHeroi = "Ascendente";
}else if(xpHeroi > 9000 && xpHeroi <= 10000){
    nivelHeroi = "Imortal";
}else{
    nivelHeroi = "Radiante";
}

console.log("");
console.log("O Herói " + nickname + ", está no nível " + xpHeroi + ", sendo classificado como: " + nivelHeroi + "!");
console.log("");
console.log("Obrigado por usar o nosso classificador!");
console.log("Até a próxima!");