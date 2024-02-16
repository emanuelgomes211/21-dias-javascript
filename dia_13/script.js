//Exercício 01
// class Computador {
//     Tipo
//     Processador
//     Video
//     Armazenamento
//     MemoriaRam
//     SSD

//     constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
//         this.Tipo = tipo;
//         this.Processador = processador;
//         this.Video = video;
//         this.Armazenamento = armazenamento;
//         this.MemoriaRam = memoriaRam;
//         this.SSD = ssd;
//     }

//     apresentar() {
//         console.log(" === Informações sobre o computador === ")
//         console.log("Tipo: " + this.Tipo)
//         console.log("Processador: " + this.Processador)
//         console.log("Vídeo: " + this.Video)
//         console.log(`Armazenamento: ${this.Armazenamento}GB`)
//         console.log(`Memória RAM: ${this.MemoriaRam}GB`)
//         console.log("SSD: " + this.SSD)
//     }
// }

// const meuPC = new Computador("Notebook", "Ryzen 5", "Integrado", 1000, 16, true)
// meuPC.apresentar()

//Exercício 02
const carros = [];

class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.Nome = nome;
        this.Potencia = potencia;
        this.VelocidadeMaxima = velocidadeMaxima;
        this.Aceleracao = aceleracao
    }

    calculo(distancia) {
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

class Corrida {
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor

    constructor(nome, tipo, distancia) {
        this.Nome = nome;
        this.Tipo = tipo;
        this.Distancia = distancia;
        this.Vencedor = "";
        this.Participantes = [];
    }

    verificarTempo() {
        let menorTempo = this.Participantes[0].calculo(this.Distancia)
        let vencedor = this.Participantes[0];

        for(let i = 0; i < this.Participantes.length; i++){
            let tempo = this.Participantes[i].calculo(this.Distancia)
            if(tempo < menorTempo){
                tempo = menorTempo;
                vencedor = this.Participantes[i]
            }
        }

        return this.Vencedor = vencedor;
    }

    exibirVencedor(){
        alert(`O vencedor foi ${this.Vencedor.Nome}`)
    }
}

const corrida = new Corrida("Alianz", "F1", 60000)

corrida.Participantes[0] = new Carro("F1", 120, 300, 15)
corrida.Participantes[1] = new Carro("Lamborguini", 100, 200, 20)
corrida.Participantes[2] = new Carro("BMW", 320, 320, 15)

corrida.verificarTempo()
corrida.exibirVencedor()
