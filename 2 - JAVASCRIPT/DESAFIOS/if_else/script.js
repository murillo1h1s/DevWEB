var n1 = parseInt(prompt('Insira a sua idade: '))



if (n1 >= 0 && n1 < 15) {
    document.write('Faixa etária: criança!')
} else if (n1 < 30) {
    document.write('Faixa etária: jovem!')
} else if (n1 < 60) {
    document.write('Faixa etária: adulto!')
} else {
    document.write('Faixa etária: idoso!')
}