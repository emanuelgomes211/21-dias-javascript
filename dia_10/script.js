//Exercício 01
// const array = [];
// const indices = [];
// let contador = 0;

// const numInt = parseInt(prompt("Insira um número inteiro e positivo"));

//Populando o array
// for(let i = 0; i < 10; i++){
//     let numeros = parseInt(prompt(`Insira até 10 números: ${i + 1}`));
//     array[contador] = numeros;
//     contador++;
// }

//Buscando os índices do array
// for(let i = 0; i < array.length; i++){
//     if(numInt === array[i]){
//         indices[i] = i;
//         console.log(`O número ${numInt} está no índice ${indices[i]}`)
//     }
// }

//Exercício 02
// const arrayCinco = [];
// const arrayInvertido = [];

//Populando um array com até 5 números
// for(let i = 0; i < 5; i++){
//     let numInt = parseInt(prompt(`Insira até 5 números: ${i + 1}`));
//     arrayCinco[i] = numInt;
// }

//Exibindo o array modo contrário
// let contador = 4;
// for(let i = 0; i < arrayCinco.length; i++){
//     arrayInvertido[contador] = arrayCinco[i]
//     contador--;
// }

// console.log(`Array Original: ${arrayCinco}`)
// console.log(`Array Invertido: ${arrayInvertido}`)

//Exercício 03
// const arrayOriginal = [];
// const arrayInvertido = [];

//Definindo o tamanho do array e populando o array
// const tamanho = parseInt(prompt("Insira quantos elementos o array terá:"));

// for(let i = 0; i < tamanho; i++){
//     const elementos = parseInt(prompt(`Insira o elemento: ${i + 1}`));
//     arrayOriginal[i] = elementos;
// }
//Invertendo o array
// let contador = tamanho - 1;
// for(let i = 0; i < arrayOriginal.length; i++){
//     arrayInvertido[contador] = arrayOriginal[i];
//     contador--;
// }

// console.log(`Array Original: ${arrayOriginal}`)
// console.log(`Array Invertido: ${arrayInvertido}`)

//Exercício 04
// const numInt = parseInt(prompt("Insira o primeiro número"));

// const fibonacci = [];
// fibonacci[0] = numInt - 1;
// fibonacci[1] = numInt;
// for (let i = 2; i < 10; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }
// console.log(fibonacci);