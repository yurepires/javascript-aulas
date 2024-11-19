function buscaLinear(vetor){
    for(let i=0; i < vetor.length; i++){
        let mudou = false
        for(let r = 0; r < vetor.length; r++){
            if(vetor[r] > vetor[r + 1]){
                let temp = vetor[r]
                vetor[r] = vetor[r + 1]
                vetor[r + 1] = temp
                mudou = true
            }
        }
        if(!mudou){
            break
        }
    }
    return vetor
}

function buscaBinaria(vetor){
    for(let i = 0; i < vetor.length; i++){
        for(let r = i + 1; r < vetor.length; r++){
            if(vetor[i] > vetor[r]){
                temp = vetor[i]
                vetor[i] = vetor[r]
                vetor[r] = temp
            }
        }
    }
    return vetor
}


vetor = [64, 25, 12, 22, 11]
vetor2 = [1, 0, 2, 4, 3]

console.log("--- --- --- --- --- --- ---")
console.log("Vetor original: " + vetor)
console.log("Busca Linear: " + buscaLinear(vetor))
console.log("Busca Binaria: " + buscaBinaria(vetor))
console.log("--- --- --- --- --- --- ---")
console.log("Vetor original: " + vetor2)
console.log("Busca Linear: " + buscaLinear(vetor2))
console.log("Busca Binaria: " +  buscaBinaria(vetor2))
console.log("--- --- --- --- --- --- ---")