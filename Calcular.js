console.log("Olá amigo, bem vindo a minha calculadora !!")

function tela(){

let calculeN1 = Number(prompt("Calcule o primeiro número aqui:"));

let sinal = prompt("Digite os sinais + - x / % aqui:");

let calculeN2 = Number(prompt("Calcule o segundo número aqui:"));

let resultado;

if(sinal == "+") {
    resultado = calculeN1 + calculeN2;
}

else if(sinal == "-") {
    resultado = calculeN1 - calculeN2;
}

else if(sinal == "x") {
    resultado = calculeN1 * calculeN2;
}

else if(sinal == "/") {
    resultado = calculeN1 / calculeN2;
}

else if(sinal == "%") {
    resultado = calculeN1 * calculeN2 / 100;
}

// Document feito com IA, ainda estou aprendendo a usar o document.
  
document.getElementById("resultado").innerText =
    "Resultado: " + resultado;

}

tela();
