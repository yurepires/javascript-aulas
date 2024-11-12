
function calculoNeuronio(x, funcaoAtivacao){
    for(let i=0; i < x.length; i++){
        v += (x[i] * Math.random())
    }
    return funcaoAtivacao(v)
}


//professor
function calculo_neuronio(X, ativacao){
    var W = treinamento(X.length)
    var v = 0
    for(let i=0; i < X.length; i++){
        v += (X[i] * W[i])
    }
    return ativacao(v)
}

function treinamento(n){
    var W = []
    for(let i=0; i < n; i++){
        W.push(Math.random())
    }
    return W
}

export default {calculoNeuronio, calculo_neuronio}