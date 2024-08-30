var botao = document.getElementById("imprimirButton");

botao.onclick = function(){
    var qtde = document.getElementById("qtdeInput").value;
    console.log(qtde)

    var resultado = document.getElementById("resultado");
    var numeros = "";

   

    //laço de repeticao

    for (var i = 1; i <=qtde; i++){

        if(i % 2 == 0){
            numeros += i + " ";
            
        }
    }

    resultado.textContent = numeros;
}
