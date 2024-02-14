'use strict'

//Exercício 01

// let continuar = true;
// while (continuar) {
//     let nome = prompt("Insira seu nome");
//     let idade = Number(prompt("Insira sua idade"));
//     let peso = Number(prompt("Insira seu peso"));
//     let altura = Number(prompt("Insira sua altura"));
//     let profissao = prompt("Insira sua profissão");

//     if (idade >= 18) {
//         console.log("Está liberado para tomar umas geladas!")
//     } else {
//         console.log("Sem gelada para você!")
//     }

//     console.log(`Olá, ${nome}, você tem ${idade}, possui ${peso}Kg, tem ${altura}cm de altura e é ${profissao}`)

//     let idadeMes = idade * 12;
//     let idadeSemana = idade * 52;
//     let idadeDias = idade * 365;

//     console.log(`Idade em meses: ${idadeMes}`)
//     console.log(`Idade em Semanas: ${idadeSemana}`)
//     console.log(`Idade em Dias: ${idadeDias}`)


//     let IMC = peso / (altura * altura);
//     if (IMC < 18.5) {
//         console.log("Magreza")
//     } else if (IMC >= 18.5 && IMC <= 24.9) {
//         console.log("Normal")
//     } else if (IMC > 24.9) {
//         console.log("Sobrepeso")
//     } else {
//         console.log("Obesidade")
//     }

//     let anoNascimento = 2024 - idade;

//     let idadeAtual = 0;
//     let anosVividos = anoNascimento;

//     for (let anosVividos = anoNascimento; anosVividos <= 2024; anosVividos++) {
//         console.log(anosVividos + " - " + idadeAtual + " anos de idade");
//         idadeAtual++;
//     }

//     let desejaContinuar = prompt("Deseja continuar? (s/n)")
//     if(desejaContinuar === "n"){
//         continuar = false;
//     }

// }

//Exercício 02

let continuar = true;
while(continuar){
    let nome = prompt("Insira seu nome");
    let idade = Number(prompt("Insira sua idade"));
    let salario = Number(prompt("Insira seu salário"));

    let confirme = prompt("Seus dados estão corretos? (s/n)")
    if(confirme === "s"){
        continuar = false;
    }

    console.log(`Olá, ${nome}, você tem ${idade} anos de idade e seu salário atual é ${salario}`)

    let anoAtual = 2024;

    let aumento = 0.015;
    console.log("Aumento dos próximos anos:")
    for(let i = 1; i <= 10; i++){
        salario += salario * aumento;
        aumento *= 2;
        anoAtual++;
        console.log(anoAtual + " - " + salario);
    }

}