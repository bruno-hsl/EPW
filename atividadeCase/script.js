function calcularSalario() {
    // Obtém valores do formulário
    let salario = parseFloat(document.getElementById('salario').value);
    let cargo = document.getElementById('cargo').value;
    let percentual = 0;
    let salarioFinal = 0;

    // Controle de ações usando switch-case
    switch (cargo) {
        case 'diretor':
            percentual = 10;
            break;
        case 'secretario':
            percentual = 20;
            break;
        case 'operador':
            percentual = 30;
            break;
        default:
            percentual = 0;
    }

    salarioFinal = salario + (salario * (percentual / 100));

    document.getElementById('resultado').innerHTML = `
        <p><strong>Salário Atualizado:</strong> R$ ${salarioFinal.toFixed(2)}</p>
        <p><strong>Percentual Aplicado:</strong> ${percentual}%</p>`;
}
