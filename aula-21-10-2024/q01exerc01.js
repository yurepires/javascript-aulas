

var x = [0.1, 0.3, 0.4]
var w = [0.25, 0.43, 0.5]

// var x1 = 2, x2 = 3, x3 = 5, w1 = 5, w2 = 6, w3 = 3

<<<<<<< HEAD
var calculoSaida

// calculoSaida = x[0] * w[0] + x[1] * w[1] + x[2] * w[2]


for(let i=0; i < x.length; i++){
    calculoSaida += (x[i] * (w[i]))
}

funcaoAtivacao = 1/(1 + Math.exp(-calculoSaida))
=======
var v

// v = x[0] * w[0] + x[1] * w[1] + x[2] * w[2]


for(let i=0; i < x.length; i++){
    v += (x[i] * (w[i]))
}

funcaoAtivacao = 1/(1 + Math.exp(-v))
>>>>>>> b97638d4b70df15a4f5220b85aa454674186c151

if(funcaoAtivacao >= 0.8){
    console.log("Gato")
}else{
    console.log("Cachorro")
}