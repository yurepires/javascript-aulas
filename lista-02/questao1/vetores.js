function dobraVetor(vetor){
    var vetorDuplicado = []
    for(let i=0; i < vetor.length; i++){
        vetorDuplicado[i] = vetor[i] * 2
    }
    return vetorDuplicado
}

function somaVetor(vetor, dobra){
    let vetorDobrado = dobra(vetor)
    var soma = []
    for(let i=0; i < vetor.length; i++){
        soma[i] = vetor[i] + vetorDobrado[i]
    }
    return soma
}

var vetor = [3, 5, 7, 10, 12]

export {dobraVetor, somaVetor}