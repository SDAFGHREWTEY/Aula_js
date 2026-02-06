const salgado = prompt('qual salgado voce quer')
const salgado_adicional = prompt('quer mais de um salgado')
const quantidade = prompt('quantos salgados voce quer')
const recheio = prompt('qual o recheio do salgados')
const refri = prompt('qual refri voce quer')
const quantos_refri = prompt('quantos refris voce quer')
const valor = quantidade * 6
const valor_refri = quantos_refri * 10

const total = valor + valor_refri

if(salgado_adicional =="sim") {
    alert(`Salgado: ${salgado} \n salgado adicional: ${salgado_adicional} \n Quantidade: ${quantidade} \n Recheio:${recheio} \n Recheio adicional: ${recheio_adicional} \n Refri: ${refri} \n Quantidade de refri: ${quantos_refri}\n Valor total: ${total}`)
}
    else {
        alert(`Salgado: ${salgado}\n Quantidade: ${quantidade} \n Recheio:${recheio}\n Refri: ${refri} \n Quantidade de refri: ${quantos_refri}\n Valor total: ${total}`) 
    }