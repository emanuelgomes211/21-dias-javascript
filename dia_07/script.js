'use strict'

//Exercício 01
// let totalAlunos = 0;
// let mediaGeral = 0;
// let qtdHomens = 0;
// let qtdMulheresAcima7 = 0;
// let maiorNotaHomens = 0;

// let condicao = true;
// while (condicao) {
//     let nota = parseInt(prompt("Insira sua nota"));
//     let sexo = prompt("Insira seu sexo (m/f)");

//     if (sexo === "m") {
//         if (nota > maiorNotaHomens) {
//             maiorNotaHomens = nota;
//         }

//         qtdHomens++;
//     } else if (nota > 7 && sexo === "f") {
//         qtdMulheresAcima7++;
//     }

//     let outraNota = prompt("Deseja cadastrar outra nota?");
//     if (outraNota === "n") {
//         condicao = false;
//     }

//     totalAlunos++;

//     mediaGeral += nota / totalAlunos;
// }

// console.log("Média Geral: " + mediaGeral);
// console.log("Qtd Homens: " + qtdHomens);
// console.log("Qtd Mulheres com nota acima de 7: " + qtdMulheresAcima7);
// console.log("Maior Nota entre os Homens: " + maiorNotaHomens);

//Exercício 02
let saldoTotal = 3500;
let maiorValorInserido = 0;
let mediaValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;

let condicao = true;
do {
    let nome = prompt("Insira seu nome");
    let opcao = parseInt(prompt("\n1 - Saque \n2 - Depósito"));
    let valor = parseInt(prompt("Insira um valor de operação"));

    if(valor <= 0){
        console.log("Não é permitido realizar operações com valores menores ou iguais a zero.")
    }else if(opcao === 1 && valor <= saldoTotal){
        if(valor > saldoTotal){
            console.log("Não é possível sacar um valor maior do que o saldo!")
        }else{
            saldoTotal -= valor;
        }
    }else if(opcao === 2){
        saldoTotal += valor;
    }

    if(valor > maiorValorInserido){
        maiorValorInserido = valor;
    }

    totalTransacoes++;
    somaValoresInseridos += valor;

    mediaValorInserido = somaValoresInseridos / totalTransacoes;


    let continuar = parseInt(prompt("Insira 1 para realizar outra operação"));
    if (continuar != 1) {
        condicao = false;
    }

} while (condicao)

console.log(`Olá, ${nome}, seu saldo atual é: ${saldoTotal}`)
console.log("Maior Valor Inserido: " + maiorValorInserido);
console.log("Média dos Valores Inseridos: " + mediaValorInserido);
console.log("Total de Transações realizadas: " + totalTransacoes);