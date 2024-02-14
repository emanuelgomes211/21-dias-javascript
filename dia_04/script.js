'use strict'

//Primeiro Exercício

// let fome = prompt("Você está com fome? (s/n)");
// let dinheiro = prompt("Você tem dinheiro? (s/n)");
// let restaurante = prompt("O restaurante está aberto? (s/n)");

// if(fome === "n" || dinheiro === "n"){
//     console.log("Hoje a janta será em casa")
// }else if(fome === "s" && dinheiro === "s" && restaurante === "n"){
//     console.log("Peça um delivery")
// }else{
//     console.log("Hoje o jantar será no seu restaurante favorito!")
// }

//Segundo Exercício
let nome = prompt("Insira seu nome");
let idade = parseInt(prompt("Insira sua idade"));
let carta = prompt("Você possui carta de motorista? (s/n)");
let carro = prompt("Você possui um carro? (s/n)");

if(idade < 18 || carta === "n"){
    console.log(nome + ", você não pode dirigir.")
}else if(idade >= 18 && carta === "s" && carro === "n"){
    console.log(nome + ", você pode dirigir mas não tem um carro.")
}else{
    console.log(nome + ", você será o motorista!")
}
