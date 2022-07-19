var fahr = parseInt(window.prompt('Insira o valor da temperatura em Fahrenheit: '));


function converterParaCelsius (fahr) {
    var celsius = (5/9) * (fahr-32);
    return celsius;
}

var temp = converterParaCelsius(fahr);

document.write(`A temperatura de ${fahr}ºF é igual a ${temp.toFixed(2)}ºC.`);