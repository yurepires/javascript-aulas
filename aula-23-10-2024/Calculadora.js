function adicao(a, b){
    return a + b
}

function subtracao(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

function dividir(a, b){
    return a / b
}

function clicouSoma(){
    let v1 = document.getElementById("v1").value
    let v2 = document.getElementById("v2").value

    document.getElementById("resultado").value = adicao(parseFloat(v1), parseFloat(v2))
}