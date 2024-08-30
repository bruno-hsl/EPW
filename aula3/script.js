console.log("foi");

//for
//exemplo1_EXIBIR NUMERO DE 1 A 5
//for(var i = 1; i <= 5; i++){
    //console.log(i);
 //   document.write(i + "<br>")
//}

//exemplo2_ criar um programa  que solicita ao usuario uma quantidade especifica de numeros
//let quantidade = prompt("qtde denumeros");
//for(let i =1; i <= quantidade; i++){
//    document.write(i + "<br>")
//}

// let limite = parseInt(prompt("Digite um valor limite:"));
// let soma = 0;
// for(let i = 1; i <= limite; i++){
//     let numero = +prompt("numero");
//     document.write("numero: " + numero + "<br>");
//     soma +=numero;
// }

// document.write("soma dos números: " + soma);


//exemplos com while
//exemplo1
// let contador = 1;

// document.write("Numeros de 1 a 5");

// while(contador <= 5){
//     document.write("<br>" + contador);
//     contador++;
// }

//exemplo 2

let soma = 0;
let numero = 0;
let numeroDigitado = "";

while(numero >= 0){
    numero = parseFloat(prompt("digite um numero para somar ou um numero negativo para encerrar"));
    if(numero >=0){
        soma += numero;
        numeroDigitado += "<b>" + numero;

    }
}

document.write("numeros digitados" + numeroDigitado + "<br>");
document.write("soma" + soma);