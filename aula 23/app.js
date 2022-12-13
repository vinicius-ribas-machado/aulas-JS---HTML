var capturing = ''
var lastnames = ''



function capture(){
    
    capturing = document.getElementById('value').value
    lastnames = document.getElementById('lastname').value

    document.getElementById('valuewride').innerHTML = capturing
    document.getElementById('valueswride').innerHTML = lastnames
}