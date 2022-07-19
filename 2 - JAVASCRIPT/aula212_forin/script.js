var listaConvidados = ['Murillo', 'Guilherme', 'Fernanda', 'Bob', 'Paçoca']

document.write('Lista de convidados: <br/>')
for (var x in listaConvidados) {
    document.write(`${listaConvidados[x]} <br/>`)
}