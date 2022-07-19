var objetos = ['Cadeira', 'Impressora', 'Garfo']

function recuperarValor() {
    var valor = document.getElementById('texto').value
    console.log(valor)
    if (valor == '') {
        window.alert('Informe um valor válido!')
    } else if (objetos.indexOf(valor) != -1) {
        window.alert('Objeto já foi adicionado!')
    } else {
        objetos.push(valor)
        console.log(objetos)
        document.getElementById('texto').value = ''
    }
}

function ordenarValores() {
    console.log(objetos.sort())
}