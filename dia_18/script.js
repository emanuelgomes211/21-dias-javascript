class Livro {
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade

    constructor(titulo, autor, editora, anoPublicacao) {
        this.Titulo = titulo;
        this.Autor = autor;
        this.Editora = editora;
        this.AnoPublicacao = anoPublicacao;
        this.Disponibilidade = true;
    }
}


let livros = [];

livros.push(new Livro("titulo1", "autor1", "editora1", 2001, true));
livros.push(new Livro("titulo2", "autor2", "editora2", 2002, true));
livros.push(new Livro("titulo3", "autor3", "editora3", 2003, true));

class Biblioteca {
    Nome
    Endereco
    Telefone
    Acervo

    constructor(nome, endereco, telefone) {
        this.Nome = nome;
        this.Endereco = endereco;
        this.Telefone = telefone;
        this.Acervo = [];
    }

    buscarLivro(nome) {
        livros.forEach((livro) => {
            if (livro.Titulo === nome) {
                console.log("Título: " + livro.Titulo)
                console.log("Autor: " + livro.Autor)
                console.log("Ano: " + livro.AnoPublicacao)
                console.log("Disponibilidade: " + livro.Disponibilidade)
            }
        })
    }

    emprestimoLivro(nome) {
        let emprestado = false;
        for (let i = 0; i < livros.length; i++) {
            if (livros[i].Titulo === nome) {
                if (livros[i].Disponibilidade) {
                    livros[i].Disponibilidade = false;
                    emprestado = true;
                }
            }
        }

        if(emprestado){
            return true;
        }else{
            return false;
        }
    }

    devolucaoLivro(nome){
        for(let i = 0; i < livros.length; i++){
            if(livros[i].Titulo === nome){
                if(!livros[i].Disponibilidade){
                    livros[i].Disponibilidade = true;
                }
            }
        }
    }
}

let biblioteca = new Biblioteca("Allianz", "Avenida", 9999);
biblioteca.buscarLivro("titulo1")
biblioteca.emprestimoLivro("titulo1")
biblioteca.emprestimoLivro("titulo2")
biblioteca.devolucaoLivro("titulo2")