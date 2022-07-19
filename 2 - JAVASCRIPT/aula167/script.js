var valor = parseInt(prompt('Escolha uma opção entre 1, 2 ou 3: '))

switch (valor) {

    case 1:
        document.write('Legal! Você escolheu a 1º opção.')
        break
    case 2:
        document.write('Legal! Você escolheu a 2º opção.')
        break
    case 3:
        document.write('Legal! Você escolheu a 3º opção.')
        break
    default:
        document.write('Opção não disponível. Escolha novamente uma opção entre 1, 2 ou 3!')
        break
}