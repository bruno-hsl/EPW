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

let limite = parseInt(prompt("Digite um valor:"));
let soma = 0;
for(let i = 1; i <= limite; i++){
    let numero = +prompt("numero");
    document.write("numero: " + numero + "<br>");
    soma +=numero;
}

document.write("soma dos números: " + soma);

