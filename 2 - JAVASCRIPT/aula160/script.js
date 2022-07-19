var n1 = parseFloat(prompt('Insira a nota do 1º semestre: '))
var n2 = parseFloat(prompt('Insira a nota do 2º semestre: '))
var n3 = parseFloat(prompt('Insira a nota do 3º semestre: '))
var n4 = parseFloat(prompt('Insira a nota do 4º semestre: '))


var notaFinal = (n1 + n2 + n3 + n4) / 4
var media = 6


if (notaFinal >= media) {
    document.write(`A média final do aluno foi de ${notaFinal}.` + '<br/>')
    document.write('Sendo assim, o aluno foi APROVADO!')
} else {
    document.write(`A média final do aluno foi de ${notaFinal}.` + '<br/>')
    document.write('Sendo assim, o aluno foi REPROVADO!')
}