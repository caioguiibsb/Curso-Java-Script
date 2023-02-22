var agora = new Date()
var diasem = agora.getDay()
console.log(diasem)

switch (diasem) {
    case 0:
        console.log('Segunda')
        break;

    case 1:
        console.log('terca')
        break;
    case 2:
        console.log('quarta')
        break;
    case 3:
        console.log('quinta')
        break;
    case 4:
        console.log('sexta')
        break;
    case 5:
        console.log('sabado')
        break;
    case 6:
        console.log('domingo')
        break;
    default:
        console.log(`[erro] dia invalido`)
        break;
}