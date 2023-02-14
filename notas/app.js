
function funcaoA(){
    let valor1 = document.getElementById('Notaa').value
    let valor2 = document.getElementById('Notab').value
    let valor3 = document.getElementById('Notac').value

    let soma = Number(valor1)
    let soma2 = Number(valor2)
    let soma3 = Number(valor3)
    
    let resultado = soma + soma2 + soma3

    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML =  `Sua nota: ${resultado}`
    
}

function funcaoP(){
    let valor1 = document.getElementById('Notaa').value
    let valor2 = document.getElementById('Notab').value
    let valor3 = document.getElementById('Notac').value

    let soma = Number(valor1)
    let soma2 = Number(valor2)
    let soma3 = Number(valor3)
    
    let resultado = soma + soma2 + soma3 
    

    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML =  `Sua nota: ${resultado}`
    
}
