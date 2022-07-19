var altura = 0
var largura = 0

function ajustaTamanho() {
    altura = window.innerHeight
    largura = window.innerWidth

    return altura, largura
}

function posicaoAleatoria() {
    var posicaoX = Math.floor(Math.random() * largura) 
    var posicaoY = Math.floor(Math.random() * altura)

    console.log(posicaoX, posicaoY)

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = 'mosquito1'
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'

    document.body.appendChild(mosquito)
}