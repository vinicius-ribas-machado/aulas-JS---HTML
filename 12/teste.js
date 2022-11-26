function contar(){
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0)
    alert('coloque todos os dados')

    else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c+= p){
            res.innerHTML += `${c}-`
        }
    }

}
