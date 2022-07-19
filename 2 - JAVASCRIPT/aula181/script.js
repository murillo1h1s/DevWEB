var data = new Date()

document.write('.getDate( ) - Recuperando o dia de hoje: ', data.getDate(), '<br/>')
document.write('.getMonth( ) - Recuperando o mês: ', data.getMonth() + 1, '<br/>')
document.write('.getFullYear( ) - Recuperando o ano: ', data.getFullYear(), '<br/>')
document.write('<hr/>')

document.write(data.toString(), '<br/>')
data.setDate(data.getDate() + 1)
data.setMonth(data.getMonth() + 1)
document.write('<br/>')
document.write('Adicionando um dia a mais à data: ', data.toString(), '<br/>')
document.write('Adicionando um mês a mais à data: ', data.toString(), '<br/>')
