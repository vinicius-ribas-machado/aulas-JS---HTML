

function convertefun(){
    let tempC = document.getElementById('grau').value
    let tempF = 0
    document.getElementById('grau').value = 0
    
    let conta = ((tempC * 9/5)+32)

    let resposta = document.getElementById('resposta').innerHTML
    document.getElementById('resposta').innerHTML = conta + ` Fahrenheit` 

}

