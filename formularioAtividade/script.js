var botao = document.getElementById('verificarButton');

botao.onclick = function(){
    var data = document.getElementById('dataInput').value;
    //console.log(idade);

    var resultado = document.getElementById('resultado');

    idade = 2024 - data;

    resultado.textContent = `Idade: ${idade} anos`;

}