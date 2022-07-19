function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c') {
            document.getElementById('visor').value = ''
        } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('visor').value += valor
        } else if (valor === '=') {
            var resultado = eval(document.getElementById('visor').value) 
            document.getElementById('visor').value = resultado
        }
    }
    if (tipo === 'valor'){
        document.getElementById('visor').value += valor
    }
}