//Exercício 01

//Função para coletar os dados do colaborador
function coletarDados(){
    const nome = prompt("Insira seu nome");
    const salario = parseFloat(prompt("Insira seu salário"));

    calcularAumento(nome, salario)
}

//Função para calcular o aumento do salário do colaborador
function calcularAumento(nome, salario){
    let aumento = 0;
    if(salario <= 1500){
        aumento = 0.2;
    }else if(salario <= 2000){
        aumento = 0.15;
    }else if(salario <= 3000){
        aumento = 0.1;
    }else{
        aumento = 0.05;
    }

    const novoSalario = salario + (salario * aumento);
    const porcentagem = aumento * 100;

    console.log(`Olá, ${nome}, seu salário atual é de ${salario}, ele reajustado foi para: ${novoSalario} e o aumento foi de ${porcentagem}%`)
    calcularNovamente()
}

//Função para recacular
function calcularNovamente(){
    let recalcular = prompt("Deseja recalcular novamente com NOVAS informações? (s/n)")
    if(recalcular === "s"){
        coletarDados()
    }
}

coletarDados()