function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 

    
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = 'gray'
    }
    else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = 'orange'
    }
    else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = 'darkblue'
    }
}

