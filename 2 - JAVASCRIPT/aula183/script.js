// 15/01/2021
var data1 = new Date(2021, 0, 15);

// 23/02/2021
var data2 = new Date(2021, 1, 23);

document.write(data1.toString(), '<br/>')
document.write(data2.toString(), '<br/>')

data1 = data1.getTime()
data2 = data2.getTime()
dif = data2 - data1
ms = 24*60*60*1000
dias = dif / ms

document.write('Diferença de dias em ms: ', dif, '<br/>')
document.write('Diferença de dias: ', dias, '<br/>')
