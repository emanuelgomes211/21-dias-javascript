//Exercício 01
let nomes = [];
let senhas = [];
let contador = 0;

let continuar = true;
while (continuar) {
    let opcao = parseInt(prompt("\n1 - Cadastrar \n2 - Login \n3 - Excluir Cadastro \n4 - Encerrar Programa"));

    switch (opcao) {
        case 1:
            const nome = prompt("Insira o nome para cadastro");
            const senha = prompt("Insira a senha para cadastro");

            nomes[contador] = nome;
            senhas[contador] = senha;
            contador++;
            break;
        case 2:
            const nomeLogin = prompt("Insira o nome para login");
            const senhaLogin = prompt("Insira a senha para login");
            let loginValido = false;

            for (let i = 0; i < nomes.length; i++) {
                if (nomeLogin === nomes[i] && senhaLogin === senhas[i]) {
                    loginValido = true;
                }
            }

            if (loginValido) {
                console.log("Login concluído com sucesso!")
            } else {
                console.log(`Usuário ${nomeLogin} não encontrado!`);
            }
            break;
        case 3:
            const nomeExcluir = prompt("Insira o nome para excluir");
            let nomeSup = [];
            let senhaSup = [];
            let contSup = 0;

            for (let i = 0; i < contador; i++) {
                if (nomeExcluir == nomes[i]) {
                    alert("Cadastro excluído com sucesso")
                }else{
                    nomeSup[contSup] = nomes[i]
                    senhaSup[contSup] = senhas[i]
                    contSup++
                }
            }

            nomes = nomeSup;
            senhas = senhaSup;
            contador--;

            break;
        case 4:
            continuar = false;
            console.log("Operação Encerrada!")
            break;
        default:
            console.log("Opção Inválida!");
            break;

    }
}