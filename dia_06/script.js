'use strict'

//Exercício 01
// let numInteiro = parseInt(prompt("Insira um número inteiro e positivo"));
// for(let i = 0; i <= numInteiro; i++){
//     console.log(i)
// }

//Exercício 02
// for(let i = 0; i <= 10; i++){
//     console.log(i * 5)
// }

//Exercício 03 (Contagem Inversa)
// for(let i = 50; i >= 0; i-=5){
//     console.log(i)
// }

//Exercício 04
let num = parseInt(prompt("Insira um número"));
for (let i = 0; i < 3; i++) {

    console.log("Número " + num + ":");
    for (let j = 1; j <= 10; j++) {
        console.log(num + " x " + j + " = " + (num * j))
    }
    num++;
}