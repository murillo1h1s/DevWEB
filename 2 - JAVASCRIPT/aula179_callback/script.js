function exibirArtigo(id, callbackSucesso, callbackErro) {
    //lógica: recuperar o id via requisição http
    if (false) {
        callbackSucesso('Funções callback em JS', 'aaaaaaaaaaaaaa')
    } else {
        callbackErro('Erro ao recuperar os dados')
    }
}

var callbackSucesso = function(titulo, descricao) {
    document.write(`<h1> ${titulo} </h1> <br/>`)
    document.write(`<p> ${descricao} </p> <br/>`)
}

var callbackErro = function(erro) {
    document.write(`<p>Erro: ${erro} </p> `)
}

exibirArtigo(1, callbackSucesso, callbackErro)
