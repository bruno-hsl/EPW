//13/09/24
//estrutura de controle: switch-case

//exemplo

let op = prompt("operação: soma ou divisão");
let num1 = parseFloat(prompt("Número 1"));
let num2 = parseFloat(prompt("número 2"));

let resultado;

switch (op.toLowerCase()){
    case "soma":
        resultado = num1 + num2;
        break;

    case "divisao":
        if(num2 != 0 ){
            resultado = num1 / num2;
        }
        else{
            resultado = "Não é possivel dividir por 0";
        }
        break;
        default:
            resultado = "operação invalida";
        break;
}

document.write("resultado:" + resultado);