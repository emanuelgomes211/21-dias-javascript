//Exercício 01
// const alunos = [];
// const notas = [];
// let contador = 0;

// let somaNotas = 0;
// let mediaGeral = 0;
// let totalAlunos = 0;

// let continuar = true;
// while(continuar){
//     const nome = prompt("Insira seu nome");
//     const nota = parseInt(prompt("Insira sua nota"));
    
//     alunos[contador] = nome;
//     notas[contador] = nota;
//     contador++;

//     totalAlunos++;

//     let desejaParar = parseInt(prompt("Insira 1 para encerrar"));
//     if(desejaParar === 1){
//         continuar = false;
//     }

//     somaNotas += nota;

//     mediaGeral = somaNotas / totalAlunos;
    
// }

// for(let i = 0; i < alunos.length; i++){
//     console.log(`Aluno: ${alunos[i]}, Nota: ${notas[i]}`)
// }

// console.log(`Soma das notas: ${somaNotas}`);
// console.log(`Média Geral da Turma: ${mediaGeral}`)

//Exercício 02
const modelos = [];
const anos = [];
const valores = [];

let contador = 0;

let continuar = true;
while(continuar){
    const modelo = prompt("Insira o modelo do carro");
    const ano = parseInt(prompt("Insira o ano do carro"));
    const valor = parseFloat(prompt("Insira o valor do carro"));

    modelos[contador] = modelo;
    anos[contador] = ano;
    valores[contador] = valor;
    
    contador++;

    let inserirMais = prompt("Deseja inserir novamente? (s/n)")
    if(inserirMais === "n"){
        continuar = false;
    }
}

//Exibindo Informações
console.log("Exibindo informações")
for(let i = 0; i < modelos.length; i++){
    console.log(`${modelos[i]}, ${anos[i]} Valor: ${valores[i]}`)
}

//Ordenando
for (var i = 0; i < valores.length; i++) {
    for (var j = 0; j < (valores.length - i - 1); j++) {
        if (valores[j] > valores[j + 1]) {
            let modeloTmp = modelos[j];
            modelos[j] = modelos[j + 1];
            modelos[j + 1] = modeloTmp;

            let anoTmp = anos[j];
            anos[j] = anos[j + 1];
            anos[j + 1] = anoTmp;

            let valorTmp = valores[j];
            valores[j] = valores[j + 1];
            valores[j + 1] = valorTmp;
        }
    }
}

//Exibindo Ordenado
console.log("Exibindo de forma Ordenada:")
for(let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " +  anos[i] + " - "  + valores[i])
}