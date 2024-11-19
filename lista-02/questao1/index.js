import calc from './vetores.js'

var vetor = [3, 5, 7, 10, 12]

console.log(calc.somaVetor(vetor, (vetor) => {
    let vetorDuplicado = []
    for(let i = 0; i < vetor.length; i++){
        vetorDuplicado[i] = vetor[i] * 2
    }
    return vetorDuplicado
}))