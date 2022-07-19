function calcularAreaQuad (lag, alt) {
    var area = lag * alt
    return area
}

var lag = parseFloat(window.prompt('Insira a largura em metros: '))
var alt = parseFloat(window.prompt('Insira o comprimento em metros: '))
var area = calcularAreaQuad(lag, alt)

document.write(`A área total é igual a ${area.toFixed(2)} m².`)