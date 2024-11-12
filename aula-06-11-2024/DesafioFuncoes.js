const sigmoide = (v) => {
    return 1 / (1 + Math.exp(-v))
}

const tangenteHiperbolica = (v) => {
    return (Math.exp(v) - Math.exp(-v) / (Math.exp(v) + Math.exp(-v)))
}

const relu = (v) => {
    if(v > 0) return v
    else return 0
}

export default {sigmoide, tangenteHiperbolica, relu}