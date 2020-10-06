document.querySelector(`input#add`).addEventListener(`click`, adicionar)
var val = []
var num = document.getElementById('numeros')
var res = document.getElementById('res')



function adicionar(){
    
    if ((num.value.length) == 0){
        window.alert("[ERRO] Digite um numero")
    } else if ((num.value) > 100 || (num.value) <= 0 || (num.value) == 0){
        window.alert("[ERRO] Numero precia ser entre 1 e 100")
    } else if ((num.value) in val) {
        window.alert("[ERRO] Numero repetido, digite um numero diferente")
    } else {
        var numV = Number(num.value)
        val.push(numV)
        var lista = document.getElementById('lista')
        var item = document.createElement('option')
        item.innerHTML = `Valor ${numV} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        }
        num.value =''
        num.focus
    }

    function finalizar(){
        val.sort()
        var reducer = (accumulator, currentValue) => accumulator + currentValue;
        res.innerHTML += `<p>Ao todo temos ${val.length} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado é ${Math.max(...val)}</p>`
        res.innerHTML += `<p>O menor valor informado é ${Math.min(...val)}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${val.reduce(reducer)}</p>`
        res.innerHTML += `<p>A media de todos valores é ${(val.reduce(reducer)) / val.length}</p>`

       
    }