carro(210)

function carro(velocidade){ 
    let pontos = 0
    if(velocidade > 70 && velocidade <90){
        pontos = 4
        console.log(`carteira com ${pontos}`)
    }

    if (velocidade > 100 && velocidade< 150){
        pontos = 10
        console.log(`carteira com ${pontos}`)
    }

    else{
        console.log('carteira aprendiada')
    }
}