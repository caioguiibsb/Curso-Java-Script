function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idadad ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'crianca_masc.jpg')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homem_jovem.jpg')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem_adulto.jpg')
            }
            else {
                //velho
                img.setAttribute('src', 'homem_velho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'crianca_fem.jpg')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher_jovem.jpg')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher_adulto.jpg')
            }
            else {
                //velho
                img.setAttribute('src', 'mulher_velha.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}