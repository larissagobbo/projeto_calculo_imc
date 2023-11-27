const peso = 74
altura = 1.71
const IMC = peso / Math.pow(altura, 2) // para fazer operação ao quadrado. // biblioteca.

console.log(IMC)

if (IMC < 18.5) {
    console.log('Você está abaixo do peso.')
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('Seu peso está normal.')
} else if (IMC >= 25 && IMC < 30) {
    console.log('Você está acima do peso.')
} else if (IMC >= 30 && IMC < 40) {
    console.log('Você está obeso.')
} else {
    console.log('Obesidade grave.')
}

