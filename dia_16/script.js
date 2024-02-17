//Exercício 01
const nomes = [];
const senhas = [];

//função para realizar uma solicitação
function solicitacao() {
    let opcao = parseInt(prompt("\n1 - Cadastrar \n2 - Login \n3 - Excluir Cadastro \n4 - Encerrar Operação"))
    return opcao;
}

//função para cadastrar um usuário
function cadastrarUsuario() {
    nomes.push(prompt("Insira seu nome de cadastro"));
    senhas.push(prompt("Insira sua senha para cadastro"));
}

//função para efetuar login
function fazerLogin(nome, senha) {
    const indice = nomes.indexOf(nome);
    if (indice !== -1 && senhas[indice] === senha) {
        return true;
    } else {
        return false;
    }
}

//função para exclusão de cadastro
function excluirCadastro(nome) {
    const indice = nomes.indexOf(nome)
    if (indice !== -1) {
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log(`Usuário ${nome} excluído com sucesso!`)
    }else{
        console.log("Usuário não encontrado!")
    }
}

//fluxo de funcionamento
let continuar = true;
while (continuar) {
    let opcao = solicitacao();
    switch (opcao) {
        case 1:
            cadastrarUsuario();
            console.log("Usuário cadastrado com sucesso!");
            break;
        case 2:
            let nomeLogin = prompt("Insira o nome para login!");
            let senhaLogin = prompt("Insira a senha para login!");
            let login = fazerLogin(nomeLogin, senhaLogin)
            if (login) {
                console.log("Login concluído com sucesso!")
            } else {
                console.log("Usuário ou senha incorreta!")
            }
            break;
        case 3:
            let nomeExcluir = prompt("Insira o nome a ser excluído!");
            excluirCadastro(nomeExcluir)
            break;
        case 4:
            continuar = false;
            break;
        default:
            console.log("Opção Inválida!")
            break;
    }
}