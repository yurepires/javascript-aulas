var calcular = require("./calculadora")

var {soma, subtracao} = require("./calculadora")

function equacao(a, b, operacao){
    return a + b * operacao(a, b)
}

function acao(x, y){
    return x + (y * y)
}

console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa " + calcular.subtracao(2, 4) + " " + soma(10, 5) + " " + equacao(2, 9, soma) + " " + equacao(5, 6, acao) + " " + equacao(10, 5, function(x,y){return x + (y*y)}) + " " + equacao(3, 4, (x,y) => {return x + (y*y)}))