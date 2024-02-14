'use strict'

//Exercício 01
// let opcao = parseInt(prompt(" \n1 - Adição \n2 - Subtração \n3 - Multiplicação \n4 - Divisão \n5 - Potenciação"))

// let numA = parseInt(prompt("Insira o primeiro número"));
// let numB = parseInt(prompt("Insira o segundo número"));

// switch (opcao) {
//     case 1:
//         console.log(numA + " + " + numB + " = " + (numA + numB))
//         break;
//     case 2:
//         console.log(numA + " - " + numB + " = " + (numA - numB))
//         break;
//     case 3:
//         console.log(numA + " * " + numB + " = " + (numA * numB))
//         break;
//     case 4:
//         console.log(numA + " / " + numB + " = " + (numA / numB))
//         break;
//     case 5:
//         console.log(numA + " ** " + numB + " = " + (numA ** numB))
//         break;
//     default:
//         console.log("Opção inválida");
//         break;
// }

//Exercício 02


let opcao = parseInt(prompt("\n1 - Abastecer com Gasolina \n2 - Abastecer com Álcool \n3 - Calibrar Pneus"))

let litroGasolina = 5;
let litroAlcool = 3;

let valorDesejado;
let valorTotal;

switch (opcao) {
    case 1:
        valorDesejado = parseInt(prompt("Insira o valor que deseja abastecer!"))
        console.log("Litros abastecidos em gasolina: " + ( valorTotal = valorDesejado * litroGasolina))
        break;
    case 2:
        valorDesejado = parseInt(prompt("Insira o valor que deseja abastecer!"))
        console.log("Litros abastecidos em álcool: " + ( valorTotal = valorDesejado * litroAlcool))
        break;
    case 3:
        console.log("Pneus calibrados com sucesso")
        break;
    default:
        console.log("Opção Inválida")
        break;
}
