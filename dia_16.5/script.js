class Aluno {
    Nome
    Idade
    Nota

    constructor(nome, idade, nota) {
        this.Nome = nome;
        this.Idade = idade;
        this.Nota = nota;
    }
}

//Array para cadastrar alunos
let alunos = [];

//função para cadastrar alunos
function cadastrarAlunos(nome, idade, nota, array) {
    let objAluno = new Aluno(nome, idade, nota)
    if (!array.some(objAluno => objAluno.Nome === nome)) {
        array.push(objAluno)
        console.log(`Aluno ${nome} cadastrado`)
    } else {
        console.log(`Aluno ${nome} já cadastrado`)
    }

    return objAluno;
}

//função para ordenar nota da menor pra maior
function ordenarPorNota(array) {
    array.sort((a, b) => {
        return a.Nota - b.Nota;
    })

    return array;
}

//função para ordenar por idade da maior para a menor
function ordenarPorIdade(array) {
    array.sort((a, b) => {
        return b.Idade - a.Idade;
    })

    return array;
}

cadastrarAlunos("Emanuel", 23, 10, alunos)
cadastrarAlunos("Abel", 21, 6.5, alunos)
cadastrarAlunos("Kaka", 8, 3, alunos)


//função para ordenar por nome em ordem alfabética
function ordenarPorNome(array) {
<<<<<<< HEAD
    array.sort((a, b) => {
        const nomeA = a.Nome.toUpperCase();
        const nomeB = b.Nome.toUpperCase();

        if (nomeA < nomeB) {
            return -1;
        }

        if (nomeA > nomeB) {
=======
    array.sort((a,b) =>{
        const nomeA = a.Nome.toUpperCase();
        const nomeB = b.Nome.toUpperCase();

        if(nomeA < nomeB){
            return -1;
        }

        if(nomeA > nomeB){
>>>>>>> a5ebaebdb6e94873c146a5e8ba617df249e8522b
            return 1;
        }

        return 0;

    })

<<<<<<< HEAD
    return array;
}

//função para calcular a media
function calcularMedia(array) {
    if (array.length === 0) {
=======
    return array;   
}

//função para calcular a media
function calcularMedia(array){
    if(array.length === 0){
>>>>>>> a5ebaebdb6e94873c146a5e8ba617df249e8522b
        return 0;
    }

    let somaNotas = 0;

<<<<<<< HEAD
    array.forEach(aluno => {
        somaNotas += Number(aluno.Nota)
        return somaNotas;
=======
    array.forEach(element => {
        somaNotas += Number(element.Nota);
>>>>>>> a5ebaebdb6e94873c146a5e8ba617df249e8522b
    });

    const media = somaNotas / array.length;
    console.log(media)
<<<<<<< HEAD
    return media
=======
    return media;
>>>>>>> a5ebaebdb6e94873c146a5e8ba617df249e8522b
}

// ordenarPorNota(alunos)
// ordenarPorIdade(alunos)
ordenarPorNome(alunos)
calcularMedia(alunos)