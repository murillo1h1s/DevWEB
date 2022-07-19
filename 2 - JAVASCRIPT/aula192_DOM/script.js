// console.log(document.getElementById("nome_usuario"))

// console.log(document.getElementsByTagName('input'))

//console.log(document.getElementsByClassName('campo_texto'))

function distCarac() {
    // armazenando o valor digitado
    var valor = document.getElementById('caractere').value

    // limpando o campo de digitação
    document.getElementById('caractere').value = ''

    valor = valor.trim() // limpando espaços em branco

    switch(valor) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            // a variável será sempre string
            // caso seja uma destas strings de caracteres numéricos, realizaremos o seguinte:
            document.getElementById('numeros').value += valor
            break;
        default:
            // caso não seja numérica, será letra; o código será o seguinte:
            document.getElementById('letras').value += valor
    }

}