function somarSubtrair (num1, num2, comd) {
    var resultado = 0
    if (comd == '+') {
        resultado = num1 + num2
    } else if (comd == '-') {
        resultado = num1 - num2
    }
    return resultado
}

var res = somarSubtrair(num1, num2, comd)

var num1 = parseInt(window.prompt('Insira o primeiro valor: '));
document.write('O primeiro valor é: ', num1, '<br/>')

var comd = window.prompt('Escolha "+" ou "-": ');

var num2 = parseInt(window.prompt('Insira o segundo valor: '));
document.write('O segundo valor é: ', num1, '<br/>')

if (comd == '+') {
    document.write('Operação escolhida: SOMA.', '<br/>')
} else if (comd == '-') {
    document.write('Operação escolhida: SUBTRAÇÃO.', '<br/>')
} else {
    document.write('Comando inválido! Por favor, escolha apenas "+" ou "-". ')
}

document.write(`O resultado será: ${res}`)