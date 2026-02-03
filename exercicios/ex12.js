let agora = new Date()
let hora = agora.getHours()
console.log(hora)
if (hora >= 6 && hora <= 12){
    console.log('bom dia')
} else if (hora >= 13 && hora <= 18){
    console.log('boa tarde')
} else {
    console.log('boa noite')
}