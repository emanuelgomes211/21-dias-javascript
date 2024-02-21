//Sistema Hotel

//arrays para armazenar os hoteis e as reservas
let hoteis = [];
let reservas = [];
let contadorHotel = 1;
let contadorReserva = 1;

//criando classe Hotel
class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

class Reserva {
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida) {
        this.Id = id;
        this.IdHotel = idHotel;
        this.Responsavel = responsavel;
        this.DiaEntrada = diaEntrada;
        this.DiaSaida = diaSaida;
    }
}

//funcao para cadastrar um hotel
function cadastrarHotel() {
    let id = contadorHotel;
    let nome = prompt("Insira o nome do hotel");
    let categoria = prompt("Insira a categoria do hotel");
    let endereco = prompt("Insira o endereço do hotel");
    let telefone = Number(prompt("Insira o telefone do hotel"));

    let hotel = new Hotel(id, nome, categoria, endereco, telefone);
    contadorHotel++;

    hoteis.push(hotel)

    console.log(`Hotel ${nome} cadastrado com sucesso!`)
}

//função para cadastrar uma reserva
function cadastrarReserva() {
    let idReserva = contadorReserva;

    let existe = false;
    let idHotel;
    do {
        idHotel = Number(prompt("Insira o ID do hotel que deseja reservar"));
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel === hoteis[i].Id) {
                existe = true;
                break;
            } else {
                console.log("Nenhum hotel encontrado. Insira novamente");
            }
        }
    } while (!existe)

    let responsavel = prompt("Insira o nome do responsável pela reserva");

    let diaEntrada = Number(prompt("Insira o dia de Entrada"));
    let diaSaida;
    do {
        diaSaida = Number(prompt("Insira o dia de saída"));
        if (diaSaida < diaEntrada) {
            console.log("O dia de Entrada deve ser menor que o de saída");
        }
    } while (diaSaida < diaEntrada)

    let reserva = new Reserva(idReserva, idHotel, responsavel, diaEntrada, diaSaida);
    contadorReserva++;
    reservas.push(reserva)
}

//função para exibir as reservas do hotel pelo id
function exibirReservas(idHotel) {
    reservas.forEach((reserva => {
        if (reserva.IdHotel === idHotel) {
            const hotel = hoteis.find((hotel) => hotel.Id === idHotel);
            console.log(`Hotel: ${hotel.Nome}`)
            console.log(`Responsável: ${reserva.Responsavel}`);
            console.log(`Dia Entrada: ${reserva.DiaEntrada}`);
            console.log(`Dia Saída: ${reserva.DiaSaida}`);
        }
    }))
}

//função para exibir dados da reserva
function exibirDadosReserva(idReserva) {
    let idHotel = reservas[idReserva -1].IdHotel;
    console.log(`Hotel: ${hoteis[idHotel - 1].Nome}`)
    console.log(`Hotel: ${hoteis[idHotel - 1].Endereco}`)
    console.log(`Dia Entrada: ${reservas[idReserva - 1].DiaEntrada}`)
    console.log(`Dia Saída: ${reservas[idReserva - 1].DiaSaida}`)
}

//função para exibir as reservas de uma pessoa pelo nome
function exibirReservasNome(nome) {
    for (let i = 0; i < reservas.length; i++) {
        if (reservas[i].Responsavel === nome) {
            console.log(`ID Reserva: ${reservas[i].Id}`);
            console.log(`Hotel ${hoteis[(reservas[i].IdHotel) - 1].Nome}`)
        } else {
            console.log(`Nenhuma reserva encontrada no nome de ${nome}`)
        }
    }
}

//função para retornar um array com as categorias do hotel
function retornarCategorias(categoria) {
    let categorias = [];
    for (let i = 0; i < hoteis.length; i++) {
        if (categoria === hoteis[i].Categoria) {
            categorias.push(hoteis[i].Nome);
        }
    }

    return categorias;
}

//função para atualizar o telefone do hotel
function atualizarTelefone(idHotel, novoTelefone) {
    hoteis[idHotel - 1].Telefone = telefone;
    console.log("Telefone atualizado!")
}

//funcao para exibir opções
function exibirOpcoes(){
    let opcao = parseInt(prompt("\n1 - Cadastrar Hotel \n2 - Cadastrar Reserva \n3 - Exibir Reservas Hotel \n4 - Exibir Reservas \n5 - Exibir Reservas nome \n6 - Exibir Categorias \n7 - Atualizar Telefone \n8 - Encerrar Operação"));
    return opcao;
}

let continuar = true;
while(continuar){
    let opcao = exibirOpcoes();
    switch(opcao){
        case 1:
            cadastrarHotel();
            break;
        case 2:
            cadastrarReserva();
            break;
        case 3:
            let idDoHotel = Number(prompt("Insira o id do hotel para exibir as reservas"));
            exibirReservas(idDoHotel);
            break;
        case 4:
            let idDaReserva = Number(prompt("Insira o ID da Reserva para exibir os dados"));
            exibirDadosReserva(idDaReserva);
            break;
        case 5:
            let nomeReserva = prompt("Insira o nome do responsável para ver todas as reservas do mesmo");
            exibirReservasNome(nomeReserva);
            break;
        case 6:
            let categoriaHotel = prompt("Insira a categoria do hotel");
            let hoteisLista = retornarCategorias(categoriaHotel);
            console.log(hoteisLista)
            break;
        case 7:
            let idHotel = Number(prompt("Insira o ID do hotel que deseja atualizar o telefone"));
            let newTelefone = Number(prompt("Insira o novo telefone"));
            atualizarTelefone(idHotel, newTelefone)
            break;
        case 8:
            continuar = false;
            break;
        default:
            console.log("Opção inválida.")
            break;
    }
}