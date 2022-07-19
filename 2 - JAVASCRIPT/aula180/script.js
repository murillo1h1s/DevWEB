var texto = 'Dissecando essa STRING'

document.write(texto, '<br/>')
document.write('<br/>')
document.write(`length - Comprimento: ${texto.length}`, '<br/>')
document.write(`charAt( ) - Caractere do índice 16:  ${texto.charAt(16)}`, '<br/>')
document.write(`indexOf( ) - Índice do caractere 'o': ${texto.indexOf('o')}`, '<br/>')
document.write(`replace( ) - Substituindo elementos da string: ${texto.replace('STRING', 'TEXTO')}`, '<br/>')
document.write(`substr( ) - Extraindo uma parte da string: ${texto.substr(5, 5)}`, '<br/>')
document.write(`toLowerCase( ) - todas minúsculas: ${texto.toLowerCase()} <br/>`)
document.write(`toUpperCase( ) - todas maiúsculas: ${texto.toUpperCase()} <br/>`)
