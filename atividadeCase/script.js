var botao = document.getElementById("botao");

botao.onclick = function(){
    let salario = parseFloat(document.getElementById("salario").value);
    let cargo = document.getElementById("cargo").value;
    let resultado = document.getElementById("resultado");
    let salarioFinal = 0;
    let percentual = 0;
   

    switch (cargo){
        case 'diretor':
            percentual = 10;
            salarioFinal = salario + (salario*0.1);
            break;
        case 'secretario':
            percentual = 20;
            salarioFinal = salario + (salario*0.2);
            break;
        case 'operador':
            percentual = 30;
            salarioFinal = salario + (salario*0.3);
            break;
            
    }
    resultado.innerHTML = `Salario com reajuste: ${salarioFinal}<br>
    porcentagem de reajuste:${percentual}%`
}
