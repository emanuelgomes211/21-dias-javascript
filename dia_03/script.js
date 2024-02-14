'use strict'

let nome = prompt("Insira seu nome");
let idade = parseInt(prompt("Insira sua idade"));
let altura = parseFloat(prompt("Insira sua altura"));
let peso = parseFloat(prompt("Insira seu peso"));

let anoNascimento = 2024 - idade;

let IMC = peso / (altura * altura);

console.log("Olá, " + nome + " você tem " + idade + " anos" + " nasceu em " + anoNascimento + " tem " + altura + "cm de altura" + " pesa " + peso + "Kg" + " seu IMC é " + IMC +" Kg/m2")