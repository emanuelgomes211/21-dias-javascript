'use strict'

let operacao = parseInt(prompt("\n1 - Adição \n2 - Subtração \n3- Multiplicação \n4 - Divisão \n5 - Exponenciação"))
let num1 = parseInt(prompt("Insira o primeiro número"));
let num2 = parseInt(prompt("Insira o segundo número"));

let resultado;

function calculadora(n1, n2, operador) {
    if (operador === 1) {
        resultado = n1 + n2;
    } else if (operador === 2) {
        resultado = n1 - n2;
    } else if (operador === 3) {
        resultado = n1 * n2;
    } else if (operador === 4) {
        resultado = n1 / n2;
    } else if (operador === 5) {
        resultado = 1;
        for (let i = 0; i < num2; i++) {
            resultado *= num1;
        }
    }

    if(resultado === undefined || resultado > 1000000){
        resultado = "ERRO"
    }

    return resultado;
}

let calculo = calculadora(num1, num2, operacao)
console.log(calculo)