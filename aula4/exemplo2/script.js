var botao = document.getElementById("converterButton");

botao.onclick = function(){// var deve ser utilizado dentre de função

    var temperatura = parseFloat(document.getElementById("temperatura").value);

    var tipoConversao = document.getElementById("conversao").value;

    var resultado = document.getElementById("resultado");
    
    var resultadoConversao;

    switch (tipoConversao){
        case "cf":
            resultadoConversao = ((temperatura * 9)/5) + 32;
            resultado.textContent = temperatura + "°C é igual a " + resultadoConversao.toFixed(2) + "°f";
            break;
        case "fc":
            resultadoConversao = ((temperatura - 32)/1.8)
            resultado.textContent = temperatura + "°f é igual a " + resultadoConversao.toFixed(2) + "°c";
            break;
        default:
                resultadoConversao = "invalido";
            break;
    }

}