//função

function calcularSalario(){
    var salarioInicial = parseFloat(document.getElementById("salario").value);

    var cargoSelecionado = document.getElementById("cargo").value;

    var aumento = 0;

    switch(cargoSelecionado){
        case 'diretor':
            aumento = 10;
            break;
        case 'secretario':
            aumento = 20;
            break;
        case 'operador':
            aumento = 30;
            break;
        default:
            aumento = 0
    }
    var novoSalario = aplicarAumento(salarioInicial, aumento);

    document.getElementById("resultado").innerHTML = "salario antigo:" + salarioInicial + "<br>" + "novo salario:" + novoSalario;
}

function aplicarAumento(salario, aumento){
    return salario + (salario * aumento / 100);
}