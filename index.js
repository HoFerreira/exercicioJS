function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = './/Imagens/manha.jpg'
        document.body.style.background = '#f7bd69'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = './/Imagens/tarde.jpg'
        document.body.style.background = '#fc8b09'
    } else {
        //boa noite
        img.src = './/Imagens/noite.jpg'
        document.body.style.background = '#394e53'
    }
}
