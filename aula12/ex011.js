var idade = 45
console.log(`Voce tem ${idade}`)
if (idade < 16) {
    console.log('Nao vota')
}
else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
}

else {
    console.log('voto obrigatorio')
}