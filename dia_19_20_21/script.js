//Projeto Final

class ToDo {
    Texto
    Prioridade
    Feito

    constructor(texto, prioridade) {
        this.Texto = texto;
        this.Prioridade = prioridade;
        this.Feito = false;
    }
}

let toDo = [];

//função para criar tarefas
function criarToDo(texto, prioridade, array) {
    let task = new ToDo(texto, prioridade, array)
    if (!array.some(task => task.Texto === texto)) {
        toDo.push(task)
        console.log(`Tarefa ${task.Texto} criada com sucesso!`)
    } else {
        console.log(`Tarefa ${task.Texto} já existente!!!`)
    }

    return task;
}

//função para atualizar todo
function atualizarTodo(textoAntigo, textoNovo, array) {
    let encontrado = false;
    for (let i = 0; i < array.length; i++) {
        if (textoAntigo === array[i].Texto) {
            array[i].Texto = textoNovo;
            console.log(`Tarefa ${textoAntigo} atualizada para ${textoNovo}`)
            encontrado = true;
        } else {
            console.log("Nenhuma tarefa encontrada!!!!")
        }
    }

    return encontrado;
}

//função para concluir uma task
function concluirToDo(array, texto) {
    let encontrado = false;
    array.forEach(todo => {
        if (todo.Texto === texto) {
            if (todo.Feito) {
                todo.Feito = false;
            } else {
                todo.Feito = true;
            }

            encontrado = true;
        }
    })

    return encontrado;
}

//função para excluir uma task
function excluirToDo(array, texto) {
    let index;
    let removido = false;

    array.forEach(todo => {
        if (todo.Texto === texto) {
            index = array.index(todo)
            removido = true;
        }
    })

    array.splice(index, 1)
    return removido;
}

//função para pesquisar uma task
function pesquisarToDo(array, texto) {
    let encontrado = false;
    array.forEach(todo => {
        if (todo.Texto.includes(texto)) {
            encontrado = true;
        }
    })

    return encontrado;
}

//função para ordenar task ordem crescente
function ordenarCrescente(array) {
    array.sort((a, b) => {
        return a.Prioridade - b.Prioridade;
    })

    return array;
}

//função para ordenar task ordem decrescente
function ordenarDecrescente(array) {
    array.sort((a, b) => {
        return b.Prioridade - a.Prioridade;
    })

    return array;
}


