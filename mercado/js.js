function adicionar(){
    let tetxo = document.getElementById('texto').value;
    let list = document.getElementById('lista').innerHTML;
    let teste = 'teste'
    
    

    list += '<li>' + tetxo + '</li>' + '<li>' + teste + '</li>'

    document.getElementById('lista').innerHTML = list;
}