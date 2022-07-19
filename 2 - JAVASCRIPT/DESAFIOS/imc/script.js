var nome = window.prompt('Digite o seu nome completo, por favor: ')
var altura = parseFloat(window.prompt('Insira a sua altura em CM: '))
var massa = parseFloat(window.prompt('Insira o seu peso em KG: '))

altura /= 100
var imc = massa / altura**2
var grau = undefined

if (imc < 16) {
    grau = 'quadro de desnutrição gravíssimo'
} else if (imc >= 16 && imc < 17) {
    grau = 'quadro de desnutrição grave'
} else if (imc >= 17 && imc < 18.5) {
    grau = 'quadro abaixo do peso'
} else if (imc >= 18.5 && imc < 25) {
    grau = 'massa corpórea ideal'
} else if (imc >= 25 && imc < 30) {
    grau = 'quadro de sobrepeso'
} else if (imc >= 30 && imc < 35) {
    grau = 'quadro de obesidade grau I'
} else if (imc >= 35 && imc < 40) {
    grau = 'quadro de obesidade grau II'
} else if (imc >= 40) {
    grau = 'quadro de obesidade grau III'
}

document.write(`${nome}, seu índice de massa corporal (IMC) é de ${imc.toFixed(2)} Kg/m², sendo classificado como ${grau}.`)
