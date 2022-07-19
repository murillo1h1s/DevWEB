var n1 = parseFloat(prompt('Insira a nota do 1º semestre: '))
var n2 = parseFloat(prompt('Insira a nota do 2º semestre: '))
var n3 = parseFloat(prompt('Insira a nota do 3º semestre: '))
var n4 = parseFloat(prompt('Insira a nota do 4º semestre: '))

var faltas = parseInt(prompt('Insira a quantidade de faltas: '))


var notaFinal = (n1 + n2 + n3 + n4) / 4
var media = 6
var limite = 25


if (notaFinal >= media && faltas <= limite) {
    document.write(`A média final do aluno foi de ${notaFinal}.` + '<br/>')
    document.write('Sendo assim, o aluno foi APROVADO!')
} else if (notaFinal >= media && faltas > limite) {
    document.write(`A média final do aluno foi de ${notaFinal}.` + '<br/>')
    document.write(`Porém, o aluno teve ${faltas} faltas, excedendo o limite de ${limite}.` + '<br/>')
    document.write('Sendo assim, o aluno foi REPROVADO POR FALTAS!')
} else if (notaFinal < media && faltas < limite) {
    document.write('Aluno REPROVADO por não atingir a média!')
} else {
    document.write('Aluno REPROVADO por média e falta!')
}