function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO')
    }

    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'homem'
            if(idade >=0 && idade <12){
                img.setAttribute('src','h.c.jpg')
            }
            else if (idade < 21){
                img.setAttribute('src', 'h.j.jpg')
            }
            else if (idade < 50){
                img.setAttribute('src', 'h.a.jpg')
            }
            else{
                img.setAttribute('src', 'h.v.jpg')
            }
        }

        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <12){
                img.setAttribute('src', 'm.c.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'm.j.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'm.a.jpg')
            }
            else {
                img.setAttribute('src', 'm.v.jpg')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        
        res.appendChild(img)
    }
}
