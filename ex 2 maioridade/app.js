function enviar(){
    let idade = document.getElementById('idadei').value
    


    if(idade < 18){
        document.getElementById('pode').innerHTML = `Você ainda nao é maior de idade não pode se alistar`
    }
    else{ 
        document.getElementById('pode').innerHTML = `Você é maior de idade ja pode se alistar`
    }
    
    
    
}

